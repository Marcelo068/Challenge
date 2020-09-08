import React from "react"
import About from "../pages/about"
import Contact from "../pages/contact"
import Menu from "../pages/menu"
import Home from "../pages/home"

class Layout extends React.Component{
  active='menu1'; 
  count1='left';//not used
  count2='right';
  count3='right';
  count4='right';

  moveMenu1(){
    if(this.active !== 'menu1'){
      document.getElementById('menu2').style.marginLeft='91%';
      document.getElementById('container2').style.marginLeft='94%';

      document.getElementById('menu3').style.marginLeft='94%';
      document.getElementById('container3').style.marginLeft='97%';

      document.getElementById('menu4').style.marginLeft='97%';
      document.getElementById('container4').style.marginLeft='100%';
      this.count2 = 'right';
      this.count3 = 'right';
      this.count4 = 'right';
      this.active = 'menu1';
    }
  }
  moveMenu2(){
    if(this.count2 === 'right' && this.active !== 'menu2'){
      document.getElementById('menu2').style.marginLeft='3%';
      document.getElementById('container2').style.marginLeft='6%';
      this.count2 = 'left';
      this.active = 'menu2';
    }else if(this.count2 === 'left' && this.active !== 'menu2'){
      document.getElementById('menu3').style.marginLeft='94%';
      document.getElementById('container3').style.marginLeft='97%';

      document.getElementById('menu4').style.marginLeft='97%';
      document.getElementById('container4').style.marginLeft='100%';
      this.count2 = 'right';
      this.count3 = 'right';
      this.count4 = 'right';
      this.active = 'menu2';
    }
  }
  moveMenu3(){
    if(this.count3 === 'right' && this.active !== 'menu3'){
      document.getElementById('menu2').style.marginLeft='3%';
      document.getElementById('container2').style.marginLeft='6%';

      document.getElementById('menu3').style.marginLeft='6%';
      document.getElementById('container3').style.marginLeft='9%';
      this.count2 = 'left';
      this.count3 = 'left';
      this.active = 'menu3';
    }else if(this.count3 === 'left' && this.active !== 'menu3'){
      document.getElementById('menu4').style.marginLeft='97%';
      document.getElementById('container4').style.marginLeft='100%';
      this.count3 = 'right';
      this.count4 = 'right';
      this.active = 'menu3';
    }
  }
  moveMenu4(){
    if(this.count4 === 'right'){
      document.getElementById('menu2').style.marginLeft='3%';
      document.getElementById('container2').style.marginLeft='6%';

      document.getElementById('menu3').style.marginLeft='6%';
      document.getElementById('container3').style.marginLeft='9%';

      document.getElementById('menu4').style.marginLeft='9%';
      document.getElementById('container4').style.marginLeft='12%';
      this.count2 = 'left';
      this.count3 = 'left';
      this.count4 = 'left';
      this.active = 'menu4';
    }
  }

  render(){
    return (
     
      <div className='overflow-hidden'>
        <div className='vh-100'>
          <div className='col-12  headers'>
            <p className='text-center'>Lorem ipsum conubia.</p>  
          </div>

          <div className='d-flex maincontainer'>
            <div className='col-2' style={{background: '#e9e3d3'}}>
              <h1 className='mt-5 ml-5'>Logo</h1> 
              <div className='ml-4 mr-3' style={{marginTop: '40vh'}}>
                <h5>Lorem ipsum</h5>
                <p className='text-justify mt-3'>
                Lorem ipsum dictumst rutrum rhoncus nostra arcu dolor.<br/>
                </p>
              </div> 
            </div>
           
            <div className='col-10 mt-0 p-0 d-flex' style={{border: '1px solid #b69a5e'}}>
              <div id='menu1' className='h-100 animations d-flex justify-content-center border' style={{border:'1px solid black'}}>
                <input className="form-check-input rotate positionradio mycursor" type="radio" onClick={() => this.moveMenu1()} name="exampleRadios" id="exampleRadios1" value="option1"/>
                <div className="form-check rotate position-absolute positionlabel" onClick={() => this.moveMenu1()} >                                
                  <label className="form-check-label mycursor" htmlFor="exampleRadios1">
                    Home
                  </label>
                </div>
              </div> 

               {/* container */}
               <div id='container1' className='h-100 position-relative mycontainer'>
                <Home></Home>
               </div> 

               <div id='menu2' className='h-100 animations d-flex justify-content-center position-absolute border' style={{marginLeft:'91%'}}>
                <input className="form-check-input rotate positionradio mycursor" type="radio" onClick={() => this.moveMenu2()} name="exampleRadios" id="exampleRadios2" value="option2" />
                <div className="form-check align-self-center rotate position-absolute positionlabel"  onClick={() => this.moveMenu2()}>
                    <label className="form-check-label mycursor" htmlFor="exampleRadios2">
                      Menu
                    </label>
                </div>
              </div> 
              <div id='container2'className='h-100 position-absolute animations mycontainer' style={{marginLeft: '94%'}}>
                <Menu></Menu>
              </div> 

              <div id='menu3'className='h-100 animations d-flex justify-content-center position-absolute border' style={{marginLeft: '94%'}}>
                <input className="form-check-input rotate positionradio mycursor" type="radio" onClick={() => this.moveMenu3()} name="exampleRadios" id="exampleRadios3" value="option3" />
                <div className="form-check align-self-center rotate position-absolute positionlabel"  onClick={() => this.moveMenu3()}>     
                    <label className="form-check-label mycursor" htmlFor="exampleRadios3">
                      Contact
                    </label>
                </div>
              </div> 
              <div id='container3' className='h-100 position-absolute animations mycontainer' style={{marginLeft: '97%'}}>
                <Contact></Contact>
              </div> 
              <div id='menu4'className='h-100 animations d-flex justify-content-center position-absolute border' style={{marginLeft: '97%'}}>
                <input className="form-check-input rotate positionradio mycursor" type="radio" onClick={() => this.moveMenu4()} name="exampleRadios" id="exampleRadios4" value="option4" /> 
                <div className="form-check align-self-center rotate position-absolute positionlabel" onClick={() => this.moveMenu4()}>      
                    <label className="form-check-label mycursor" htmlFor="exampleRadios4">
                      About
                    </label>
                </div>
              </div>   
              <div id='container4' className='h-100 position-absolute animations mycontainer' style={{marginLeft: '100%'}}>
                <About></About>
              </div>
            </div> 
          </div>
          <div className='col-12 headers'>      
          </div>        
        </div>
        
        
      </div>
    )
  }

}

export default Layout