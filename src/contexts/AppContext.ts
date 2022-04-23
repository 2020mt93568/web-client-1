import { createContext } from "react";

import { IAppContext } from "../models/Model";

const defaultContext: IAppContext = {
    token: "",
    setToken: () => { }
};

export const AppContext = createContext<IAppContext>(defaultContext);
