import React,{ Component }  from 'react'
import Logo1 from '../img/Logo.jpg'

class Logo extends Component{
    render(){
        return(
            <div>
           <div className="container">
                    <div className="row">
                            <img src={Logo1} alt="dee"/>
                            <div className="col-md-12">

                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Logo