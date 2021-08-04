import { ReactNativeOptions } from "./backend";
/**
 * Inits the SDK
 */
export declare function init(options?: ReactNativeOptions): void;
/**
 * Sets the release on the event.
 */
export declare function setRelease(release: string): void;
/**
 * Sets the dist on the event.
 */
export declare function setDist(dist: string): void;
/**
 * If native client is available it will trigger a native crash.
 * Use this only for testing purposes.
 */
export declare function nativeCrash(): void;
//# sourceMappingURL=sdk.d.ts.map