"use client"
import { createContext, useContext, useState } from "react";

type ActiveTabContextType = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const ActiveTabContext = createContext<ActiveTabContextType | undefined>(undefined);

export const ActiveTabProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeTab, setActiveTab] = useState('/');

    return (
        <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </ActiveTabContext.Provider>
    );
};

export const useActiveTab = () => {
    const context = useContext(ActiveTabContext);
    if (!context) throw new Error("useActiveTab must be used within an ActiveTabProvider");
    return context;
}