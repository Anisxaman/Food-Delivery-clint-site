// import { faInfo,checkSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import Footer from '../../images/bottom.PNG';
import img1 from "../../images/10.jpg"
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useHistory } from 'react-router';
AOS.init();

const Home = () => {

    const [data, setdata] = useState([])



    useEffect(() => {
    //    fetch("./FakeData.json")
       fetch("https://dark-werewolf-01616.herokuapp.com/item")
       .then(res=>res.json())
       .then(data=>setdata(data))
       console.log(data)
        }, [])

const history=useHistory();
const handleGet=()=>{
    history.push("/services/any")

}



// console.log("DataIndex",data[3]);




    return (
        <div className="overflow-hidden">
            <Banner></Banner>

            <h1 className="text-dark fw-bold p-5 " style={{fontFamily: 'Vesper Libre',backgroundColor:"#dc3545"}}>You prepare the food, we handle the rest</h1>

          <div className='row'>
          {
                data.map((info,index)=><Body
                key={info._id}
                info={info}
                index={index}
                
                
                
                
                
                ></Body>)
            }
            
          
          </div>
           <div>

         <div className="text-center">
         <h1 className="fw-bold"> ABOUT <span className="text-success fs-1 fw-bolder" data-aos="zoom-in-left" data-aos-duration="3000" >FOODpanda</span></h1>
         </div>
               <div className="row g-0">
                   <div className="col-lg-8 col-12">
                       <img  className="img-fluid" src={img1}  alt="" />

                   </div>
                   <div className="col-lg-4 col-12 bg-info p-4 " >
                     <div style={{marginTop:"200px"}}>
                     <h1 className="fw-bold text-black"><span className="text-danger">List your restaurant or shop on </span> foodpanda</h1>

                    <h4  className="text mt-5" data-aos="zoom-in-left" data-aos-duration="3000">
                    Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
                    It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                    Interested? Let's start our partnership today!
                    </h4>
                     </div>


                    


                        <ul className="fs-3 p-3">
                                <p data-aos="fade-left" data-aos-duration="3000"><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Growth Your Business</span></p>
                                <p  data-aos="fade-right" data-aos-duration="3000"><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Easily Reach to Customer</span></p>
                                <p  data-aos="fade-left" data-aos-duration="3000"><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Safe Time</span></p>
                                <p  data-aos="fade-right" data-aos-duration="3000"><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>24/7 Services</span></p>
                            </ul> 


        <button type="button" onClick={handleGet} class="btn btn-danger mt-2">GET STARTED <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></button>

                   </div>
               </div>



               <div>
                   <img src={Footer} alt="" />
               </div>
              
           </div>

            
        </div>
    );
};

export default Home;