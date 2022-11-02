import React from 'react'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import OutpatientNavabar from '../components/OutpatientNavbar'
import EditOutpatient from '../components/EditOutpatient'
import RaiseQuery from '../components/RaiseQuery'
import AddQueryP from '../components/AddQueryP'
import ViewPrescription from '../components/ViewPrescription'
import ViewAppointment from '../components/ViewAppointment'
import AddAppointmentPatient from '../components/AddAppointmentPatient'
import AddQuery from '../components/AddQuery'
const OutpatientPage = () => {
    const location = useLocation()
    console.log(location.pathname)
    let data ={
      "Prescription" :[
        {
          "patient":"John Doe",
          "doctor":"Doe John",
          "medicine":"Crocin 500mg",
          "instructions":"0-1-1 after food"
        }
        ]
    }
    const findComponent = () => { 
        if(location.pathname === "/outpatient/EditOutpatient"){
            return <EditOutpatient />
        }
        else if(location.pathname === "/outpatient/RaiseQuery"){
          return <RaiseQuery />
        }
        else if(location.pathname === "/outpatient/AddQuery" ){
          return <AddQuery />
        }
        else if(location.pathname === "/outpatient/ViewPrescription" ){
          return <ViewPrescription data={data}/>
        }
        else if(location.pathname === "/outpatient/ViewAppointment" ){
          return <ViewAppointment  />
        }
        else if(location.pathname === "/outpatient/AddAppointmentPatient" ){
          return <AddAppointmentPatient/>
        }
        // else if(location.pathname === "/admin/ManageDoctor" ){
        //     return <ManageDoctor />
       
    }
  return (
    <>
    <OutpatientNavabar />
    {findComponent()}
    <Footer />
    </>
  )
}

export default OutpatientPage