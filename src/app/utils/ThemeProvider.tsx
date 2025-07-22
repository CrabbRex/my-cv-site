// File: src/app/utils/ThemeProvider.tsx
"use client";
import React, { ReactNode } from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

interface ThemeProviderProps {
    children: ReactNode;
    [key: string]: unknown;
}

export default function ThemeProvider({children, ...props}: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}