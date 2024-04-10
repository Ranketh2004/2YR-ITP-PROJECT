import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateSalesmanDetails() {

    const { salespersonID } = useParams();
    const [salesmanDetails, setSalesmanDetails] = useState({
        name: "",
        username: "",
        dateOfBirth: "",
        email: "",
        phone: "",
        address: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchSalesmanDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:8070/salesmen/salesmenDashboard/${salespersonID}`);
                console.log(res.data);

                const salesmanData = res.data.salesman || res.data;
                const { name, username, dateOfBirth, email, phone, address } = salesmanData;
                setSalesmanDetails({ name, username, dateOfBirth, email, phone, address });
                console.log(name)
            } catch (error) {
                console.log("Error fetching details", error.message);
            }
        };
        fetchSalesmanDetails();
    }, [salespersonID]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:8070/salesmen/updateSalesmen/${salespersonID}`, salesmanDetails);
            alert('Details Updated successfully');
            navigate(`/myAccount/${salespersonID}`);
        } catch (error) {
            console.log("Error!", error.message);
        }
    };

    return (
        <div>
            <div className="container" style={{ textAlign: "left", width: "600px", marginTop: "50px" }}>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="name" class="form-label" >Name</label>
                        <input type="text" class="form-control" id="name" required value={salesmanDetails.name} onChange={(e) => {
                            setSalesmanDetails({
                                ...salesmanDetails,
                                name: e.target.value,
                            });
                        }} />
                    </div>

                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" required value={salesmanDetails.username} onChange={(e) => {
                            setSalesmanDetails({
                                ...salesmanDetails,
                                username: e.target.value,
                            });
                        }} />
                    </div>

                    <div class="mb-3">
                        <label for="dateOfBirth" class="form-label">Date of Birth</label>
                        <input type="date" class="form-control" id="dateOfBirth" required value={salesmanDetails.dateOfBirth} onChange={(e) => {
                            setSalesmanDetails({
                                ...salesmanDetails,
                                dateOfBirth: e.target.value,
                            });
                        }} />
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" required value={salesmanDetails.email} onChange={(e) => {
                            setSalesmanDetails({
                                ...salesmanDetails,
                                email: e.target.value,
                            });
                        }} />
                    </div>

                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone number</label>
                        <input type="number" class="form-control" id="phone" required value={salesmanDetails.phone} onChange={(e) => {
                            setSalesmanDetails({
                                ...salesmanDetails,
                                phone: e.target.value,
                            });
                        }} />
                    </div>

                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" required value={salesmanDetails.address} onChange={(e) => {
                            setSalesmanDetails({
                                ...salesmanDetails,
                                address: e.target.value,
                            });
                        }} />
                    </div>

                    <button type="submit" class="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
};

export default UpdateSalesmanDetails;