import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import todoReducer from "./slices/todoSlice";

const renderApp = () => {
  const store = configureStore({ reducer: { todos: todoReducer } });
  return render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
};

test("creates, edits, and deletes an action", () => {
  renderApp();

  fireEvent.click(screen.getByRole("button", { name: /create your first action/i }));
  fireEvent.change(screen.getByLabelText("Action"), {
    target: { value: "Write tests" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Save Action" }));
  expect(screen.getByText("Write tests")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Edit action" }));
  fireEvent.change(screen.getByLabelText("Action"), {
    target: { value: "Write Redux tests" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Update Action" }));
  expect(screen.getByText("Write Redux tests")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Delete action" }));
  expect(screen.getByText("No actions yet")).toBeInTheDocument();
});
