import { getCurrentHub } from "@sentry/core";
import { Severity } from "@sentry/types";
import { logger } from "@sentry/utils";
/** ReactNativeErrorHandlers Integration */
let ReactNativeErrorHandlers = /** @class */ (() => {
    class ReactNativeErrorHandlers {
        /** Constructor */
        constructor(options) {
            /**
             * @inheritDoc
             */
            this.name = ReactNativeErrorHandlers.id;
            this._options = Object.assign({ onerror: true, onunhandledrejection: true }, options);
        }
        /**
         * @inheritDoc
         */
        setupOnce() {
            this._handleUnhandledRejections();
            this._handleOnError();
        }
        // tslint:disable: no-unsafe-any
        /**
         * Handle Promises
         */
        _handleUnhandledRejections() {
            if (this._options.onunhandledrejection) {
                // tslint:disable-next-line: no-implicit-dependencies
                const tracking = require("promise/setimmediate/rejection-tracking");
                tracking.disable();
                tracking.enable({
                    allRejections: true,
                    onHandled: () => {
                        // We do nothing
                    },
                    onUnhandled: (id, error) => {
                        if (__DEV__) {
                            console.warn(id, error);
                        }
                        getCurrentHub().captureException(error, {
                            data: { id },
                            originalException: error
                        });
                    }
                });
            }
        }
        /**
         * Handle erros
         */
        _handleOnError() {
            if (this._options.onerror) {
                let handlingFatal = false;
                const defaultHandler = ErrorUtils.getGlobalHandler && ErrorUtils.getGlobalHandler();
                ErrorUtils.setGlobalHandler((error, isFatal) => {
                    // We want to handle fatals, but only in production mode.
                    const shouldHandleFatal = isFatal && !global.__DEV__;
                    if (shouldHandleFatal) {
                        if (handlingFatal) {
                            logger.log("Encountered multiple fatals in a row. The latest:", error);
                            return;
                        }
                        handlingFatal = true;
                    }
                    getCurrentHub().withScope(scope => {
                        if (isFatal) {
                            scope.setLevel(Severity.Fatal);
                        }
                        getCurrentHub().captureException(error, {
                            originalException: error
                        });
                    });
                    const client = getCurrentHub().getClient();
                    // If in dev, we call the default handler anyway and hope the error will be sent
                    // Just for a better dev experience
                    if (client && !__DEV__) {
                        client.flush(client.getOptions().shutdownTimeout || 2000).then(() => {
                            defaultHandler(error, isFatal);
                        });
                    }
                    else {
                        // If there is no client something is fishy, anyway we call the default handler
                        defaultHandler(error, isFatal);
                    }
                });
            }
        }
    }
    /**
     * @inheritDoc
     */
    ReactNativeErrorHandlers.id = "ReactNativeErrorHandlers";
    return ReactNativeErrorHandlers;
})();
export { ReactNativeErrorHandlers };
//# sourceMappingURL=reactnativeerrorhandlers.js.map