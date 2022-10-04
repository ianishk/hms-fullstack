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
const OutpatientPage = () => {
    const location = useLocation()
    console.log(location.pathname)

    const findComponent = () => { 
        if(location.pathname === "/outpatient/EditOutpatient"){
            return <EditOutpatient />
        }
        else if(location.pathname === "/outpatient/RaiseQuery"){
          return <RaiseQuery />
        }
        else if(location.pathname === "/outpatient/AddQueryP" ){
          return <AddQueryP />
        }
        else if(location.pathname === "/outpatient/ViewPrescription" ){
          return <ViewPrescription />
        }
        else if(location.pathname === "/outpatient/ViewAppointment" ){
          return <ViewAppointment />
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