import React from "react";
import { cleanup, render } from "@testing-library/react";
import Facade from "../../components/contentContainer/facade/Facade";

const getTestComponent = () => {
  return (
    <Facade
      headerText={"Headers"}
      secondaryHeaderText={"This is the answer"}
      buttonText={"Add Question"}
    ></Facade>
  );
};

describe("Snapshot Testing", () => {
  test("Facade snapshot", () => {
    const facadePost = render(
      <Facade
        headerText={"Headers"}
        secondaryHeaderText={"This is the answer"}
        buttonText={"Add Question"}
      ></Facade>
    );
    expect(facadePost.container).toMatchSnapshot();
  });
});

describe("Facade Test", () => {
  it("Should have header", () => {
    const { queryByText } = render(getTestComponent());
    expect(queryByText("Headers")).not.toBeNull();
  });
  it("Should have secondaryHeader", () => {
    const { queryByText } = render(getTestComponent());
    expect(queryByText("This is the answer")).not.toBeNull();
  });
  it("Should have button text", () => {
    const { queryByText } = render(getTestComponent());
    expect(queryByText("Add Question")).not.toBeNull();
  });
});
