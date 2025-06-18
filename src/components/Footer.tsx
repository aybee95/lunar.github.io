
interface FooterProps {
  theme: string;
}

const Footer = ({ theme }: FooterProps) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'cosmic':
        return {
          border: 'border-white/10',
          text: 'text-gray-400'
        };
      case 'dark':
        return {
          border: 'border-gray-600/10',
          text: 'text-gray-500'
        };
      case 'light':
        return {
          border: 'border-gray-300/30',
          text: 'text-gray-600'
        };
      default:
        return {
          border: 'border-white/10',
          text: 'text-gray-400'
        };
    }
  };

  const classes = getThemeClasses();

  return (
    <footer className="w-full py-8 mt-auto">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`border-t ${classes.border} pt-6`}>
          <p className={`${classes.text} text-sm`}>
            © 2025 UB Networks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
