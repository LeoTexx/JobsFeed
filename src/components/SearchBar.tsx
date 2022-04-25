import { Input, SearchButton } from "@textkernel/oneui";
import { useState } from "react";

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
        disabled={false}
        isBlock={false}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={searchText}
        placeholder="Some text goes here..."
        size="normal"
        type="search"
      />
      <SearchButton
        disabled={false}
        onClick={() => onSearch(searchQuery)}
        type="submit"
      />
    </label>
  );
}
