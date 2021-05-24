import React from 'react'
import TopFive from './TopFive'  



const Home = ({apecEconomies}) => {
    return(
        <div className="pb4">
            {
            apecEconomies.map((economy, index)=>{
                return(
                    <TopFive 
                    key= {index}
                    name={apecEconomies[index].name} 
                    flag={apecEconomies[index].id}
                    />
                )
            })

            }
        </div>
    )
}

export default Home;