import React, { Component } from 'react';
import Plotly from 'plotly.js';
class linegraph extends Component {
    state = { id:"linegraph" };
    componentDidMount(){
       

        this.generateGraph(this.props.graphid,this.props.graphdata);
      
    };
    generateGraph = (id,data) =>{
    var x =[];
    var y =[];
    var count =0;
    console.log(data,"--")
    data.history.forEach(element => {
      y.push(parseInt(element.value));
            count +=1
            x.push(count)
    });
      // for(var keys in data){
      //     if(keys =='current_value'){
      //       x.push(data[keys]);
      //       count +=5
      //       y.push(count)

      //     }

      // }
      
            
        var trace = {
            x: x,
            y: y,
            type: 'scatter',
            mode: 'lines',
            line: {
                color: 'rgb(55, 128, 191)',
                width: 1
              }
          };
          var layout = {
            showlegend: false,
            autosize: false,
            width: 100,
            height: 30,
            margin: {
              l: 0,
              r: 0,
              b: 0,
              t: 0
            
            },
            xaxis: {
                autorange: true,
                showgrid: false,
                zeroline: false,
                showline: false,
                autotick: true,
                ticks: '',
                showticklabels: false
              },
              yaxis: {
                autorange: true,
                showgrid: false,
                zeroline: false,
                showline: false,
                autotick: true,
                ticks: '',
                showticklabels: false
              }
          };
          
          var data = [trace];
          setTimeout( () =>{
              
            Plotly.newPlot(id, data ,layout,{staticPlot: true ,displayModeBar: false});
          },800)
        
    }
    
    render() { 
      
        return (
            <div className=" ">
                {/* <div className="card-body"> */}
                    <div id={this.props.graphid} className="graph">

                    </div>
                {/* </div> */}

            </div>
          );
    }
}
 
export default linegraph;