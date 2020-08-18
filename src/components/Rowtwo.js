import React, { Component } from 'react'
import'bootstrap/dist/css/bootstrap.min.css'
import Mee1 from '../img1/img1.jpg'

import Mee3 from '../img1/img.jpg'
import Carousel from 'react-bootstrap/Carousel'
import Wee1 from '../img1/img1.jpg'
import Wee2 from '../img1/img4.jpg'
import Wee3 from '../img1/blk1.jpg'





class Rowtwo extends Component{

    render(){
        return(
           <div className="container">
                              <div className="row">
                                              <div className="col-md-8">
                                                 <div id="card">
                                                     <div className="card-body">
                                                            <table className="table table-striped table-hover mb-5">
                                                                    <tr>
                                                                        <th>Country</th>
                                                                        <th>Active Cases</th>
                                                                        <th>Recovered</th>
                                                                        <th>Total Death</th>
                                                                        <th>Total cases</th>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>Ghana</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                    </tr>
                        
                                                                    <tr className="ree">
                                                                         <td>Ghana</td>
                                                                         <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>Ghana</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>Ghana</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>Ghana</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>Ghana</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>Ghana</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>Ghana</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>Ghana</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                        <td>1,200</td>
                                                                    </tr>
                                                                </table>

                                                        </div>

                                                    </div>
                                             </div>

                                            <div className="col-md-4">
                                                    <div className="card text-center m-2">
                                                        <div className="card-body">
                                                            <h4><button className="btn btn-danger"> Health Tips</button></h4>
                                                            <img  src={Mee1} alt="mee" className="img-fluid img-thumbnail"/>
                                                        </div> <br/>
                                                    </div>  


                                                        
                                                    <div className="card text-center m-2">
                                                        <div className="card-body">
                                                            <h4><button className="btn btn-danger"> News & Updates</button></h4>
                                                            
                                                            <Carousel>
                                                                <Carousel.Item>
                                                                    <img
                                                                    className="d-block w-100"
                                                                    src={Wee1}
                                                                    alt="First slide"/>
                                                                </Carousel.Item>

                                                                <Carousel.Item>
                                                                    <img
                                                                    className="d-block w-100"
                                                                    src={Wee2}
                                                                    alt="Third slide"/>
                                                                </Carousel.Item>

                                                                <Carousel.Item>
                                                                    <img
                                                                    className="d-block w-100"
                                                                    src={Wee3}
                                                                    alt="Third slide"/>
                                                                </Carousel.Item>
                                                            </Carousel>













                                                            <p className="card-text">Covid-19 at the low <br/><img src={Mee3}alt=""/> </p>
                                                        </div>
                                                    </div>
                                                    
                                                
                                                   
                                            </div>
                                          
            
               
               
      
                                </div>
                         </div>


           


           
        )
    }
}

export default Rowtwo