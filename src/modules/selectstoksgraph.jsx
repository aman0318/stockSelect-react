import React, { Component } from 'react';
import Selectedinegraph from './../component/chatrofselectstoks';

class linchart extends Component {
    state = {  }
    render() { 
        const mystyle = {
           height:'350px',
           position:'relative',
           overflow: 'hidden'
          };
        
        return ( 
            <div>
                 <div className="card" >
                        <div className="cardtitle">
                            Selected Stoks Trend Line
                        </div>
                    <div className="card-body" style={mystyle}>
                        <Selectedinegraph  graphid ={'maingraph'} graphdata ={this.props.stoks}>

                        </Selectedinegraph>
                    </div>
                 </div>   
            </div>
         );
    }
}
 
export default linchart;