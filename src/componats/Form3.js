import React from "react";
import { useForm } from "react-hook-form";

function Form3({ defaultValues }) {
  // const { register, handleSubmit, errors } = useForm();
  console.log(defaultValues);
  return (
    <div>
      <h3>Want to display all values here like below</h3>
      <h4>First name : ddd</h4>

      <br />
      <p>So that use can check for any Wrong info</p>
    </div>
  );
}

export default Form3;
