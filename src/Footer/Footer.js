import styled from "styled-components";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem;
  background: ${({ theme }) => theme.footerBg};
  color: ${({ theme }) => theme.text};
`;

const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  a {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;

    a {
      font-size: 1.2rem;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2025 GIF Studios. All rights reserved.</p>
      <SocialIcons>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaYoutube /></a>
        <a href="#"><FaTwitter /></a>
      </SocialIcons>
    </FooterContainer>
  );
}

export default Footer;
