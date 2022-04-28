import { Input, SearchButton } from "@textkernel/oneui";
import React, { useState } from "react";

import style from "../styles/SearchBar.module.scss";

interface Props {
  onSearch: (search: string) => void;
}

export function SearchBar({ onSearch }: Props) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const searchText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.type === "click") {
      onSearch(searchQuery);
    }
  };

  return (
    <label className={style.container}>
      <Input
        data-testid="search-bar"
        disabled={false}
        isBlock={false}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={searchText}
        placeholder="Find your dream job"
        size="normal"
        type="search"
      />
      <SearchButton
        data-testid="search-button"
        disabled={false}
        onClick={() => onSearch(searchQuery)}
        type="submit"
      />
    </label>
  );
}
