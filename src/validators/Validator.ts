export namespace NValidator {

    export const isNameValid = (name: string): boolean => {
        if (!name) {
            return true;
        }
        const re = /^[A-Za-z\s]+$/;
        return re.test(name);
    };

    export const isEmailValid = (email: string): boolean => {
        if (!email) {
            return true;
        }
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };

    export const isPasswordValid = (password: string): boolean => {
        // return true;
        if (!password) {
            return true;
        }
        if (password.match(/[a-z]/g) &&
            password.match(/[A-Z]/g) &&
            password.match(/[0-9]/g) &&
            password.match(/[^a-zA-Z\d]/g) &&
            password.length >= 8) {
            return true;
        } else {
            return false;
        }
    };
}
