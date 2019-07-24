import React from 'react'
import ReactDOM from 'react-dom'
import Dogs from '../Dogs'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

it('Dogs renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Dogs />, div)
});

it('Renders the Dogs', ()=>{
  const component = mount(<Dogs dogs={dogs} />)
  const headings = component.find('h4 > .dog-name')
  expect(headings.length).toBe(3)
})
