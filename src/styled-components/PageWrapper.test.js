import React from "react"
import { shallow } from "enzyme"
import PageWrapper from "./PageWrapper"
import PageHeader from "./PageHeader"
import InputContainer from "../InputContainer"
import ListContainer from "../ListContainer"

it("renders PageWrapper without crashing", () => {
  shallow(<PageWrapper />)
})

it("renders PageHeader, InputContainer and ListContainer", () => {
  const wrapper = shallow(
    <PageWrapper>
      <PageHeader>Manage my items</PageHeader>
      <InputContainer />
      <ListContainer />
    </PageWrapper>,
  )
  const header = <PageHeader>Manage my items</PageHeader>
  const input = <InputContainer />
  const list = <ListContainer />
  expect(wrapper.contains(header)).toEqual(true)
  expect(wrapper.contains(input)).toEqual(true)
  expect(wrapper.contains(list)).toEqual(true)
})
