import SocialList from '../shared/social-list';

const Footer = () => {
  return (
    <footer className="p-4 md:p-6 container">
      <h3 className="text-center md:text-left font-bold text-2xl mb-2">
        Destiny Saturday
      </h3>
      <div className="flex md:flex-row flex-col justify-between items-center">
        <span className="mb-2 md:mb-0 text-center md:text-left">
          © 2024 ThePrimeJnr. All rights reserved
        </span>
        <SocialList showNames={false} />
      </div>
    </footer>
  );
};

export default Footer;
