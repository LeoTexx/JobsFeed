import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "../../components/SearchBar";

describe("SearchBar Component", () => {
  it("should display the right search query", () => {
    const { getByTestId } = render(<SearchBar onSearch={jest.fn()} />);

    const searchBar = getByTestId("search-bar");

    expect(searchBar.value).toBe("");
    fireEvent.change(searchBar, { target: { value: "Frontend" } });
    expect(searchBar.value).toBe("Frontend");
  });
  it("should trigger the onChange function on click or on Enter press", () => {
    const onSearch = jest.fn();
    const { getByTestId } = render(<SearchBar onSearch={onSearch} />);

    const searchBar = getByTestId("search-bar");
    const searchButton = getByTestId("search-button");

    expect(searchButton).toBeDefined();
    expect(searchBar.value).toBe("");
    fireEvent.change(searchBar, { target: { value: "Frontend" } });
    userEvent.click(searchButton);
    expect(onSearch).toHaveBeenCalledWith(searchBar.value);
  });
});
