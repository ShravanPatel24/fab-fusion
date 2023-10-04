"use client";

import { useAuth } from "@clerk/nextjs";
import AddressForm from "@/app/components/AddressForm";
import React from "react";

const Index = () => {
  const { userId } = useAuth();

  const [shippingAddress, setShippingAddress] = React.useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const [billingAddress, setBillingAddress] = React.useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  if (userId) {
    return (
      <div>
        <AddressForm
          shippingAddress={shippingAddress}
          setShippingAddress={setShippingAddress}
          billingAddress={billingAddress}
          setBillingAddress={setBillingAddress}
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please sign up or log in</h1>
      </div>
    );
  }
};

export default Index;
