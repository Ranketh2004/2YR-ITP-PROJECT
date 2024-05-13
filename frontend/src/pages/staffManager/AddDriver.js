import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddDriver() {
    const { id } = useParams();
    const [dname, setName] = useState("");
    const [dID, setdID] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [phone_number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [duration_of_job, setDuration_of_job] = useState("");

    const sendData = async (e) => {
        e.preventDefault();

        const newAddDriver = {
            dname,
            dID,
            age,
            address,
            phone_number,
            email,
            duration_of_job
        }

        try {
            await axios.post("http://localhost:8070/driver/add", newAddDriver);
            alert("Driver Added");

            setName("");
            setdID("");
            setAge("");
            setAddress("");
            setNumber("");
            setEmail("");
            setDuration_of_job("");
        } catch (err) {
            alert(err.message);
            console.log(err)
        }
    }

    return (

        <div className="absolute mt-48 left-1/3 w-1/2">
            <h1 className="text-2xl font-bold mb-4">Driver Registration form</h1>
            <form onSubmit={sendData}>

                <div>
                    <label htmlFor="dname" className="block text-sm font-medium text-gray-700">Driver Name</label>
                    <input type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="dname" placeholder="Enter driver Name" value={dname} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="dID" className="block text-sm font-medium text-gray-700">Driver ID</label>
                    <input type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="dID" placeholder="Enter driver ID" value={dID} onChange={(e) => setdID(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input type="number" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="age" placeholder="Enter the Age" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>


                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="address" placeholder="Enter the Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="phone_number" maxLength="10" pattern="[0-9]{10}" placeholder="Enter the Phone Number" value={phone_number} onChange={(e) => setNumber(e.target.value)} title="Please enter exactly 10 digits" required />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="email" placeholder="Enter the Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="duration_of_job" className="block text-sm font-medium text-gray-700">Duration of Job</label>
                    <input type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="duration_of_job" placeholder="Enter duration of job" value={duration_of_job} onChange={(e) => setDuration_of_job(e.target.value)} />
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Driver</button>
            </form>
        </div>

    );
}