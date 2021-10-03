import "./Home.css"
import React, { useEffect, useState } from 'react';
import Body from "../Body/Body";
import Topics from "../Topics/Topics";
import Instructor from "../Instructor/Instructor";
import Title from "../Title/Title";

const Home = () => {
    const [data, setdata] = useState([]);


    useEffect(() => {

        fetch("./FakeData.JSON")
        .then(res=>res.json())
        .then(data=>setdata(data))

       
    }, [])


    return (
        <>
           <Title></Title>

            <div className="row">
            {
                data.map(item=><Body
                key={item.id}
                item={item}                
                >

                </Body>
                
                
                )
            } 
            </div>
         

            
            
            
            
            <Topics></Topics>
            <Instructor></Instructor>



            
        </>
    );
};

export default Home;