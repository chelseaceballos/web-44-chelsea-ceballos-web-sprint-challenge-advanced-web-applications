import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const testColor = {
    color: "bubblepink",
    code: {hex: '#ffafcc'},
    id: 1
   }

   const colorless = {
       color: "",
       code: {},
       id: ""
   }

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={colorless}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={testColor}/>)

});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});