import { render, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("calls the onCategoryChange callback prop when the select is changed", () => {
  const onCategoryChange = jest.fn();
  const { getByRole } = render(
    <Filter selectedCategory="All" handleCategoryChange={onCategoryChange} />
  );
  fireEvent.change(getByRole("combobox"), { target: { value: "Dairy" } });
  expect(onCategoryChange).toHaveBeenCalled();
});
