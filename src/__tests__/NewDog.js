import React from 'react'
import ReactDOM from 'react-dom'
import NewDog from '../pages/NewDog'
import { mount } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'

Enzyme.configure({ adapter: new Adapter() });








const newdogs = [
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
  const div = document.createElement('div')
  ReactDOM.render(<NewDog />, div)
})

it('has a name input', ()=>{
  const component = mount(<NewDog />)
 expect(component.find('label#name').text()).toBe("Name")
})

it('has a age input', ()=>{
  const component = mount(<NewDog />)
  expect(component.find('label#age').text()).toBe("Age")
})

it('has a enjoys input', ()=>{
  const component = mount(<NewDog />)
  expect(component.find('label#enjoys').text()).toBe("Enjoys")
})

it('has a submit button', ()=>{
  const component = mount(<NewDog />)
  expect(component.find('button#submit').text()).toBe("Create Profile")
})
