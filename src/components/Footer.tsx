
interface FooterProps {
  theme: string;
}

const Footer = ({ theme }: FooterProps) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          border: 'border-white/10',
          text: 'text-gray-400',
          link: 'text-blue-300 hover:text-blue-200'
        };
      case 'dark':
        return {
          border: 'border-gray-600/10',
          text: 'text-gray-500',
          link: 'text-gray-300 hover:text-gray-200'
        };
      case 'light':
        return {
          border: 'border-gray-300/30',
          text: 'text-gray-600',
          link: 'text-gray-700 hover:text-gray-800'
        };
      default:
        return {
          border: 'border-white/10',
          text: 'text-gray-400',
          link: 'text-blue-300 hover:text-blue-200'
        };
    }
  };

  const classes = getThemeClasses();

  return (
    <footer className="w-full py-8 mt-auto">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`border-t ${classes.border} pt-6 space-y-4`}>
          <div>
            <a 
              href="https://forms.gle/RBSzPSZf5NMtDFye6" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${classes.link} text-sm font-medium hover:underline transition-colors duration-200`}
            >
              Enjoying our site? Give us some feedback!
            </a>
          </div>
          <p className={`${classes.text} text-sm`}>
            © 2025 UB Networks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
