"use client"
import { ReactNode, createContext, useState } from "react";

interface Children {
    children: ReactNode
}

export const SearchContext = createContext({
    search: "" as string,
    setSearch: (search: string) => { }
})

export default function SearchProvider({ children }: Children) {
    const [search, setSearch] = useState<string>("");

    return (
        <SearchContext.Provider
            value={
                {
                    search,
                    setSearch
                }
            }
        >
            {children}
        </SearchContext.Provider>
    )
}