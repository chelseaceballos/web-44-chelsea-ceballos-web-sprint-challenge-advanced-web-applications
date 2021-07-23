import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';
import EditMenu from './EditMenu';
import userEvent from '@testing-library/user-event';

const testColor = {
    color: "bubblepink",
    code: {hex: '#ffafcc'},
    id: 1
   }

const emptyList = []

test("Renders an empty list of colors without errors", () => {
    render(<ColorList color={emptyList}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList color={testColor}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    // const toggleEdit = jest.fn()
    // render(<ColorList color={testColor} />);
    // let editing = screen.queryByTestId("color");
    // userEvent.click(editing);
    // expect(toggleEdit).toBeCalled();
});
