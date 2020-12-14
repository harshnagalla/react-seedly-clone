import React from "react";
import { cleanup, render } from "@testing-library/react";
import UserPost from "../../components/contentContainer/userPost/UserPost";

const getTestComponent = () => {
  return (
    <UserPost
      fullName={"Harsh Nagalla"}
      answer={"this is the answer"}
      time={"1h"}
    ></UserPost>
  );
};

describe("Snapshot Testing", () => {
  test("User Post snapshot", () => {
    const userPost = render(
      <UserPost
        fullName={"Harsh Nagalla"}
        answer={"This is the answer"}
        time={"1h"}
      ></UserPost>
    );
    expect(userPost.container).toMatchSnapshot();
  });
});

describe("User Post Test", () => {
  it("Should have full name", () => {
    const { queryByText } = render(getTestComponent());
    expect(queryByText("Harsh Nagalla")).not.toBeNull();
  });
  it("Should have answer", () => {
    const { queryByText } = render(getTestComponent());
    expect(queryByText("this is the answer")).not.toBeNull();
  });
});
