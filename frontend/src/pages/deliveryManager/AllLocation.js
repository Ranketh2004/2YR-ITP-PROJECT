import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function AllLocation() {
    const [searchValue, setSearchValue] = useState("");
    const [tea, setTea] = useState([]);
    const [filteredTea, setFilteredTea] = useState([]);

    useEffect(() => {
        fetchTea();
    }, []);

    useEffect(() => {
        filterTea();
    }, [searchValue, tea]);

    const fetchTea = () => {
        axios.get("http://localhost:8070/tea/")
            .then(response => {
                setTea(response.data);
                setFilteredTea(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const filterTea = () => {
        if (searchValue.trim() === "") {
            setFilteredTea(tea);
        } else {
            const filteredData = tea.filter(tea1 =>
                tea1.name && tea1.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredTea(filteredData);
        }
    }

    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/updatelocations/${id}`);
    }

    const handleDelete = (id) => {
        navigate(`/deletelocations/${id}`);
    }

    return (
        <div>
            <div style={{ marginLeft: 480 }}>
                <br />
                <div style={{ position: 'relative' }}>
                    <input style={{ paddingLeft: '30px' }} placeholder='Search' onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}></input>
                    {/* SVG icon */}
                </div>
            </div>

            {filteredTea.length > 0 ? (
                <div>
                    <h1>All Customer Locations</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Address</th>
                                <th scope="col">District</th>
                                <th scope="col">Delivery_code</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTea.map((tea1) => (
                                <tr key={tea1._id}>
                                    <td>{tea1.name}</td>
                                    <td>{tea1.email}</td>
                                    <td>{tea1.phone_number}</td>
                                    <td>{tea1.address}</td>
                                    <td>{tea1.district}</td>
                                    <td>{tea1.delivery_code}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" onClick={() => handleUpdate(tea1._id)}>Update</button>
                                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(tea1._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>No results found</div>
            )}
        </div>
    );
}
