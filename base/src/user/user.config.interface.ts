import { Provider } from "@nestjs/common";

export interface UserConfig {
    maxAge?: number | string;/** expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, "2 days", "10h", "7d" */
    loginType?: LoginType;
    emailVerification?: Boolean;
    providers?: Array<Provider<any>>;
}

enum LoginType { Email, Username, Phone, TwoFactorAuthentication }