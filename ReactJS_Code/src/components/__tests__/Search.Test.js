import Body from "../Body";
import { screen, render } from "@testing-library/jest-dom";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { fireEvent } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search restaurants list for Biryani text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeClick = screen.getAllByTestId("resCard");

  expect(cardsBeforeClick.length).toBeGreaterThan(5);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchId = screen.getByTestId("searchInput");
  fireEvent.change(searchId, { target: { value: "Laddu" } });
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(searchBtn).toBeInTheDocument();
  expect(searchId).toBeInTheDocument();
  expect(cardsAfterSearch.length).toBeGreaterThan(1);
});
