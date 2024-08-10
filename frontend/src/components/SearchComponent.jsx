import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchComponent = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (query) {
                setIsSearching(true);
                axios
                    .get(`http://localhost:5000/api/search?q=${query}`)
                    .then((response) => {
                        setResults(response.data);
                    })
                    .catch((error) => {
                        console.error("Error fetching search results:", error);
                    })
                    .finally(() => {
                        setIsSearching(false);
                    });
            } else {
                setResults([]);
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    return (
        <div className="relative w-full max-w-lg">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name..."
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-indigo-500 text-black"
                aria-label="Search by name"
            />
            <div className="absolute w-full bg-white border-gray-300 rounded-lg shadow-lg mt-1 z-10">
                {isSearching ? (
                    <div className="p-4 text-center">
                        <p className="text-sm text-gray-600 mt-2">Searching...</p>
                    </div>
                ) : results.length > 0 ? (
                    <ul className="max-h-60 overflow-y-auto">
                        {results.map((result) => (
                            <li
                                key={result._id}
                                className="p-2 hover:bg-indigo-100 hover:rounded-lg cursor-pointer"
                            >
                                <span className="block font-semibold text-gray-700">{result.name}</span>
                                <span className="block text-sm text-gray-500">{result.email}</span>
                            </li>
                        ))}
                    </ul>
                ) : query && (
                    <div className="p-4 text-center text-gray-600">
                        <p>No results found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchComponent;
