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

console.log(data);
    //----------------------- main home component where contain three child component-------------------

    return (
        <>
           <Title></Title>

            <div className="row cart">
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