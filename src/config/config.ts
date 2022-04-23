import { LocalConfig } from "./config.local";

const getConfig = () => {
    switch (process.env.REACT_APP_NODE_ENV) {
        default:
            return LocalConfig;
    }
};

export const Config = getConfig();