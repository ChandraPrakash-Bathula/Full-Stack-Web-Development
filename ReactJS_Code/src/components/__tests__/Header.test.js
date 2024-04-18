import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component Test Cases", () => {
  it("Should Load Header Component with LogIn Component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const LogInBtn = screen.getByRole("button", { name: "LogIn" });
    expect(LogInBtn).toBeInTheDocument();
  });

  it("Should Load Header Component with LogIn Component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const LogIn = screen.getByText("LogIn");
    expect(LogIn).toBeInTheDocument();
  });

  it("Should Load Header Component with Cart 0 Items in the Component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItem = screen.getByText("Cart (0 item)");
    expect(cartItem).toBeInTheDocument();
  });

  it("Should Load Header Component with Cart in the Component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();
  });

  it("Should Load Header Component with Cart in the Component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const onlineStatus = screen.getByText(/✅/);
    expect(onlineStatus).toBeInTheDocument();
  });

  it("Should Change to Login to Logout when Clicked in the Header Component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const btnToggle = screen.getByRole('button',{name:'LogIn'});

    fireEvent.click(btnToggle)

const logOutBtn = screen.getByRole('button',{name : 'LogOut'})
    expect(logOutBtn).toBeInTheDocument();
  });
});