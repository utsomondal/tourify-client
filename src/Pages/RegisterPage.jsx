import { useState } from "react";
import { Link } from "react-router";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RegisterPage = () => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photoURL = form.photoURL.value.trim();
    const password = form.password.value;

    // Password validation
    const isValidPassword =
      /[A-Z]/.test(password) && /[a-z]/.test(password) && password.length >= 6;

    if (!isValidPassword) {
      setError(
        "Password must be at least 6 characters, contain an uppercase and a lowercase letter."
      );
      return;
    }

    setError("");

    // Form data object
    const userData = { name, email, photoURL, password };
    console.log("Registering User:", userData);
    // TODO: Call your registration API here
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-transparent justify-center px-5 py-7 sm:px-10 sm:py-14">
      {/* Left Side - Text About Tourify */}
      <div className="hidden lg:flex flex-col justify-center pr-10 w-full">
        <h1 className="text-4xl font-extrabold text-lm-text-primary dark:text-dm-text-primary mb-6 leading-tight">
          Discover the World with{" "}
          <span className="text-lm-primary dark:text-dm-primary">Tourify</span>
        </h1>
        <p className="text-lm-text-secondary dark:text-dm-text-secondary text-base leading-tight max-w-prose">
          Whether you're chasing sunsets on hidden beaches or exploring buzzing
          city streets, <strong>Tourify</strong> helps you travel smarter,
          deeper, and with purpose.
          <br />
          <br />
          Plan your next trip with curated guides, local tips, and personalized
          recommendations — all crafted to help you experience more than just
          the destination.
          <br />
          <br />
          Join a growing community of explorers who believe that every journey
          should be unforgettable. With Tourify, you're not just booking trips —
          you're creating stories.
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-row justify-end md:w-full">
        <div className="w-full flex-1 bg-lm-surface dark:bg-dm-surface p-4 rounded-xl shadow-md border border-lm-border dark:border-dm-border">
          <h2 className="text-3xl font-semibold mb-6 text-lm-text-primary dark:text-dm-text-primary">
            Register Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-lm-text-secondary dark:text-dm-text-secondary"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent border-lm-border dark:border-dm-border text-lm-text-primary dark:text-dm-text-primary focus:outline-none focus:ring-2 focus:ring-lm-primary dark:focus:ring-dm-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-lm-text-secondary dark:text-dm-text-secondary"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                required
                className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent border-lm-border dark:border-dm-border text-lm-text-primary dark:text-dm-text-primary focus:outline-none focus:ring-2 focus:ring-lm-primary dark:focus:ring-dm-primary"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-lm-text-secondary dark:text-dm-text-secondary"
              >
                Photo URL
              </label>
              <input
                id="photoURL"
                name="photoURL"
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent border-lm-border dark:border-dm-border text-lm-text-primary dark:text-dm-text-primary focus:outline-none focus:ring-2 focus:ring-lm-primary dark:focus:ring-dm-primary"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-lm-text-secondary dark:text-dm-text-secondary"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent border-lm-border dark:border-dm-border text-lm-text-primary dark:text-dm-text-primary focus:outline-none focus:ring-2 focus:ring-lm-primary dark:focus:ring-dm-primary"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-lm-primary dark:bg-dm-primary hover:bg-lm-primary-hover dark:hover:bg-dm-primary-hover text-white font-semibold py-2 px-4 rounded-md transition-all duration-200 cursor-pointer"
            >
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="divider py-5">or sign up with</div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <button className="social-login-btn">
              <FaGoogle /> Google
            </button>
            <button className="social-login-btn">
              <FaGithub /> GitHub
            </button>
          </div>

          {/* Login Link */}
          <p className="mt-6 text-sm text-center text-lm-text-secondary dark:text-dm-text-secondary">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-lm-primary hover:underline dark:text-dm-primary"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
