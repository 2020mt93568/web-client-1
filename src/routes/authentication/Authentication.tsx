import { useState } from "react";
import { EAuthenticationMode } from "../../constants/Enum";

import { TAuthenticationMode } from "../../models/Type";

import { Login } from "./components/Login";
import { Register } from "./components/Register";

const styles = {
    authenticationContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
};

export const Authentication = () => {
    const [mode, setMode] = useState<TAuthenticationMode>(EAuthenticationMode.login);
    return (
        <div style={styles.authenticationContainer}>
            {mode === EAuthenticationMode.login ?
                <Login setMode={setMode} /> :
                mode === EAuthenticationMode.register ?
                    <Register setMode={setMode} /> :
                    <>Authentication</>
            }
        </div>
    );
};