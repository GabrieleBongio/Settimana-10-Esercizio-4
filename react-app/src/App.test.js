import { fireEvent, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "./App";
import fantasyBooks from "./data/fantasy.json";
import historyBooks from "./data/history.json";
import horrorBooks from "./data/horror.json";
import romanceBooks from "./data/romance.json";
import scifiBooks from "./data/scifi.json";

describe("Component App is working correctly", () => {
  // Test 1

  it("mounts Component Welcome correctly?", () => {
    render(<App />);
    const h1InWelcome = screen.getByText(/benvenuto nella libreact/i);
    expect(h1InWelcome).toBeInTheDocument();
  });

  // Test 2

  it("Creates as many cards as the number of books?", () => {
    render(<App />);
    const booksArray = horrorBooks.concat(historyBooks).concat(fantasyBooks).concat(romanceBooks).concat(scifiBooks);
    const allTheCards = screen.queryAllByText(/scopri di più/i);
    expect(allTheCards).toHaveLength(booksArray.length);
  });

  // Test 3

  it("mounts Component CommentArea correctly?", () => {
    render(<App />);
    const CommentArea = screen.getByTestId("CommentArea");
    expect(CommentArea).toBeInTheDocument();
  });

  // Test 4

  describe("BookList is filtered correctly?", () => {
    it("returns 14 books if 'Fire' is searched?", async () => {
      render(<App />);
      const user = userEvent.setup();
      const searchInput = screen.getByPlaceholderText(/cerca nella libreact/i);
      await user.type(searchInput, "Fire");
      const filteredList = await screen.findAllByText(/Scopri di più/i);
      expect(filteredList).toHaveLength(14);
    });

    it("returns 155 books if 'A ' is searched?", async () => {
      render(<App />);
      const user = userEvent.setup();
      const searchInput = screen.getByPlaceholderText(/cerca nella libreact/i);
      await user.type(searchInput, "A ");
      const filteredList = await screen.findAllByText(/Scopri di più/i);
      expect(filteredList).toHaveLength(155);
    });
  });

  // Test 5

  it("changes the border of a SingleBook if clicked?", () => {
    render(<App />);
    const allTheCards = screen.getAllByTestId(/SingleBook/);
    fireEvent.click(allTheCards[0].firstChild.firstChild);
    expect(allTheCards[0].firstChild.classList.contains("border-danger")).toBe(true);
  });

  // Test 6

  it("remove the border-danger from the first book clicked when another book is clicked?", () => {
    render(<App />);
    const allTheCards = screen.getAllByTestId(/SingleBook/);
    fireEvent.click(allTheCards[0].firstChild.firstChild);
    fireEvent.click(allTheCards[1].firstChild.firstChild);
    expect(allTheCards[0].firstChild.classList.contains("border-danger")).toBe(false);
  });

  // Test 7

  it("has no SingleComments into the CommentArea when no book is selected", () => {
    render(<App />);
    const allTheComments = screen.queryAllByTestId(/SingleComment/);
    expect(allTheComments).toHaveLength(0);
  });

  // Test 8

  it("creates SingleComments in the CommentArea of a Book if it is selected", async () => {
    render(<App />);
    const allTheCards = screen.getAllByTestId(/SingleBook/);
    fireEvent.click(allTheCards[0].firstChild.firstChild);
    const allTheComments = await screen.findAllByTestId(/SingleComment/);
    expect(allTheComments.length).toBeGreaterThan(0);
  });
});
