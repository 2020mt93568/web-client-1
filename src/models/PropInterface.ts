import { TAuthenticationMode } from "./Type";

export interface IAuthenticationProp {
    setMode: React.Dispatch<React.SetStateAction<TAuthenticationMode>>;
}
