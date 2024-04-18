import RestaurantCategory from "../RestaurantCategory";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import MOCK_DATA from "../mocks/resCategory.json";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("Should load the restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantCategory />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  //searching for recommended tab
  const accordianHeader = screen.getByText("Recommended (20)");
  //after searching the tab firing an event
  fireEvent.click(accordianHeader);

  //searching for add button
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  //after searching the button firing an event
  fireEvent.click(addBtns[0]);

  //Expecting the assertion to be 20 items
  expect(screen.getAllByTestId("foodItems").length).ToBe(20);

  //Here checking if the header has dded the cart items in head nav bar
  expect(screen.getByText("Cart (1 item)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart (2 item)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).ToBe(22);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).ToBe(20);
  expect(
    screen.getByText("Cart is Empty. Add Items to the cart")
  ).toBeInTheDocument();
});
