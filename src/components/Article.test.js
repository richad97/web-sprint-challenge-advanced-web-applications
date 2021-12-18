import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";

const testArticle = {
  id: "",
  headline: "test headline",
  createdOn: 0,
  author: "test author",
  image: 0,
  summary: "",
  body: "",
};

const testArticleEmpty = {
  id: "",
  headline: "",
  createdOn: 0,
  author: "",
  image: 0,
  summary: "",
  body: "",
};

test("renders component without errors", () => {
  render(<Article article={testArticle} />);
});

test("renders headline, author from the article when passed in through props", () => {
  render(<Article article={testArticle} />);

  const headline = screen.queryByText(/test headline/i);
  const author = screen.queryByText(/test author/i);

  expect(headline).toBeInTheDocument();
  expect(headline).toBeTruthy();
  expect(headline).toHaveTextContent("test headline");

  expect(author).toBeInTheDocument();
  expect(author).toBeTruthy();
  expect(author).toHaveTextContent("test author");
});

test('renders "Associated Press" when no author is given', () => {
  render(<Article article={testArticleEmpty} />);

  const associatedPress = screen.queryByText(/associated press/i);

  expect(associatedPress).toBeInTheDocument();
  expect(associatedPress).toBeTruthy();
  expect(associatedPress).toHaveTextContent("Associated Press");
});

test("executes handleDelete when the delete button is pressed", () => {
  /*I don't understand how to do this.*/
});

//Task List:
//1. Complete all above tests. Create test article data when needed.
