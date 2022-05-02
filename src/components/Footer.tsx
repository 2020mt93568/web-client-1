import { AppBar, Toolbar } from "@material-ui/core";

export const Footer = () => {
    return (
        <AppBar color="default" position="relative" >
            <Toolbar variant="dense">
                &copy; 2022, All rights reserved, To Do App.
            </Toolbar>
        </AppBar>
    );
};
