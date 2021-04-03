import React, { Component } from 'react';
import UserSelectedStoks from './usersStoks';
import SelectedStoksGreph from './selectstoksgraph';
class maincmp extends Component {
    state = { 
        stoks:{
            "msft": {
              "current_value": 30.106172915142647,
              "history": [
                {
                  "time": 1613217202050,
                  "value": 100.142415
                },
                {
                  "time": 1613217208951,
                  "value": 130.2622582274408
                },
                {
                  "time": 1613217208951,
                  "value": 120.76679158917318
                },
                {
                  "time": 1613217211700,
                  "value": 130.57270269240817
                },
                {
                  "time": 1613217214661,
                  "value": 100.33890728867206
                },
                {
                  "time": 1613217221043,
                  "value": 130.15545870830522
                },
                {
                  "time": 1613217221726,
                  "value": 150.44399681022898
                },
                {
                  "time": 1613217221726,
                  "value": 167.26708216587656
                },
                {
                  "time": 1613217225249,
                  "value": 101.22879529877717
                },
                {
                  "time": 1613217228209,
                  "value": 129.7046514236012
                },
                {
                  "time": 1613217229354,
                  "value": 191.00497541941996
                },
                {
                  "time": 1613217235108,
                  "value": 181.40126121601685
                },
                {
                  "time": 1613217243229,
                  "value": 167.21558004028375
                },
                {
                  "time": 1613217247175,
                  "value": 130.63864354018276
                },
                {
                  "time": 1613217247175,
                  "value": 122.759216832620005
                },
                {
                  "time": 1613217260458,
                  "value": 114.84593625132662
                },
                {
                  "time": 1613217273873,
                  "value": 130.106172915142647
                }
              ],
              "is_selected": false
            },
            "tck": {
              "current_value": 148.70410365481567,
              "history": [
                {
                  "time": 1613217202050,
                  "value": 65.9365792950479
                },
                {
                  "time": 1613217208951,
                  "value": 101.18619238852853
                },
                {
                  "time": 1613217221043,
                  "value": 39.31893907961279
                },
                {
                  "time": 1613217225249,
                  "value": 100.2577369976257
                },
                {
                  "time": 1613217248541,
                  "value": 135.5090874836818
                },
                {
                  "time": 1613217257096,
                  "value": 86.28548953862365
                },
                {
                  "time": 1613217260458,
                  "value": 192.78103829437387
                },
                {
                  "time": 1613217260458,
                  "value": 41.082894772941096
                },
                {
                  "time": 1613217263020,
                  "value": 187.02827861190158
                },
                {
                  "time": 1613217266590,
                  "value": 147.84953765242054
                },
                {
                  "time": 1613217267147,
                  "value": 148.70410365481567
                }
              ],
              "is_selected": false
            },
            "shld": {
              "current_value": 50.27004109850819,
              "history": [
                {
                  "time": 1613217202050,
                  "value": 100.91995559786903
                },
                {
                  "time": 1613217208951,
                  "value": 138.07424373986998
                },
                {
                  "time": 1613217214661,
                  "value": 27.976326359476886
                },
                {
                  "time": 1613217221726,
                  "value": 118.68901798189948
                },
                {
                  "time": 1613217224490,
                  "value": 193.24208201997996
                },
                {
                  "time": 1613217229354,
                  "value": 123.80846162716605
                },
                {
                  "time": 1613217235108,
                  "value": 184.19582744485695
                },
                {
                  "time": 1613217237570,
                  "value": 40.02703057611728
                },
                {
                  "time": 1613217237570,
                  "value": 59.19484379441949
                },
                {
                  "time": 1613217237570,
                  "value": 167.08815642974622
                },
                {
                  "time": 1613217243229,
                  "value": 52.9759683655384
                },
                {
                  "time": 1613217243229,
                  "value": 197.9836138814456
                },
                {
                  "time": 1613217259498,
                  "value": 65.76148486593442
                },
                {
                  "time": 1613217266590,
                  "value": 79.0408506408405
                },
                {
                  "time": 1613217266590,
                  "value": 90.94575938258963
                },
                {
                  "time": 1613217269909,
                  "value": 50.27004109850819
                }
              ],
              "is_selected": false
            },
            "aks": {
              "current_value": 189.32824896532384,
              "history": [
                {
                  "time": 1613217202050,
                  "value": 72.84588850017406
                },
                {
                  "time": 1613217205113,
                  "value": 125.64358774180617
                },
                {
                  "time": 1613217221043,
                  "value": 79.90962956449378
                },
                {
                  "time": 1613217229354,
                  "value": 190.2549469534616
                },
                {
                  "time": 1613217248541,
                  "value": 168.6334077524824
                },
                {
                  "time": 1613217259498,
                  "value": 187.88902341855916
                },
                {
                  "time": 1613217260458,
                  "value": 169.66590772667064
                },
                {
                  "time": 1613217263020,
                  "value": 152.21510549645333
                },
                {
                  "time": 1613217267147,
                  "value": 189.32824896532384
                }
              ],
              "is_selected": false
            }},
            selectedstoks:{}
     };
     selectstok =(e) =>{
       let stoksCopy = this.state.stoks;
       let userSelectedStoks = this.state.selectedstoks
       for ( var key in stoksCopy) {
            if(key ==e){
              userSelectedStoks[key] = stoksCopy[key];
             
              stoksCopy[key].is_selected =!   stoksCopy[key].is_selected
             
              break ;
            }
            
       }
       this.setState({'stoks':stoksCopy})
       this.setState({'selectedstoks':userSelectedStoks})
       console.log(this.state.stoks)
     }
    render() { 
        return ( 
            <div>
              <div className="container-fluid pd10">
                <div className="row pt10">
                        <div className="col-md-5">
                            <UserSelectedStoks stoks ={this.state.stoks} onselectrow ={this.selectstok}>

                            </UserSelectedStoks>
                        </div>
                        <div className="col-md-7">
                            <SelectedStoksGreph stoks ={this.state.selectedstoks}>
                                
                            </SelectedStoksGreph>
                        </div>
                </div>

              </div>
                
              
            </div>
         );
    }
}
 
export default maincmp;