import { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { AppBar, IconButton, Menu, MenuItem, Toolbar, Tooltip } from "@material-ui/core";
import { Home, AccountCircle } from "@material-ui/icons";

import { AppContext } from "../contexts/AppContext";

const styles = {
    spacer: {
        flexGrow: 1
    }
};

export const Header = () => {

    const { token, setToken } = useContext(AppContext);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar color="primary" position="relative">
            <Toolbar variant="dense">
                <Tooltip title="Home">
                    <Link to="/">
                        <IconButton
                            edge="start"
                            color="inherit"
                        >
                            <Home />
                        </IconButton>
                    </Link>
                </Tooltip>
                <div>To Do App</div>
                <div style={styles.spacer} />
                {token ?
                    <Tooltip title="Account">
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-haspopup="true"
                            onClick={handleMenu}
                        >
                            <AccountCircle />
                        </IconButton>
                    </Tooltip> :
                    <Tooltip title="Login">
                        <Link to="/authentication">
                            Login
                        </Link>
                    </Tooltip>}
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <Tooltip title="Todo">
                        <Link to="/todo">
                            <MenuItem onClick={handleClose}>Todo</MenuItem>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Pofile">
                        <Link to="/profile">
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Logout">
                        <MenuItem onClick={() => { setToken(""); handleClose(); }}>
                            Logout
                        </MenuItem>
                    </Tooltip>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};
