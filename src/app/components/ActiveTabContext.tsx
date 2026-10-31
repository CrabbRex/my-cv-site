"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type ActiveTabContextType = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const ActiveTabContext = createContext<ActiveTabContextType | undefined>(undefined);

// Nav tabs are top-level routes, so /projects/foo lights up /projects.
const tabForPath = (pathname: string) => "/" + (pathname.split("/")[1] ?? "");

export const ActiveTabProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState(() => tabForPath(pathname));

    // Clicks set the tab straight away for the animation; this keeps it right on direct loads and back/forward.
    useEffect(() => {
        setActiveTab(tabForPath(pathname));
    }, [pathname]);

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
