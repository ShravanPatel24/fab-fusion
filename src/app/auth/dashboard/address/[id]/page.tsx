// Import necessary modules
"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

const AddressId = () => {
  const params = useParams();
  const uid = params.uid;
  const fetchAddressById = async () => {
    try {
      const response = await fetch(`/api/address/id?id=${uid}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return null; // Address not found or other error
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      return null; // Handle errors gracefully
    }
  };
  useEffect(() => {
    fetchAddressById();
  }, [params.id]);
};

export default AddressId;
