import React from 'react'

const TopFive = ({flag, name})=>{
    
    return(
        
        <div className="bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="flag" src={`https://www.countryflags.io/${flag}/flat/64.png`}/>
            <div>
                <h2>{name}</h2>
                <p>png@png.com</p>
            </div>    
    
        </div>
    )
}

export default TopFive;