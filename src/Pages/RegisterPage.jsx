import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../Utils/useAuth";
import { GoogleAuthProvider } from "firebase/auth";

const RegisterPage = () => {
  const { registerUser, loading, setLoading, googleAuth, githubAuth } =
    useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    registerUser(email, password)
      .then(() => {
        navigate(location.state?.from?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        setLoading(false);
      });

    reset();
  };

  const handleGoogleAuth = () => {
    googleAuth()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
        setLoading(false);
      });
  };
  
  const handleGithubAuth = () => {
    githubAuth()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
        setLoading(false);
      });
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                {...register("fullname", { required: "Full Name is Required" })}
                type="text"
                placeholder="John Doe"
                required
                className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent border-lm-border dark:border-dm-border text-lm-text-primary dark:text-dm-text-primary focus:outline-none focus:ring-2 focus:ring-lm-primary dark:focus:ring-dm-primary"
              />
              {errors.fullname && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullname.message}
                </p>
              )}
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
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                required
                placeholder="example@email.com"
                className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent border-lm-border dark:border-dm-border text-lm-text-primary dark:text-dm-text-primary focus:outline-none focus:ring-2 focus:ring-lm-primary dark:focus:ring-dm-primary"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
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
                {...register("photoURL")}
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  validate: {
                    hasUpperCase: (value) =>
                      /[A-Z]/.test(value) || "Must include an uppercase letter",
                    hasNumber: (value) =>
                      /[0-9]/.test(value) || "Must include a number",
                    hasSpecialChar: (value) =>
                      /[^A-Za-z0-9]/.test(value) ||
                      "Must include a special character",
                  },
                })}
                type="password"
                placeholder="••••••••"
                required
                className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent border-lm-border dark:border-dm-border text-lm-text-primary dark:text-dm-text-primary focus:outline-none focus:ring-2 focus:ring-lm-primary dark:focus:ring-dm-primary"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-lm-primary dark:bg-dm-primary hover:bg-lm-primary-hover dark:hover:bg-dm-primary-hover text-white font-semibold py-2 px-4 rounded-md transition-all duration-200 cursor-pointer"
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Register"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="divider py-5">or sign up with</div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <button className="social-login-btn" onClick={handleGoogleAuth}>
              <FaGoogle /> Google
            </button>
            <button className="social-login-btn" onClick={handleGithubAuth}>
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
