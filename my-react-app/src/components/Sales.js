import React, { Component } from 'react'
import CardA from './Cards/card'
import CardB from './Cards/card2'
import CardC from './Cards/card4'
import Cards from './Cards/card'
class Sales extends Component {
   render(){
       return(
           <div className="Container-fluid">
        <div className="row-1 border-top">
        <div className="col-8 pb-3 text-secondary">
          <h4>Sales Activity</h4>
        </div>
        <div className="col-4 text-secondary">
          <h4>Inventory Summary </h4>
        </div>

      </div>

      <div className="row-1">

        <div className="col-2">
          <Cards />
        </div>
        <div className="col-2">
          <CardA />
        </div>
        <div className="col-2">
          <CardB />
        </div>
        <div className="col-2">
          <CardC />
        </div>
        <div className="col-4">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Quantity In Hand
    <span className="border-start text-dark">123232</span>
            </li>
            <br></br>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Quantity To Be Recieved
    <span className="border-start text-dark">43433</span>
            </li>
          </ul>

        </div>
      </div>
      </div>
       )
    }
}
export default Sales;