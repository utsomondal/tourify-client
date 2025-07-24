import footerNavItems from "../Constants/FooterNavItems";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <footer className="bg-transparent text-lm-text-primary dark:text-dm-text-primary p-10 border-t border-t-lm-border dark:border-t-dm-border">
      <div className="flex flex-col md:flex-col lg:flex-row flex-wrap gap-y-12 lg:gap-y-0 lg:gap-x-20 justify-between items-start">
        {/* Newsletter Section */}
        <div className="w-full lg:max-w-sm">
          <h6 className="footer-title mb-2">Connect With Us</h6>
          <div className="flex flex-wrap gap-4">
            {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
              (platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary"
                >
                  {platform}
                </a>
              )
            )}
          </div>
          <form className="mt-5">
            <NewsLetter />
          </form>
        </div>

        {/* Navigation Sections */}
        <div className="w-full lg:flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {footerNavItems.map((section) => (
            <nav key={section.title}>
              <h6 className="footer-title mb-2">{section.title}</h6>
              {section.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block link link-hover text-lm-text-secondary dark:text-dm-text-secondary hover:text-lm-primary dark:hover:text-dm-primary text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
