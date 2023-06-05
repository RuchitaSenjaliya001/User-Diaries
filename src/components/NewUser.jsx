import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import Input from "./UI/Input";
// { name: "Ruchi", username: "ruchi", email: "ruchi@r.com" }
const CREATE_USER = gql`
  mutation NewUser($input: CreateUserInput) {
    createUser(input: $input) {
      name
      id
      username
      email
    }
  }
`;

export default function NewUser() {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
  });
  const [submitFn, { data, loading, error }] = useMutation(CREATE_USER, {
    variables: {
      fullName: formData.fullName,
      userName: formData.userName,
      email: formData.email,
    },
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // submitFn();
    // console.log(submitFn());
    console.log(formData);
    // console.log(data);
    setFormData({
      fullName: "",
      userName: "",
      email: "",
    })
  };

  return (
    <div className=" max-w-xl m-auto">
      <h1 className="text-3xl text-center py-5 font-bold text-violet-600">
        Let&apos;s create new user
      </h1>
      <form action="" onSubmit={submitHandler}>
        <Input
          type="text"
          name="fullName"
          label="FULL NAME"
          placeholder="Enter fullname..."
          value={formData.fullName}
          inputChangeHandler={inputChangeHandler}
        />
        <Input
          type="text"
          name="userName"
          label="USERNAME"
          value={formData.userName}
          inputChangeHandler={inputChangeHandler}
          placeholder="Enter username..."
        />
        <Input
          type="email"
          name="email"
          label="EMAIL"
          value={formData.email}
          placeholder="Enter email..."
          inputChangeHandler={inputChangeHandler}
        />
        {/* <Input
          name="company"
          label="COMPANY"
          placeholder="Enter company..."
          inputChangeHandler={inputChangeHandler}
        />
        <Input
          name="website"
          label="WEBSITE"
          placeholder="Enter website..."
          inputChangeHandler={inputChangeHandler}
        /> */}

        <div className="text-center">
          <button
            type="submit"
            className="py-2 hover:bg-violet-700 duration-300 px-10 my-5 bg-violet-500 text-white rounded-md"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
