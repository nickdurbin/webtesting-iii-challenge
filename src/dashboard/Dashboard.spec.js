import React from "react";
import * as rtl from "react-testing-library";
import Dashboard from './Dashboard';
import "jest-dom/extend-expect";

afterEach(rtl.cleanup);

test("<Dashboard /> snapshot", async () => {
  const wrapper = rtl.render(<Dashboard />)
  await wrapper.getByText(/locked/i);
  expect(wrapper.asFragment()).toMatchSnapshot()
})

test("Check open and closed functionality", async () => {
  const wrapper = rtl.render(<Dashboard />)
  await wrapper.getByText(/open/i);

  const closed = wrapper.getByText(/close gate/i);
  
  rtl.act(() => {
    rtl.fireEvent.click(closed)
  })

  expect(wrapper.getByText(/open/i)).toHaveTextContent(/open gate/i)
})

test("Check locked and unlocked functionality", async () => {
  const wrapper = rtl.render(<Dashboard />)
  await wrapper.getByText(/unlocked/i);

  const locked = wrapper.getByText(/locked/i);
  
  rtl.act(() => {
    rtl.fireEvent.click(locked)
  })

  expect(wrapper.getByText(/unlocked/i)).toHaveTextContent(/locked/i)
})