import React from 'react'
import Home from './apecTravelApp/Home'
import Switch from "react-switch"
import {apecEconomies} from './apecTravelApp/ApecEconomies'
import MyMap from './apecTravelApp/map/googleMap'
import axios from 'axios'
import Scroll from './Scroll'

class App extends React.Component {
    constructor() {
        super()
        this.state = { 
            checked: false,
            lat: '',
            lng:'',
            geoLocator:'',
            apecEconomies: apecEconomies,
            loaded: false,
            items:[]
        };
        this.handleChange = this.handleChange.bind(this);
        
    }

    componentDidMount() {

        fetch('http://8080//destination')
            .then(res=> res.json())
            .then((result)=>{
                this.setState({
                    loaded:true,
                    items: result
                })
            })
            
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
                    var lat = position.coords.latitude
                    var lng = position.coords.longitude
                    console.log("Latitude is :", position.coords.latitude);
                    console.log("Longitude is :", position.coords.longitude);
                });
            } 

        function distance(lat1, lon1, lat2, lon2){
            //location
            lat1 = lat1 
            lon1 = lon1 

            lat2 = lat2  
            lon2 = lon2 

            const R = 6371; // metres
            const φ1 = lat1 * Math.PI/180; // φ, λ in radians
            const φ2 = lat2 * Math.PI/180;
            const Δφ = (lat2-lat1) * Math.PI/180;
            const Δλ = (lon2-lon1) * Math.PI/180;

            const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ/2) * Math.sin(Δλ/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

            const d = R * c; // in metres
            console.log('d si = ',d)
        }

        for(let i = 0; i < apecEconomies.length; i++){
            distance()

        }


        } else {
          console.log("Not Available");
          alert('Your device does not have a locator')
        }
    }

    render(){
        return(
            <div >
                <div>
                    <h1 locator={this.state.checked}  className='f-headline lh-solid tc'>Radr</h1>
                    <p className='f2 lh-copy tc'>Welcome to the official <b> relevant APEC destinations radar</b>!  <br /> 
                        
                        Please turn on your location to help us customize your experince.</p>
                    <label>
                        <span>Locate me</span> <br />
                        <Switch onChange={this.handleChange} checked={this.state.checked} />
                    </label>
                </div>
                <div  className='pv3'> </div>
                <hr />
                <div className='pv5'>
                    <Scroll>
                        <Home 
                        apecEconomies={apecEconomies} 
                        
                        />
                    </Scroll>
                </div>
                <hr></hr>
                <div className='pv5'>
                    <MyMap 
                    locator={this.state.checked} 
                    myLocation = {this.state.myLocation} 
                    lat = {this.state.lat}
                    lng= {this.state.lng}
                    />
                    <hr></hr>                
                </div>
                <div className='pv3'>
                <p className='tc'> <b> Developed by PNG Team Wan </b></p>
                </div>
            </div>
        );
    }
}
export default App;

