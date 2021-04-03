import React, { Component } from 'react';
import Plotly from 'plotly.js';
class selectedinegraph extends Component {
    state = { id:"selectedinegraph" };
    componentDidMount(){
       

        // this.generateGraph(this.props.graphid,this.props.graphdata);
      
    };
    componentDidUpdate(prevProps) {
        if (Object.keys(prevProps.graphdata).length !== Object.keys(this.props.graphdata).length) {
           
            console.log('inside com din updsate')
            this.generateGraph(this.props.graphid,this.props.graphdata);
        }
      };
    generateGraph = (id,data) =>{
        // var trace ={};
        var x =[];
        var y= [];
        var count =0;
        var data =[]
        for(var keys in data){
            if(data[keys]){
                data[keys].details.foreach(
                    Element =>{
                        y.push(Element.value);
                        count +=1
                        x.push(count)

                    }
                );
                var trace = {
                    x: x,
                    y: y,
                    type: 'scatter',
                    mode: 'lines',
                    // line: {
                    //     color: 'rgb(55, 128, 191)',
                    //     width: 1
                    //   }
                  };
                  data.push(trace)
            }
        }
            console.log(data,"data")
        // var trace = {
        //     x: [1, 2, 3, 4],
        //     y: [16, 5, 11, 9],
        //     type: 'scatter',
        //     mode: 'lines',
        //     // line: {
        //     //     color: 'rgb(55, 128, 191)',
        //     //     width: 1
        //     //   }
        //   };
          var layout = {
            showlegend: false,
            autosize: false,
            height:340,
            
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
          
        //   var data = [trace];
          setTimeout( () =>{
              
            Plotly.newPlot(id, data ,layout,{staticPlot: true ,displayModeBar: false});
          },800)
        
    }
    
    render() { 
        const styleForgraph ={
            height:'90%',
            position:'absolute'
        }
        return (
            <div className=" ">
                {/* <div className="card-body"> */}
                    <div id={this.props.graphid} style={styleForgraph}>

                    </div>
                {/* </div> */}

            </div>
          );
    }
}
 
export default selectedinegraph;