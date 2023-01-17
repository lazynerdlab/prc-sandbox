import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../app/store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import Loader from "../../utils/Loader";

describe(Login, () => {
  it("tests login form", async () => {
    // const handleSubmit = jest.fn();
    const user = userEvent.setup();
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>
      )
      .toJSON();
    await user.type(screen.getByLabelText(/Email:/i), "sandbox@mail.com");
    await user.type(screen.getByLabelText(/Password:/i), "sandbox");
    await user.click(screen.getByRole("button", { name: /Login/i }));
    await waitFor(() => {
      expect(tree).toMatchSnapshot();
    });
  });
});
