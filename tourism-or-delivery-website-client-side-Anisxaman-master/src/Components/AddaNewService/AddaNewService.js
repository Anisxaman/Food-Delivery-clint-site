import React from 'react';
import "./AddaNewService.css"
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddaNewService = () => {



const { register, handleSubmit,reset } = useForm();


  const onSubmit=data => {
      console.log(data);
      axios.post("https://dark-werewolf-01616.herokuapp.com/manage",data)
      .then(res=>{
        if(res.data.insertedId){
          alert("Inserted successfully");
          reset();
        }
        console.log(res);
      })
  }



    return (
        <>

         <div className="setForm"  >
            


            <form onSubmit={handleSubmit(onSubmit)} className="w-50" style={{marginTop:"200px",marginBottom:"200px"}}>
            <h1>Add a new Service</h1>
        <label className="my-2" >User Name</label>
        <br />
      <input className="w-100" {...register("name", { required: true, maxLength: 20 })} />
      <br />
      <label className="my-2">Description</label>
      <br />
      <textarea className="w-100" {...register("description")} />
      <br />
      <label className="my-2">Price</label>
      <br />

      <input type="number" {...register("price", { min: 18, max: 99 })} />
      <br />
      <label className="my-2">Set-delivery-Time:</label>
      <br />

      <input type="number" {...register("time", { min: 18, max: 99 })} />
      <br />
      <label className="my-2">Set Image Url</label>
      <br />

      <input className="w-100"  {...register("img", { min: 18, max: 99 })} />
      <br />
      <input className="mt-3 btn btn-danger"  type="submit" />
    </form>

            </div> 





            
        </>
    );
};

export default AddaNewService;