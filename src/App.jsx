import React from 'react'
import Home from './apecTravelApp/Home'
import Switch from "react-switch"
import {apecEconomies} from './apecTravelApp/ApecEconomies'
import MyMap from './apecTravelApp/map/googleMap'
import axios from 'axios'


class App extends React.Component {
    constructor() {
        super()
        this.state = { 
            checked: false,
            lat: '',
            lng:'',
            geoLocator:'',
            apecEconomies: apecEconomies
        };
        this.handleChange = this.handleChange.bind(this);
        
    }

    componentDidMount() {

        axios.get('http://localhost:8080/')

        function getCoords() {
            return new Promise((resolve, reject) =>
              navigator.permissions ?
          
                // Permission API is implemented
                navigator.permissions.query({
                  name: 'geolocation'
                }).then(permission =>
                  // is geolocation granted?
                  permission.state === "granted"
                    ? navigator.geolocation.getCurrentPosition(pos => resolve(pos.coords)) 
                    : resolve(null)
                ) :
          
              // Permission API was not implemented
              reject(new Error("Permission API is not supported"))
            )
          }
          getCoords().then(coords => console.log(coords))
    }


    handleChange(checked) {
        this.setState({ checked });


        if ("geolocation" in navigator) {

            if(this.state.checked == true){
                console.log("Available");
                navigator.geolocation.getCurrentPosition(function(position) {
                    let lat = position.coords.latitude
                    let lng = position.coords.longitude
                    console.log("Latitude is :", position.coords.latitude);
                    console.log("Longitude is :", position.coords.longitude);
                });
            }  
        } else {
          console.log("Not Available");
          alert('Your device does not have a locator')
        }
    }

    render(){
        return(
            <div>
                <div>
                    <h1 className='f-headline lh-solid tc'>Radr</h1>
                    <p className='f2 lh-copy tc'>Welcome to the official relevant APEC destinations radar! <br /> 
                        Please turn on your location to help us customize your experince.</p>
                    <label>
                        <span>Locate me</span> <br />
                        <Switch onChange={this.handleChange} checked={this.state.checked} />
                    </label>
                </div>
                <hr />
                <Home apecEconomies={apecEconomies} 
                locator={this.state.checked} 
                />
                
                <hr></hr>
                
                <MyMap 
                locator={this.state.checked} 
                myLocation = {this.state.myLocation} 
                lat = {this.state.lat}
                lng= {this.state.lng}
                />
            </div>
        );
    }
}
export default App;

