"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "@clerk/nextjs";
import Header from "../components/Header";
import Link from "next/link";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm = () => {
  const { isSignedIn } = useUser();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission here (e.g., send data to a server)
    console.log(data);
    alert("Your Response has been submitted.");
  };

  return (
    <div>
      <Header />
      <div className="max-w-md mx-auto mt-16">
        <h1 className="text-2xl font-semibold text-center mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-bold mb-2">
              Name
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="name"
                  className={`w-full border p-2 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 mt-2">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-bold mb-2">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  id="email"
                  className={`w-full border p-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-bold mb-2">
              Message
            </label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="message"
                  rows={4}
                  className={`w-full border border-gray-300 rounded p-2 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.message && (
              <p className="text-red-500 mt-2">{errors.message.message}</p>
            )}
          </div>

          {isSignedIn ? (
            <button
              type="submit"
              className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 transition duration-300"
            >
              Submit
            </button>
          ) : (
            <p className="text-red-500 mt-2">
              Please{" "}
              <Link href="/sign-in">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Login
                </button>
              </Link>{" "}
              to continue.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
