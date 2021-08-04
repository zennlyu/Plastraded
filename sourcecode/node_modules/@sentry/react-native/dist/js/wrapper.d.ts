import { Event, Response } from "@sentry/types";
import { SentryError } from "@sentry/utils";
import { ReactNativeOptions } from "./backend";
/**
 * Our internal interface for calling native functions
 */
export declare const NATIVE: {
    /**
     * Sending the event over the bridge to native
     * @param event Event
     */
    sendEvent(event: Event): Promise<Response>;
    /**
     * Starts native with the provided options.
     * @param options ReactNativeOptions
     */
    startWithOptions(options?: ReactNativeOptions): Promise<boolean>;
    /**
     * Fetches the release from native
     */
    fetchRelease(): Promise<{
        build: string;
        id: string;
        version: string;
    }>;
    /**
     * Fetches the device contexts. Not used on Android.
     */
    deviceContexts(): Promise<object>;
    /**
     * Sets log level in native
     * @param level number
     */
    setLogLevel(level: number): void;
    /**
     * Triggers a native crash.
     * Use this only for testing purposes.
     */
    crash(): void;
    /**
     * Checks whether the RNSentry module is loaded.
     */
    isModuleLoaded(): boolean;
    /**
     *  Checks whether the RNSentry module is loaded and the native client is available
     */
    isNativeClientAvailable(): boolean;
    /**
     *  Checks whether the RNSentry module is loaded and native transport is available
     */
    isNativeTransportAvailable(): boolean;
    _NativeClientError: SentryError;
    platform: import("react-native").PlatformOSType;
};
//# sourceMappingURL=wrapper.d.ts.map