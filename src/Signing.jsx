import React from "react";
import { useForm } from "react-hook-form";
import "./SignupForm.css"; // Import the external CSS

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add your submission logic here
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Create Your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        {/* Username */}
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          {...register("username", { required: "Username is required" })}
          className={`form-input ${errors.username ? "error" : ""}`}
        />
        {errors.username && (
          <p className="error-text">{errors.username.message}</p>
        )}

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: "Password is required" })}
          className={`form-input ${errors.password ? "error" : ""}`}
        />
        {errors.password && (
          <p className="error-text">{errors.password.message}</p>
        )}

        {/* Gender */}
        <label>Gender</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="male"
              {...register("gender", { required: "Gender is required" })}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              {...register("gender", { required: "Gender is required" })}
            />{" "}
            Female
          </label>
        </div>
        {errors.gender && (
          <p className="error-text">{errors.gender.message}</p>
        )}

        {/* Category */}
        <label>Category</label>
        <select
          {...register("category", { required: "Category is required" })}
          className={`form-input ${errors.category ? "error" : ""}`}
          defaultValue=""
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="veg">Veg</option>
          <option value="nonveg">Non-Veg</option>
        </select>
        {errors.category && (
          <p className="error-text">{errors.category.message}</p>
        )}

        {/* Submit */}
        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
