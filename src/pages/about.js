import React from "react"

class About extends React.Component{
    render(){
        return(
            <div>   
            <div className='w-100' style={{height:'100vh', overflow: 'scroll'}}> 
                <div id='container1' className= 'w-100 d-flex justify-content-center' style={{height:'100vh'}}>
                    <h1 className='align-self-center'>ABOUT</h1>
                </div>  
                <div id='container1' className= 'w-100 d-flex justify-content-center' style={{height:'100vh'}}>
                    <h1 className='align-self-center'>ABOUT 2</h1>
                </div>                    
            </div>                 
        </div>
        )
    }
}

export default About