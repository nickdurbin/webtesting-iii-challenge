import React from "react";
import * as rtl from "react-testing-library";
import Controls from './Controls';
import "jest-dom/extend-expect";
import { fireEvent } from '@testing-library/react';

afterEach(rtl.cleanup);

test("checking buttons", async () => {
  const spy = jest.fn()
  expect(spy).not.toBeCalled();
})

test('multiple buttons handling click events', async () => {
  const wrapper = rtl.render(<Controls />);
  const buttonsCheck = await wrapper.findAllByRole('button');
  expect(buttonsCheck.length).toBe(2)
})

test('test the click event of the open and close gate button', async () => {
  const wrapper = rtl.render(<Controls />);
  const openButtonCheck = await wrapper.getByTestId('open');

  expect(openButtonCheck.textContent).toBe('Close Gate')
  rtl.fireEvent.click(openButtonCheck)

  expect(openButtonCheck.textContent).toBe('Open Gate')
  rtl.fireEvent.click(openButtonCheck)

  expect(openButtonCheck.textContent).toBe('Close Gate')
  rtl.fireEvent.click(openButtonCheck)
})

test('test if the locked toggle button is disabled if the gate is open', async () => {
  const wrapper = rtl.render(<Controls />);
  const lockedDisabled= await wrapper.getByTestId('open');

  expect(lockedDisabled).toBeDisabled()
})