import React from "react";
import * as rtl from "react-testing-library";
import Display from './Display';
import "jest-dom/extend-expect";

afterEach(rtl.cleanup);

test("checking buttons", async () => {
  const spy = jest.fn()
  expect(spy).not.toBeCalled();
})