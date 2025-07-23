import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-lm-background dark:bg-dm-background text-lm-text-primary dark:text-dm-text-primary p-10 border-t border-t-lm-border dark:border-t-dm-border">
        <aside className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm text-lm-text-secondary dark:text-dm-text-secondary">
            Tourify is your trusted travel companion, helping you discover
            hidden gems, plan personalized adventures, and connect with a global
            community of explorers.
          </p>
          <p className="mt-4 text-xs text-lm-text-secondary dark:text-dm-text-secondary">
            &copy; {new Date().getFullYear()} Tourify. All rights reserved.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title mb-2 text-lm-text-primary dark:text-dm-text-primary">
            Explore
          </h6>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Travel Guides
          </a>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Local Experiences
          </a>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Top Destinations
          </a>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Adventure Trips
          </a>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Travel Tips
          </a>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Community Stories
          </a>
        </nav>

        <nav>
          <h6 className="footer-title mb-2 text-lm-text-primary dark:text-dm-text-primary">
            Company
          </h6>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            About Us
          </a>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Contact
          </a>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Careers
          </a>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Blog
          </a>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Press
          </a>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Partners
          </a>
        </nav>

        <nav>
          <h6 className="footer-title mb-2 text-lm-text-primary dark:text-dm-text-primary">
            Legal
          </h6>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Terms of Use
          </a>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Cookie Policy
          </a>
          <a
            href="#"
            className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
          >
            Security
          </a>
        </nav>

        <nav>
          <h6 className="footer-title mb-2 text-lm-text-primary dark:text-dm-text-primary">
            Connect With Us
          </h6>
          <div className="flex space-x-4">
            {/* Replace # with your social links */}
            <a
              href="#"
              aria-label="Facebook"
              className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
            >
              Facebook
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
            >
              Twitter
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
            >
              Instagram
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-4 text-xs text-lm-text-secondary dark:text-dm-text-secondary">
            Subscribe to our newsletter for travel tips & exclusive deals.
          </p>
          <form className="mt-2 flex gap-2 w-full">
            <input
              type="email"
              placeholder="Your email"
              className="input focus:outline-none input-bordered input-md flex-1 bg-lm-surface dark:bg-dm-surface border-lm-border dark:border-dm-border text-lm-text-primary dark:text-dm-text-primary"
              required
            />
            <button
              type="submit"
              className="btn bg-lm-primary hover:bg-lm-primary-hover focus:ring-lm-primary-focus dark:bg-dm-primary dark:hover:bg-dm-primary-hover dark:focus:ring-dm-primary-focus btn-md text-white transition-all"
            >
              Subscribe
            </button>
          </form>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
