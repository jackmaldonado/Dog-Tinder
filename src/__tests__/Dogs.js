import React from 'react'
import ReactDOM from 'react-dom'
import Dogs from '../pages/Dogs'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App'

Enzyme.configure({ adapter: new Adapter() });

const dogs = [
    {
        id:1,
        name: "Peewee",
        age: 8,
        enjoys: "Snoozing"
    },
    {
        id: 2,
        name: "Dez",
        age: 4,
        enjoys: "Chillin"
    },
    {
        id: 3,
        name: "Barkley",
        age: 8,
        enjoys: "Sun Bathing"
    },
    {
        id: 4,
        name: "Royce",
        age: 3,
        enjoys: "Terrorizing"
    },
    {
        id: 5,
        name: "Emma",
        age: 1,
        enjoys: "Being Cute"
    }
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders the Dogs', ()=>{
  const component = mount(<Dogs dogs={dogs} />)
  const headings = component.find('h4 > .dog-name')
  expect(headings.length).toBe(5)
});
