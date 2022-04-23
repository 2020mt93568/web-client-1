import { ILoginPayload, IRegisterPayload } from "../models/PayloadInterface";

import { NAuthenticationApi } from "../apis/Authentication";
import { ILoginResponse } from "../models/ResponseInterface";

export namespace NAuthenticationService {
    export const login = (payload: ILoginPayload): Promise<ILoginResponse> => {
        return NAuthenticationApi.login(payload);
    };

    export const register = (payload: IRegisterPayload): Promise<any> => {
        return NAuthenticationApi.register(payload);
    };
}
