import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Button, Card, CardActions, CardContent, CardHeader, TextField, Tooltip } from "@material-ui/core";
import Alert from '@mui/material/Alert';

import { EMAIL_HELPER_TEXT, PASSWORD_HELPER_TEXT } from "../../../constants/Constant";
import { AppContext } from "../../../contexts/AppContext";

import { EAuthenticationMode } from "../../../constants/Enum";
import { IAuthenticationProp } from "../../../models/PropInterface";

import { NValidator } from "../../../validators/Validator";
import { NAuthenticationService } from "../../../services/Authentication";
import { ILoginPayload } from "../../../models/PayloadInterface";

const styles = {
    card: {
        width: "300px"
    },
    cardActions: {
        display: "flex",
        justifyContent: "space-between"
    }
};

export const Login = (props: IAuthenticationProp) => {

    const { setToken } = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState(""); 

    const login = async () => {
        const payload: ILoginPayload = { emailId, password };
        console.log(payload);
        const response = await NAuthenticationService.login(payload);
        console.log(response);
        if(response.token) {
            setToken(response.token);
            setErrorMessage("");
            if (location.pathname === "/authentication") {
                navigate("/home", { replace: true });
            }
        } else if(response.message) {
            setErrorMessage(response.message);
        }
        
    };

    return (
        <Card style={styles.card}>
            <CardHeader
                title="Login"
            />
            <CardContent>
                <TextField
                    error={!NValidator.isEmailValid(emailId)}
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    value={emailId}
                    onChange={(event) => { setEmailId(event.target.value); }}
                    helperText={NValidator.isEmailValid(emailId) ? "" : EMAIL_HELPER_TEXT}
                    variant="outlined"
                />
                <br />
                <br />
                <TextField
                    error={!NValidator.isPasswordValid(password)}
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(event) => { setPassword(event.target.value); }}
                    helperText={NValidator.isPasswordValid(password) ? "" : PASSWORD_HELPER_TEXT}
                    variant="outlined"
                />
            </CardContent>
            {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
            <CardActions style={styles.cardActions} disableSpacing>
                <Tooltip title="Login">
                    <span>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={!emailId || !password || !NValidator.isEmailValid(emailId) || !NValidator.isPasswordValid(password)}
                            onClick={() => { login(); }}
                        >
                            Login
                        </Button>
                    </span>
                </Tooltip>
                <Tooltip title="Register">
                    <Button
                        onClick={() => { props.setMode(EAuthenticationMode.register); }}
                    >
                        Register
                    </Button>
                </Tooltip>
            </CardActions>
        </Card>
    );
};