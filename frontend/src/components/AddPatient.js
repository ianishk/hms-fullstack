// import style from  './addPatient.module.css';
import pict from "./logos/main_logo_v2.svg";
import React from "react";
import { Link } from "react-router-dom";

const AddPatient = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
     <div className="flex justify-center flex-col items-center bg-[#121212] flex"><br/><br/>
        <h1 className="text-5xl text-white font-semibold mb-6">Welcome to name!</h1><br/>
        <img className="object-cover w-60 h-60" src = {pict} alt = "project_logo"/>
        <br/>
        <Link to="/login">
          <button className="inline-block px-7 py-3 bg-[#121212] border-white border-4 text-white font-medium rounded 
          shadow-md hover:bg-white hover:text-[#121212] uppercase hover:shadow-lg focus:shadow-lg 
          focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out">
            Log in
          </button>
        </Link>

    </div>


    <div className="flex justify-center flex-col items-center">
        
        <form className="flex flex-col justify-center place-items-center">
        
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
              py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="John"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
              leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" 
              placeholder="Doe"/>
            </div>
          </div>
           <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
              mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="abc@xyz.com"/>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Password
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
              leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" 
              placeholder="*******"/>
            </div>
          </div>
          <div className="w-full md:w-[30rem] px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                Address
              </label>
              <textarea rows="4" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 
              rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-address" type="text" 
              placeholder="xyz street"/>
            </div>

        
        <br/><br/><br/>
        <button type = "submit" className="inline-block px-7 py-3 bg-[#121212] uppercase text-white hover:border-[#1275B4] 
        font-medium rounded shadow-md hover:bg-[#1275B4] border-[#121212] border-4 transition duration-150 ease-in-out">
          register
        </button>
        </form>
    </div>
    
   
</div>
  );
}

export default AddPatient;
