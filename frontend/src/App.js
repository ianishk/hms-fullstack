// import './App.css';

import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AddPatient from "./components/AddPatient";
import Login from "./components/login";

// import login from "./components/login";
// import addPatient from './components/addPatient';
// import ManageDoctor from './components/ManageDoctor';
// import manageInpatient from './components/ManageInpatient';
// import manageOutpatient from './components/ManageOutpatient';
// import managePharmacist from './components/ManagePharmacist';
// import manageReceptionist from './components/ManageReceptionist';
// import editDoctor from './components/editDoctor';
// import editInpatient from './components/editInpatient';
// import editOutpatient from './components/editOutpatient';
// import editReceptionist from './components/editReceptionist';
// import EditPharmacist from './components/EditPharmacist';
// import manageInventory from "./components/MangaeInventory";
// import addMedicine from "./components/addMedicine";
// import manageAppointments from "./components/ManageAppointments";
// import editAppointments from "./components/editAppointments";
// import AdminNavabar from "./components/AdminNavabar";
import AdminPage from "./pages/AdminPage";
import DoctorPage from "./pages/DoctorPage";
import InpatientPage from "./pages/InpatientPage";
import OutpatientPage from "./pages/OutpatientPage";
import PharmacistPage from "./pages/PharmacistPage";
import ReceptionistPage from "./pages/ReceptionistPage";
import setAuthToken from './utils/setAuthToken';

function App() {
  return (
  <>
   <BrowserRouter>
      <Routes>
        <Route path="/admin/:id" element={<AdminPage />} />
        <Route path="/pharmacist/:id" element={<PharmacistPage />} />
        <Route path="/receptionist/:id" element={<ReceptionistPage />} />
        <Route path="/doctor/:id" element={<DoctorPage />} />
        <Route path="/inpatient/:id" element={<InpatientPage />} />
        <Route path="/outpatient/:id" element={<OutpatientPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/AddPatient" element={<AddPatient />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

// function Admin() {
//   return (
//     <Routes>
//       <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start">
//                   <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
//                   <nav className="text-xl">
//                       <ul>
//                           <li>
//                               <img className="object-cover ml-[690px] w-25 h-20" src = {pictblack} alt = "project_logo"/>
//                           </li>
//                           <li className="object-cover ml-[615px]">
//                               Hospital Management System s
//                           </li>
//                       </ul>
//                       <br/>
//                       <ul className="flex">
//                           <li className="mt-0.5 w-full rounded border-black border-2 bg-black text-white py-3 mr-2 text-xl flex justify-center place-items-center whitespace-nowrap px-4 transition-colors" href="">
//                           <a>Doctors</a>                            
//                           </li>
//                           <li></li>
//                           <li className="mt-0.5 w-full rounded border-black border-2 bg-white text-black py-3 mr-2 text-xl flex justify-center place-items-center whitespace-nowrap px-4 transition duration-300 hover:bg-black hover:text-white" href="">
//                           <a>Inpatients</a>                            
//                           </li>
//                           <li className="mt-0.5 w-full rounded border-black border-2 bg-white text-black py-3 mr-2 text-xl flex justify-center place-items-center whitespace-nowrap px-4 transition duration-300 hover:bg-black hover:text-white" href="">
//                           <a>Outpatients</a>                            
//                           </li>
//                           <li className="mt-0.5 w-full rounded border-black border-2 bg-white text-black py-3 mr-2 text-xl flex justify-center place-items-center whitespace-nowrap px-4 transition duration-300 hover:bg-black hover:text-white" href="">
//                           <a>Receptionists</a>                            
//                           </li>
//                           <li className="mt-0.5 w-full rounded border-black border-2 bg-white text-black py-3 mr-80 text-xl flex justify-center place-items-center whitespace-nowrap px-4 transition duration-300 hover:bg-black hover:text-white" href="">
//                           <a>Pharmacists</a>                            
//                           </li>
//                           <li>
//                           <button className="ml-80 rounded border-black border-2 px-3 py-3 transition duration-300 hover:bg-black hover:text-white">LOGOUT</button>
//                           </li>
//                       </ul>
                      
//                   </nav>
                  
//                   </div>
//               </nav>

//         {/* <Route path=":id" element={<UserProfile />} />
//         <Route path="me" element={<OwnUserProfile />} /> */}
//     </Routes>
//   );

export default App;
