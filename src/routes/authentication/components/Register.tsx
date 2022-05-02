import { useState } from "react";

import { Button, Card, CardActions, CardContent, CardHeader, TextField, Tooltip } from "@material-ui/core";

import { EMAIL_HELPER_TEXT, USER_NAME_HELPER_TEXT, PASSWORD_HELPER_TEXT } from "../../../constants/Constant";
import { EAuthenticationMode } from "../../../constants/Enum";
import { IAuthenticationProp } from "../../../models/PropInterface";

import { NValidator } from "../../../validators/Validator";
import { NAuthenticationService } from "../../../services/Authentication";
import { IRegisterPayload } from "../../../models/PayloadInterface";

const styles = {
    card: {
        width: "300px"
    },
    cardActions: {
        display: "flex",
        justifyContent: "space-between"
    }
};

export const Register = (props: IAuthenticationProp) => {

    const [username, setUsername] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        const payload: IRegisterPayload = { username, emailId, password };
        console.log(payload);
        const response = await NAuthenticationService.register(payload);
        console.log(response);
        props.setMode(EAuthenticationMode.login);
    };

    return (
        <Card style={styles.card}>
            <CardHeader
                title="Register"
            />
            <CardContent>
                <TextField
                    error={!NValidator.isUsernameValid(username)}
                    required
                    fullWidth
                    label="Username"
                    type="text"
                    value={username}
                    onChange={(event) => { setUsername(event.target.value); }}
                    helperText={NValidator.isUsernameValid(username) ? "" : USER_NAME_HELPER_TEXT}
                    variant="outlined"
                />
                <br />
                <br />
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
            <CardActions style={styles.cardActions} disableSpacing>
                <Tooltip title="Register">
                    <span>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={!username || !emailId || !password || !NValidator.isUsernameValid(username) || !NValidator.isEmailValid(emailId) || !NValidator.isPasswordValid(password)}
                            onClick={() => { register(); }}
                        >
                            Register
                        </Button>
                    </span>
                </Tooltip>
                <Tooltip title="Login">
                    <Button
                        onClick={() => { props.setMode(EAuthenticationMode.login); }}
                    >
                        Login
                    </Button>
                </Tooltip>
            </CardActions>
        </Card>
    );
};