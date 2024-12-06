'use client';

import { createContext, useContext, useState } from 'react';

const SearchContext = createContext()

export function SearchProvider({ children }) {
	const [query, setQuery] = useState('');

	const handleSearch = (searchQuery) => setQuery(searchQuery);

	return (
		<SearchContext.Provider value={{ query, handleSearch }}>
			{children}
		</SearchContext.Provider>
	);
}

export function useSearch() {
	return useContext(SearchContext)
}