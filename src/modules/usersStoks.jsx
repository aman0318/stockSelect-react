import React, { Component } from 'react';
import Linegraph from './../component/linechart';
class userSelectedStoks extends Component {
    state = {  };
    // cursor: pointer;
    // background-color: cadetblue;
    render() { 
        var stoks = this.props.stoks
        let tr =[];
       Object.keys(stoks ||{}).map(key => 
        
         tr.push(<tr key={key} className={stoks[key].is_selected?'selected':''} onClick ={ () => this.props.onselectrow(key)}><td value={key}>{key}</td>
            <td value={key}>{Math.round(stoks[key].current_value ,2)}</td>
            <td value={key}><Linegraph  className="graphcontainer" graphid={key+'usergraph'} graphdata ={stoks[key]}></Linegraph></td>
            <td value={key}>{Math.round(stoks[key].current_value ,2)}</td>
             </tr>)
        )
   
        return (
           
           <div>
               <div className="card">
                        <div className="cardtitle">
                            Selected Stoks
                        </div>
                    <div className="card-body">
                      
                     <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                            <th>History</th>
                            <th>Update At</th>
                        </tr>
                        </thead>
                        <tbody>
                            
                     {tr}
                        
                        </tbody>
                    </table>
                    </div>
                </div>
           </div> 
          );
    }
}
 
export default userSelectedStoks;