const NewsLetter = () => {
  return (
    <>
      <p className="mb-2 text-xs text-lm-text-secondary dark:text-dm-text-secondary">
        Subscribe to our newsletter for travel tips & exclusive deals.
      </p>
      <div className="join w-full max-w-md">
        <input
          type="email"
          placeholder="Your email"
          className="join-item h-12 px-4 bg-lm-surface dark:bg-dm-surface border border-gray-300 dark:border-dm-border text-lm-text-primary dark:text-dm-text-primary focus:outline-none text-sm rounded-l w-full"
          required
          aria-label="Email address"
        />
        <button
          type="submit"
          className="join-item h-12 px-5 bg-lm-primary hover:bg-lm-primary-hover dark:bg-dm-primary dark:hover:bg-dm-primary-hover text-white font-semibold text-sm transition-all rounded-r cursor-pointer"
        >
          Subscribe
        </button>
      </div>
    </>
  );
};

export default NewsLetter;
