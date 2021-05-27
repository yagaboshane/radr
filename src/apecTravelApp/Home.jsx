import React from 'react'
import TopFive from './TopFive'  
import axios from 'axios'


class Home extends React.Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }
    
    async componentDidMount() {       
        this.myRef.current.scrollTo(0, 0);
        
        let res = await axios.get("http://8080/");
        console.log(res)
    }
    

render() {
    return(
        <div className="pb4" ref={this.myRef}>
            {
            this.props.apecEconomies.map((economy, index)=>{
                return(
                    <TopFive 
                    key= {index}
                    name={this.props.apecEconomies[index].name} 
                    flag={this.props.apecEconomies[index].id}
                    />
                )
            })

            }
        </div>
    )
}
}
export default Home;