import { ILoginPayload, IRegisterPayload } from "../models/PayloadInterface";
import { Config } from "../config/config";


export namespace NAuthenticationApi {
    export const login = (payload: ILoginPayload): Promise<any> => {
        return fetch(`${Config?.webServerBaseUrl}/api/v1/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            });
    };

    export const register = (payload: IRegisterPayload): Promise<any> => {
        return fetch(`${Config?.webServerBaseUrl}/api/v1/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            });
    };
}
