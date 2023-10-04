// Import necessary modules and components
"use client";

import { useEffect, useState } from "react";

interface Address {
  shippingAddress: any;
  billingAddress: any;
  id: string; // or number, depending on your data structure
  name: string;
  street: string;
  city: string;
  state: string;
  pin: string;
}

function AddressList() {
  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    // Make a GET request to the API endpoint
    fetch("/api/address")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch addresses");
        }
      })
      .then((data) => {
        console.log(data); // Log the fetched data
        setAddresses(data); // Set the fetched addresses in state
      })
      .catch((error) => {
        console.error("Error fetching addresses:", error);
        // Handle errors here
      });
  }, []);

  return (
    <div className="flex justify-center mt-64 mb-64">
      <div>
        <h1>List of Billing Addresses</h1>
        <ul>
          {addresses.map((address) => (
            <li key={address.id}>
              <p>Name: {address.billingAddress.name}</p>
              <p>Street: {address.billingAddress.street}</p>
              <p>City: {address.billingAddress.city}</p>
              <p>State: {address.billingAddress.state}</p>
              <p>PIN Code: {address.billingAddress.pin}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-12">
        <h1>List of Shipping Addresses</h1>
        <ul>
          {addresses.map((address) => (
            <li key={address.id}>
              <p>Name: {address.shippingAddress.name}</p>
              <p>Street: {address.shippingAddress.street}</p>
              <p>City: {address.shippingAddress.city}</p>
              <p>State: {address.shippingAddress.state}</p>
              <p>PIN Code: {address.shippingAddress.pin}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddressList;
