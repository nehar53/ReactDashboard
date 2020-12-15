import React, { Component } from 'react'
import ChartsPage from './graph';
import img1 from '../assets/03.jpg'
import img2 from '../assets/02.jpg'
import img3 from '../assets/04.jpg'
class GraphContainer extends Component {
    render(){
        return(
 <div className="row">

 <div className="col-6">

   <div class="card mb-3 px-3 pt-3 " >
     <h5 class="text-secondary">Product Detail</h5>

     <hr></hr>
     <div class="row">
       <div class="col-md-4">
         <ul class="list-group list-group-flush">
           <li class="list-group-item d-flex justify-content-between align-items-center text-danger">Low Stock Items<span class="text-danger">140</span></li>
           <li class="list-group-item d-flex justify-content-between align-items-center">All items Group<span class="text-secondary">174</span></li>
           <li class="list-group-item d-flex justify-content-between align-items-center">All Items<span class="text-secondary">16</span></li>
           <li class="list-group-item d-flex justify-content-between align-items-center text-danger">Stock<span class="text-danger">120</span></li>

         </ul>
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title"> <ChartsPage /></h5>


         </div>
       </div>
     </div>
   </div>

 </div>
 <div className="col-6">
   <div class="card mb-3 px-3 pt-3 " >
     <h5 class="text-secondary">Top Selling Items</h5>

     <hr></hr>
     <div class="card-group">
       <div class="card border-0">
         <img src={img3} class="card-img-top" alt="image3"></img>
         <div class="card-body text-center">
           <h5 class="card-title">Harcoo Cotton Top</h5>

           <p class="card-text"><small class="text-muted">177PCS</small></p>
         </div>
       </div>
       <div class="card border-0">
         <img src={img2} class="card-img-top" alt="image3"></img>
         <div class="card-body text-center">
           <h5 class="card-title">Crop Top</h5>

           <p class="card-text"><small class="text-muted">45PCS</small></p>
         </div>
       </div>
       <div class="card border-0">
         <img src={img1} class="card-img-top" alt="image3"></img>
         <div class="card-body text-center">
           <h5 class="card-title">DAngree Dress</h5>

           <p class="card-text"><small class="text-muted">35PCS</small></p>
         </div>
       </div></div>
   </div>
 </div>
</div>
        )}}
        export default GraphContainer;