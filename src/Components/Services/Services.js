import "./Services.css"

import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import Math from "../Math/Math";
import Biology from "../biology/Biology";

const Services = () => {

    const [Mathdata, setMathdata] = useState([]);
    const [BioData, setBioData] = useState([]);



 

    useEffect(() => {
        fetch("./FakeMath.JSON")
        .then(res=>res.json())
        .then(data=>setMathdata(data))
       
    }, [])


    useEffect(() => {
        fetch("./FakeBiology.JSON")
        .then(res=>res.json())
        .then(data=>setBioData(data))
       
    }, [])



console.log(Mathdata)
console.log(BioData)





    return (
        <div className="bg-info" style={{marginTop:"130px"}}>
            <div>
                <h1 className="border p-4 fw-bolder">Mathemitcs Course</h1>
            <div>
                
                <div class="row row-cols-1 row-cols-md-4 g-4">

                {
                    Mathdata.map(item=><Math
                    key={item.id}
                    math={item}
                    
                    
                    
                    ></Math>)
                }
                </div>
            </div>


            </div>

            <div>
                <h1 className="border p-4 bg-Secondary fw-bolder mt-5" style={{backgroundColor:"#0000"}}>Biology Course</h1>
                <div>
                <div class="row row-cols-1 row-cols-md-4 g-4">

                    {
                    BioData.map(item=><Biology
                    key={item.id}
                    bio={item}
                    
                    
                    
                    ></Biology>)
                  
                    
                    
                    
                    
                }
                    </div>
                </div>
            
            </div>


        </div>
    );
};

export default Services;