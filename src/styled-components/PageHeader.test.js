import React from "react"
import { shallow } from "enzyme"
import PageHeader from "./PageHeader"

it("renders PageHeader without crashing", () => {
  shallow(<PageHeader />)
})

it("renders header", () => {
  const wrapper = shallow(<PageHeader>Manage my items</PageHeader>)
  expect(wrapper.text()).toEqual("Manage my items")
})
