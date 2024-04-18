import Foodcard from "../FoodCard"
import { screen, render } from "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/foodCardMock.json"
import "@testing-library/jest-dom"

it("Should render Restaurant Card with the props Data", () => {
  render(<Foodcard resData={MOCK_DATA} />);

  const name = screen.getByText("Domino's Pizza");

  expect(name).toBeInTheDocument();
});
