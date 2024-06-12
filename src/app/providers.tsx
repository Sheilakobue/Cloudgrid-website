"use client";

import { ThemeProvider } from 'next-themes';
import React from 'react';

/**
 * Providers component
 * Wraps the children components with the ThemeProvider to enable theme switching.
 * @param {React.ReactNode} children - The child components to be wrapped by the provider.
 * @returns {JSX.Element} The Providers component JSX
 */
export function Providers({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
}
