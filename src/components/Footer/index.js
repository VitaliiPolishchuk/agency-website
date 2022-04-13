import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import Gmail from "../../assets/envelope-open-solid.svg";
import styled from "styled-components";

const Container = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;

    div {
      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`;

const LeftText = styled.div``;

const RightText = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 1.5rem;
    filter: invert(100%);
    margin-left: 1rem;
    transition: all 0.2s ease-in-out;
  }

  a {
    &:hover {
      img {
        transform: scale(1.5);
        filter: invert(50%) sepia(100%) saturate(300%) hue-rotate(216deg)
          brightness(100%) contrast(97%);
      }
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <LeftText>
        &copy; 2022 Implemented by{" "}
        <a href="https://portfolio-vitalii-polishchuk.herokuapp.com/">
          Vitalii Polishchuk
        </a>
      </LeftText>
      <RightText>
        Reach out to me via
        <a href="http://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="http://instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="mailto:vitalii0polishchuk@gmai.com">
          <img src={Gmail} alt="Gmail" />
        </a>
      </RightText>
    </Container>
  );
};

export default Footer;
