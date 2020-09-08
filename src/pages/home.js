import React from "react"

class Home extends React.Component{
    componentDidMount(){
        var lastScrollTop = 0;
        window.addEventListener('scroll', function (e) {
            console.log('click');
            if (e.scrollY === lastScrollTop) return;
                if(this.scrollY < lastScrollTop) {
                console.log( "Cima")
            }else{
                console.log('Baixo');
            }
            lastScrollTop = this.scrollY;
        }, true)
    };
   
    render(){
        return(
            <div>   
                <div className='w-100' style={{height:'100vh', overflow: 'scroll'}}> 
                    <div id='container1' className= 'w-100 d-flex justify-content-center' style={{height:'100vh'}}>
                        <h1 className='align-self-center'>HOME</h1>
                    </div>  
                    <div id='container1' className= 'w-100 d-flex justify-content-center' style={{height:'100vh'}}>
                        <h1 className='align-self-center'>HOME 2</h1>
                    </div>                    
                </div>                 
            </div>
        )
    }
}

export default Home

    // <input className="form-check-input rotate positionradio" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
    // <div className="form-check rotate position-absolute positionlabel" onClick={() => this.moveMenu1()} >                                
    //     <label className="form-check-label" for="exampleRadios1" >
    //     Home
    //     </label>
    // </div>

    // <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input rotate positionradio">
    // <div class="custom-control custom-radio rotate position-absolute positionlabel">  
    //     <label class="custom-control-label" for="customRadio1">
    //         Toggle this custom radio
    //     </label>
    // </div>