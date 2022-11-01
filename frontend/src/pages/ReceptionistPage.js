import React from 'react'
import Footer from '../components/Footer'
import ManageAppointments from '../components/ManageAppointments'
import ReceptionistNavbar from '../components/ReceptionistNavbar'
import { useLocation } from 'react-router-dom'
import ManageQueries from '../components/ManageQueries'
import ManageRooms from '../components/ManageRooms'
import ManageRoomBooking from '../components/ManageRoomBooking'
import EditReceptionist from '../components/EditReceptionist'
import EditAppointment from '../components/EditAppointment'
import EditQuery from '../components/EditQuery'
import EditRooms from '../components/EditRooms'
import EditRoom from '../components/EditRoom'
import AddAppointment from '../components/AddAppointment'
import AddQuery from '../components/AddQuery'
import AddRooms from '../components/AddRooms'
import AddRoom from '../components/AddRoom'
import AddBill from '../components/AddBill'
import ManageBill from '../components/ManageBill'
import EditBill from '../components/EditBill'
import ResolvedQuery from '../components/ResolvedQuery'

function ReceptionistPage() {
    const location = useLocation()
    console.log(location.pathname)

    const findComponent = () => { 
        if(location.pathname === "/receptionist/ManageAppointments"){
            return <ManageAppointments />
        }
        if(location.pathname === "/receptionist/ManageQueries"){
            return <ManageQueries />
        }
        if(location.pathname === "/receptionist/ManageRooms"){
            return <ManageRooms />
        }
        if(location.pathname === "/receptionist/ManageRoomBooking"){
            return <ManageRoomBooking />
        }
        else if(location.pathname === "/receptionist/EditReceptionist" ){
            return <EditReceptionist />
        }
        else if(location.pathname === "/receptionist/EditAppointment" ){
            return <EditAppointment />
        }
        else if(location.pathname === "/receptionist/EditQuery" ){
            return <EditQuery />
        }
        else if(location.pathname === "/receptionist/EditRooms" ){
            return <EditRooms />
        }
        else if(location.pathname === "/receptionist/EditRoom" ){
            return <EditRoom />
        }
        else if(location.pathname === "/receptionist/AddAppointment" ){
            return <AddAppointment />
        }
        else if(location.pathname === "/receptionist/AddQuery" ){
            return <AddQuery />
        }
        else if(location.pathname === "/receptionist/AddRooms" ){
            return <AddRooms />
        }
        else if(location.pathname === "/receptionist/AddRoom" ){
            return <AddRoom />
        }
        else if(location.pathname === "/receptionist/AddBill" ){
            return <AddBill />
        }
        else if(location.pathname === "/receptionist/ManageBilling" ){
            return <ManageBill />
        }
        else if(location.pathname === "/receptionist/EditBill" ){
            return <EditBill />
        }
        else if(location.pathname === "/receptionist/ResolvedQuery" ){
            return <ResolvedQuery />
        }
        // else if(location.pathname === "/admin/ViewPrescription" ){
        //     return <pres />
        // }
    }
  return (
    <>
        <ReceptionistNavbar/>
        {findComponent()}
        <Footer />
    </>
  )
}

export default ReceptionistPage