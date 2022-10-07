import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Todo";
import "@testing-library/jest-dom";
describe("todo tests", () => {
    let button, input;
    beforeEach(() => {
        render(<Todo />);
        button = screen.getByText("Add");
        input = screen.getByLabelText("Text");
    });
    test("given default objects should render", () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    });
    test("Input ve button dokümanda bulunmalı", () => {
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
    test("Input dolduğunda butona basılınca listeye value eklenmeli", () => {
        const item = "ITEM D";
        userEvent.type(input, item);
        userEvent.click(button);
        expect(screen.getByText(item)).toBeInTheDocument();
    });
});
