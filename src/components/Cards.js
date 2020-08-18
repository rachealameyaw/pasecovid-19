import React, { Component } from 'react'
import Pic1 from '../img1/img2.png'
import Pic2 from '../img1/img3.png'
import Pic3 from '../img1/img2.png'
import Pic4 from '../img1/img2.png'


class Cards extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-2" >
                             <div className="card">
                                 <div className="card-body">
                                     <h6>Total case <img src={Pic1} alt="deedee"/></h6>
                                             <h3 className="card-text">1,500,200</h3>
                                 </div>
                             </div>
                         </div>

                        <div className="col-md-3 mb-2">
                                <div className="card">
                                    <div className="card-body">
                                         <h6>Recovery <img src={Pic2} alt="deedee"/></h6>
                                         <h3 className="card-text">1,500,200</h3>
                                    </div>
                              </div>
                        </div>


                        <div className="col-md-3 mb-2">
                            <div className="card">
                                <div className="card-body">
                                      <h6>Active cases<img src={Pic3} alt="deedee"/></h6>
                                      <h3 className="card-text">1,500,200</h3>
                                </div>
                           </div>
                       </div>


                       <div className="col-md-3 mb-2">
                             <div className="card">
                                <div className="card-body">
                                    <h6>Total Deaths<img src={Pic4} alt="deedee"/></h6>
                                    <h3 className="card-text">1,500,200</h3>
                                </div>
                              </div>
                        </div>

                       
                    </div>
             </div>
         </div>
        )
    }
}






export default Cards