import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "./store";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    alert("User Registered Successfully");
    navigate("/signing");
  };

  return (
    <>
      <style>{`
        .signup-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f3f1f0;
          padding: 1rem;
        }

        .signup-box {
          background: #ffffff;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
          max-width: 450px;
          width: 100%;
          font-family: 'Segoe UI', sans-serif;
        }

        .signup-box h2 {
          text-align: center;
          color: #4f7893;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
        }

        .signup-box form {
          display: flex;
          flex-direction: column;
        }

        .signup-box input[type="text"],
        .signup-box input[type="password"],
        .signup-box input[type="mail"],
        .signup-box select {
          padding: 12px 14px;
          margin: 10px 0;
          border: 1px solid #a5b899;
          border-radius: 10px;
          font-size: 1rem;
          background-color: #fdfdfc;
          transition: 0.3s border;
        }

        .signup-box input:focus,
        .signup-box select:focus {
          outline: none;
          border-color: #4f7893;
          box-shadow: 0 0 0 3px rgba(84, 166, 183, 0.2);
        }

        .signup-box label {
          font-size: 0.95rem;
          margin: 10px 0 5px;
          color: #5f5f5f;
        }

        .signup-box input[type="radio"] {
          margin-right: 8px;
          margin-left: 16px;
        }

        .signup-box button {
          margin-top: 15px;
          padding: 14px;
          background-color: #4f7893;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .signup-box button:hover {
          background-color: #54a6b7;
        }
      `}</style>

      <div className="signup-container">
        <div className="signup-box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: true })}
            />
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <input
              type="mail"
              placeholder="abc@gmail.com"
              {...register("mail", { required: true })}
            />

            <label>Gender:</label>
            <label>
              <input type="radio" value="male" {...register("gender")} /> Male
              <input type="radio" value="female" {...register("gender")} /> Female
            </label>

            <label>Category:</label>
            <select {...register("category")}>
              <option value="veg">Veg</option>
              <option value="nonveg">Non-Veg</option>
              <option value="milk">Milk products</option>
              <option value="chocolates">Chocolates</option>
            </select>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
  