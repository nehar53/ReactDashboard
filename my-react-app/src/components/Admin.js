import React, { Component } from 'react'

class Admin extends Component {
    render() {
        return (
            <div class="row g-0">
                <div class="col-sm-6 col-md-8">
                    <div class="card mb-3 px-3 pt-3 " >
                        <h5 class="text-secondary">Sales Order</h5>

                        <hr></hr>
                        <table class="my-0 table table-striped">
                            <thead><tr><th>Channel</th>
                                <th class="d-none d-xl-table-cell">
                                    Draft</th><th class="d-none d-xl-table-cell">Return</th>
                                <th>Shippened</th><th class="d-none d-md-table-cell">Cost</th></tr></thead>
                            <tbody><tr><td>Project Apollo</td><td class="d-none d-xl-table-cell">01/01/2018</td>
                                <td class="d-none d-xl-table-cell">31/06/2018</td><td><span class="badge badge-success">Done</span>
                                </td><td class="d-none d-md-table-cell">Carl Jenkins</td></tr><tr><td>Project Fireball</td>
                                    <td class="d-none d-xl-table-cell">01/01/2018</td><td class="d-none d-xl-table-cell">31/06/2018</td>
                                    <td><span class="badge badge-danger">Cancelled</span></td><td class="d-none d-md-table-cell">
                                        Bertha Martin</td></tr><tr><td>Project Hades</td
                                        ><td class="d-none d-xl-table-cell">01/01/2018</td
                                        ><td class="d-none d-xl-table-cell">31/06/2018</td>
                                        <td><span class="badge badge-success">Done</span></td><td class="d-none d-md-table-cell">Stacie Hall</td>
                                        </tr></tbody></table>
                    </div></div>
                <div class="col-6 col-md-4">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h6 class="mb-0 text-secondary">Purchase Order</h6>
                            </div>
                            <div class="col-auto text-center pr-card"><select class="custom-select custom-select-sm">
                                <option>This Month</option>
                                <option>Estimated Time</option>
                                <option>Billable Time</option>
                            </select></div>
                        </div>
                    </div>




                    <div class="card text-center">
                        <h6 class="font-weight-normal mt-3">
                            <span>Total</span>
                        </h6>
                        <h3 class="font-weight-normal mt-3">
                            <span>6,510</span>
                        </h3>

                    </div>
                    <div class="card text-center" >
                        <h6 class="font-weight-normal mt-3">
                            <span>Quantity Order</span>
                        </h6>
                        <h3 class="font-weight-normal mt-3">
                            <span>6,510</span>
                        </h3>

                    </div>

                </div>
            </div>
        )
    }
}
export default Admin;