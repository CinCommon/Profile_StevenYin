import React, { createContext, useState } from "react";
import data, { Data } from "./data";

interface AppContextValue {
    data: Data;
    setData: React.Dispatch<React.SetStateAction<Data>>;
}

const defaultContextValue: AppContextValue = {
    data,
    setData: () => {},
};

export const AppContext = createContext<AppContextValue>(defaultContextValue);

interface Props {
    children: React.ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {
    const [state, setState] = useState<Data>(data);

    return (
        <AppContext.Provider value={{ data: state, setData: setState }}>
            {children}
        </AppContext.Provider>
    );
};