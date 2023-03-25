import CopyRight from '../CopyRight/CopyRight';
import { FooterWrapper } from './Footer.style';

const Footer = () => {
  const authors = [
    { name: 'Jakub Jankowski', url: 'https://github.com/TheMankel' },
  ];

  return (
    <FooterWrapper>
      <CopyRight authors={authors} />
    </FooterWrapper>
  );
};

export default Footer;
