import React, { Component } from 'react'
import {
    Col,
    Container,
    Row,
    Button
} from 'react-bootstrap'

import Dogs from '../pages/Dogs'
// import NewDog from './pages/NewDog'

class Header extends Component {
    render(){
        return (
            <div>
            <form>
          <fieldset>
            <legend>Dog Tinder</legend>

            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>

            </div>

            <div class="form-group">
              <label for="exampleSelect1">Age</label>
              <select className="form-control" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleTextarea">Enjoys</label>
              <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>



            <button type="submit" class="btn btn-primary">Create Profile</button>
          </fieldset>
        </form>
            </div>
        );
    }
}

export default Header;
