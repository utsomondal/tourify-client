import { Link } from "react-router";

const NotfoundPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="-z-40 relative">
        <h1 className="animate-scroll text-[18vw] font-black whitespace-nowrap opacity-20 leading-tight text-lm-primary dark:text-dm-primary">
          Not Found
        </h1>
        <h1 className="animate-scroll-reverse text-[18vw] font-black whitespace-nowrap opacity-20 leading-tight text-lm-primary dark:text-dm-primary">
          Not Found
        </h1>
      </div>
      <div className="z-40 border border-lm-border dark:border-dm-border rounded w-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent backdrop-blur-xl shadow-xl">
        <img
          src="https://i.postimg.cc/wBjLBkXL/404-error-lost-in-space-rafiki.png"
          alt="404"
          className="w-full h-full"
        />
        <h1 className="text-center -mt-10 pb-10 text-4xl font-bold">
          Sorry! We couldn't find it.
        </h1>
        <div className="flex justify-center pb-10">
          <button className="btn bg-lm-primary">
            <Link to="/">Go to HomePage</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotfoundPage;
