import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../Utils/useAuth";

const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const { loginUser, loading, setLoading } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    loginUser(email, password)
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
  return (
    <div className="flex flex-col md:flex-row items-center bg-transparent justify-center px-5 py-7 sm:px-10 sm:py-14">
      {/* Left Side - Text About Tourify */}
      <div className="hidden lg:flex flex-col justify-center w-full pr-10">
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

      {/* Tablet Only - Text About Tourify (Concise Version) */}
      <div className="hidden md:flex lg:hidden flex-col w-full pr-4">
        <h1 className="text-3xl font-bold text-lm-text-primary dark:text-dm-text-primary mb-4">
          Discover the World with{" "}
          <span className="text-lm-primary dark:text-dm-primary">Tourify</span>
        </h1>
        <p className="text-lm-text-secondary dark:text-dm-text-secondary text-base leading-relaxed">
          Explore smarter with curated guides and hidden gems. Tourify helps you
          plan meaningful journeys and connect with a global community of
          travelers.
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-row justify-end md:w-full">
        <div className="max-w-lg flex-1 bg-lm-surface dark:bg-dm-surface p-4 rounded-xl shadow-md border border-lm-border dark:border-dm-border">
          <h2 className="text-3xl font-semibold mb-6 text-lm-text-primary dark:text-dm-text-primary">
            Login to your account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-lm-text-secondary dark:text-dm-text-secondary">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="example@email.com"
                className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent border-lm-border dark:border-dm-border text-lm-text-primary dark:text-dm-text-primary focus:outline-none focus:ring-2 focus:ring-lm-primary dark:focus:ring-dm-primary"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-lm-text-secondary dark:text-dm-text-secondary">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent border-lm-border dark:border-dm-border text-lm-text-primary dark:text-dm-text-primary focus:outline-none focus:ring-2 focus:ring-lm-primary dark:focus:ring-dm-primary"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-lm-primary dark:bg-dm-primary hover:bg-lm-primary-hover dark:hover:bg-dm-primary-hover text-white font-semibold py-2 px-4 rounded-md transition-all duration-200 cursor-pointer"
            >
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* OR divider */}
          <div className="divider py-5">or login with</div>
          <div className="flex gap-4">
            <button className="social-login-btn">
              <FaGoogle /> Google
            </button>
            <button className="social-login-btn">
              <FaGithub /> GitHub
            </button>
          </div>

          {/* Register link */}
          <p className="mt-6 text-sm text-center text-lm-text-secondary dark:text-dm-text-secondary">
            Not a member?{" "}
            <Link
              to="/register"
              className="text-lm-primary hover:underline dark:text-dm-primary"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
