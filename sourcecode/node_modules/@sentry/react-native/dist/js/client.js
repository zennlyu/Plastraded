import { BaseClient } from "@sentry/core";
import { ReactNativeBackend } from "./backend";
import { SDK_NAME, SDK_VERSION } from "./version";
/**
 * The Sentry React Native SDK Client.
 *
 * @see ReactNativeOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
export class ReactNativeClient extends BaseClient {
    /**
     * Creates a new React Native SDK instance.
     * @param options Configuration options for this SDK.
     */
    constructor(options) {
        super(ReactNativeBackend, options);
    }
    /**
     * @inheritDoc
     */
    _prepareEvent(event, scope, hint) {
        event.platform = event.platform || "javascript";
        event.sdk = Object.assign(Object.assign({}, event.sdk), { name: SDK_NAME, packages: [
                ...((event.sdk && event.sdk.packages) || []),
                {
                    name: "npm:@sentry/react-native",
                    version: SDK_VERSION,
                },
            ], version: SDK_VERSION });
        return super._prepareEvent(event, scope, hint);
    }
    /**
     * If native client is available it will trigger a native crash.
     * Use this only for testing purposes.
     */
    nativeCrash() {
        this._getBackend().nativeCrash();
    }
}
//# sourceMappingURL=client.js.map