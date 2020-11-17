import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { IconButton } from "@material-ui/core";
import ListingSearch from "./ListingSearch";

Enzyme.configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const tree = shallow(
    <ListingSearch onClick={() => {}} onFilter={() => {}} />,
  );

  expect(tree).toMatchSnapshot();
});

it("renders correctly when open", () => {
  const tree = shallow(
    <ListingSearch open onClick={() => {}} onFilter={() => {}} />,
  );

  expect(tree).toMatchSnapshot();
});

describe("Given a listing search", () => {
  let listingSearch: ShallowWrapper;

  beforeAll(() => {
    listingSearch = shallow(
      <ListingSearch open onClick={() => {}} onFilter={() => {}} />,
    );
  });

  it("state is set to closed", () => {
    expect((listingSearch.instance().state as any).open).toEqual(false);
  });

  describe("when click is triggered", () => {
    beforeEach(() => {
      listingSearch.find(IconButton).simulate("click");
    });

    it("state is set to closed", () => {
      expect((listingSearch.instance().state as any).open).toEqual(true);
    });
  });
});

it("filters if open and value changes", () => {
  const onFilter = jest.fn();
  const listingSearch = shallow(
    <ListingSearch open onClick={() => {}} onFilter={onFilter} />,
  );

  listingSearch.find("input").simulate("change", { value: "a" });

  expect(onFilter).toHaveBeenCalled();
});

it("does not filter if not open and value changes", () => {
  const onFilter = jest.fn();
  const listingSearch = shallow(
    <ListingSearch open onClick={() => {}} onFilter={onFilter} />,
  );

  expect((listingSearch.instance().state as any).open).toEqual(false);
  listingSearch.find(IconButton).simulate("click");

  expect((listingSearch.instance().state as any).open).toEqual(true);

  listingSearch.find("input").simulate("change", { value: "a" });

  expect(onFilter).toHaveBeenCalled();
});

it("focuses search field on click", () => {
  const mockObject = {
    focus: jest.fn(),
  };

  const listingSearch = shallow(
    <ListingSearch onClick={() => {}} onFilter={() => {}} />,
  );

  (listingSearch.instance() as any).searchRef = mockObject;

  listingSearch.find(IconButton).simulate("click");

  expect((listingSearch.state() as any).open).toBe(true);

  expect(mockObject.focus).toHaveBeenCalled();
});
