import React, { useState , useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function DeletePaymentDetails() {

    const [customerID,setCustomerID] = useState("");
    const[paymentDetails,setPaymentDetails] = useState("");

    useEffect(() => {
        if (customerID !== "") {
            fetchPaymentDetails();
        }
    }, [customerID]);

    const fetchPaymentDetails = () => {
        axios.get(`http://localhost:8070/paymentdetails/${customerID}`).then(response => {
            setPaymentDetails(response.data);
        }).catch((err) => {
            console.log(err);
        })
    };

    const deletepaymentdetails = (objectID) => {
        axios.delete(`http://localhost:8070/paymentdetails/delete/${objectID}`).then(response=> {
             console.log(response.data);
             alert("Payment Details Deleted ! ");
        }).catch((err) => {
            console.log(err);
    })
    }

  return (
    <div>
        <Navigation/>
        <input placeholder='Enter Customer ID' id="form2Example1" class="form-control" style={{ marginTop: "150px", marginLeft:"300px" }} required onChange={(e) => {
            setCustomerID(e.target.value);
        }}/>
        <br></br>

        

        {paymentDetails.length > 0 ? (
                <div>
                    
                    <table style={{ marginTop: "20px", marginLeft:"255px" }} className="tamin-w-full divide-y divide-gray-200ble">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pay Amount</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit Amount</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {paymentDetails.map((payment) => (
                                <tr key={payment._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{payment.customerID}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{payment.totalamount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{payment.payamount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{payment.creditamount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{new Date(payment.dateandtime).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{new Date(payment.dateandtime).toLocaleTimeString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap"><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => deletepaymentdetails(payment._id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
            ) : null}

        <br></br>
    </div>
  )
}

export default DeletePaymentDetails