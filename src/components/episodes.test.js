import React from "react"
import {render} from "@testing-library/react";
import Episodes from "./Episodes"


test("renders without errors", () => {
    const {queryAllByTestId} = render(<Episodes episodes={[]}/>);
    expect(queryAllByTestId(/data-list/i)).toHaveLength(0)
})