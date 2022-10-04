import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function Form1({ register, errors, defaultValues }) {
  const [show_input, setshow_input] = useState(false);
  // const { register, handleSubmit, errors, triggerValidation } = useForm();

  const createInput = () => {
    setshow_input(true);
  };
  const auto_text = () => {
    setshow_input(false);
  };
  return (
    <div>
      <form autocomplete="on">
        <br />
        <div className="form-group">
          <label>User name</label>
          <input
            type="text"
            defaultValue={defaultValues && defaultValues.uname}
            name="uname"
            ref={register({ required: true })}
          />
          {errors.uname && <span>required</span>}
          <label>Email</label>
          <input
            type="email"
            defaultValue={defaultValues && defaultValues.email}
            name="email"
            ref={register({ required: true })}
          />
          {errors.email && <span>required</span>}
        </div>
        <div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <label className="form_label">Password</label>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="auto_pass"
                  id="Radios1"
                  value="auto_pass"
                  className="form-check-input"
                  defaultChecked={true}
                  onChange={auto_text}
                />
                Auto generated password
              </label>
            </div>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="auto_pass"
                  id="Radios2"
                  value="let_me"
                  className="form-check-input"
                  onChange={createInput}
                />
                Let me create the password
              </label>
            </div>
          </div>
          {show_input && (
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
              <label className="form_label">Password</label>
              <input
                type="password"
                defaultValue={defaultValues && defaultValues.password}
                name="password"
                className="form-control"
                ref={register({ required: true })}
              />
              {errors.password && (
                <span className="text-danger">Password is reguired</span>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form1;
