import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // Import this
import * as yup from "yup"; // Import yup
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddressForm = ({ initialData, onSubmitForm, buttonText }) => {
  const router = useRouter();

  const validationSchema = yup.object().shape({
    shippingAddress: yup.object().shape({
      name: yup.string().required("Name is required"),
      street: yup.string().required("Street Address is required"),
      city: yup.string().required("City is required"),
      state: yup.string().required("State is required"),
      pin: yup
        .string()
        .matches(/^\d{6}$/, "Invalid PIN Code")
        .required("PIN Code is required"),
    }),
    billingAddress: yup.object().shape({
      name: yup.string().required("Name is required"),
      street: yup.string().required("Street Address is required"),
      city: yup.string().required("City is required"),
      state: yup.string().required("State is required"),
      pin: yup
        .string()
        .matches(/^\d{6}$/, "Invalid PIN Code")
        .required("PIN Code is required"),
    }),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema), // Use yupResolver here
  });

  const [copyShippingToBilling, setCopyShippingToBilling] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Submit the data to the API route
      const response = await fetch("/api/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send form data as JSON
      });

      if (response.ok) {
        // Form submitted successfully, show a success toast
        await new Promise((resolve) => {
          toast.success(
            "Form submitted successfully. Please Wait till you are redirected to home page.",
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              onClose: resolve, // Resolve the promise when the toast closes
            }
          );
        });

        // Redirect to the home page after the toast closes
        router.push("/");
      } else {
        // Handle errors here
        toast.error("Error submitting form", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors here
      toast.error("Internal server error", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
  };

  const copyShippingAddressToBilling = () => {
    const shippingAddress = getValues("shippingAddress");
    setValue("billingAddress", { ...shippingAddress });
  };

  useEffect(() => {
    if (!copyShippingToBilling) {
      // Clear the billing address when unchecked
      setValue("billingAddress", {
        name: "",
        street: "",
        city: "",
        state: "",
        pin: "",
      });
    } else {
      // Copy shipping address when checked
      copyShippingAddressToBilling();
    }
  }, [copyShippingToBilling, setValue]);

  return (
    <div className="mt-12">
      <p className="text-red-500 flex justify-center font-bold text-2xl">
        Please Add Your Address to Continue.
      </p>
      <div className="flex justify-center mb-4">
        {" "}
        <hr className="border-gray-300 mt-8 w-3/4" />{" "}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="flex">
          <fieldset className="space-y-2 flex-1 pr-2">
            <legend className="text-lg font-semibold">Shipping Address</legend>
            <div className="space-y-1">
              <Controller
                name="shippingAddress.name"
                control={control}
                defaultValue=""
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border rounded"
                  />
                )}
              />
              {errors.shippingAddress?.name && (
                <p className="text-red-500 mt-2">
                  {errors.shippingAddress.name.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <Controller
                name="shippingAddress.street"
                control={control}
                defaultValue=""
                rules={{ required: "Street is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Street/Area/Locality"
                    className="w-full p-2 border rounded"
                  />
                )}
              />
              {errors.shippingAddress?.street && (
                <p className="text-red-500 mt-2">
                  {errors.shippingAddress.street.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <Controller
                name="shippingAddress.city"
                control={control}
                defaultValue=""
                rules={{ required: "City is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="City"
                    className="w-full p-2 border rounded"
                  />
                )}
              />
              {errors.shippingAddress?.city && (
                <p className="text-red-500 mt-2">
                  {errors.shippingAddress.city.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <Controller
                name="shippingAddress.state"
                control={control}
                defaultValue=""
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="State"
                    className="w-full p-2 border rounded"
                  />
                )}
              />
              {errors.shippingAddress?.state && (
                <p className="text-red-500 mt-2">
                  {errors.shippingAddress.state.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <Controller
                name="shippingAddress.pin"
                control={control}
                defaultValue=""
                rules={{ required: "PIN Code is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="PIN Code"
                    className="w-full p-2 border rounded"
                  />
                )}
              />
              {errors.shippingAddress?.pin && (
                <p className="text-red-500 mt-2">
                  {errors.shippingAddress.pin.message}
                </p>
              )}
            </div>
          </fieldset>

          {/* Billing Address */}
          <fieldset className="space-y-2 flex-1 pl-2">
            <legend className="text-lg font-semibold">Billing Address</legend>
            <div className="space-y-1">
              <Controller
                name="billingAddress.name"
                control={control}
                defaultValue=""
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border rounded"
                    readOnly={copyShippingToBilling}
                  />
                )}
              />
            </div>
            {errors.billingAddress?.name && (
              <p className="text-red-500 mt-2">
                {errors.billingAddress.name.message}
              </p>
            )}
            <div className="space-y-1">
              <Controller
                name="billingAddress.street"
                control={control}
                defaultValue=""
                rules={{ required: "Street Address is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Street/Area/Locality"
                    className="w-full p-2 border rounded"
                    readOnly={copyShippingToBilling}
                  />
                )}
              />
              {errors.billingAddress?.street && (
                <p className="text-red-500 mt-2">
                  {errors.billingAddress.street.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <Controller
                name="billingAddress.city"
                control={control}
                defaultValue=""
                rules={{ required: "City is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="City"
                    className="w-full p-2 border rounded"
                    readOnly={copyShippingToBilling}
                  />
                )}
              />
              {errors.billingAddress?.city && (
                <p className="text-red-500 mt-2">
                  {errors.billingAddress.city.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <Controller
                name="billingAddress.state"
                control={control}
                defaultValue=""
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="State"
                    className="w-full p-2 border rounded"
                    readOnly={copyShippingToBilling}
                  />
                )}
              />
              {errors.billingAddress?.state && (
                <p className="text-red-500 mt-2">
                  {errors.billingAddress.state.message}
                </p>
              )}
            </div>
            <div className="space-y-1">
              <Controller
                name="billingAddress.pin"
                control={control}
                defaultValue=""
                rules={{ required: "PIN Code is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="PIN Code"
                    className="w-full p-2 border rounded"
                    readOnly={copyShippingToBilling}
                  />
                )}
              />
              {errors.billingAddress?.pin && (
                <p className="text-red-500 mt-2">
                  {errors.billingAddress.pin.message}
                </p>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="copyBilling"
                name="copyBilling"
                checked={copyShippingToBilling}
                onChange={() => {
                  setCopyShippingToBilling(!copyShippingToBilling);
                }}
                className="hidden" // Hide the default checkbox
              />
              <label
                htmlFor="copyBilling"
                className="flex items-center cursor-pointer"
              >
                <div className="w-8 h-6 border border-gray-300 rounded-md flex items-center justify-center">
                  {copyShippingToBilling && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.293 10.293a1 1 0 011.414 0L12 15.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                      />
                    </svg>
                  )}
                </div>
                <span className="ml-2">Same as Shipping Address</span>
              </label>
            </div>
          </fieldset>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition duration-300 mb-12"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddressForm;
