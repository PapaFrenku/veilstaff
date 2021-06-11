import { connect, styled } from "frontity";
import config from "../config";
import Logo from "../assets/images/logo.png";
import { Link } from "react-scroll";
import Button from "./styles/button";
import CompanyNumber from "./styles/CompanyNumber";
import PhoneCall from "../assets/images/phone-call.svg";
import { ReactSVG } from "react-svg";

const LogoContainer = styled.div`
  width: 140px;
  height: fit-content;
`;

const NavContainer = styled.nav`
  max-width: 1290px;
  margin: 0 auto;
  padding-left: 35px;
  padding-right: 35px;
  display: flex;
  align-items: center;
  height: 75px;
  transition: 0.2s;

  & ul {
    align-items: center;
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    white-space: nowrap;
    list-style-type: none;
    padding-left: 20px;
    flex-wrap: nowrap;
    height: 70px;
    justify-items: center;
    padding: 0;
    margin: 0;
    padding-left: 95px;
  }

  & li {
    transition: 0.1s;
    cursor: pointer;
    &:hover {
      color: ${config.collors.primary};
    }
  }
`;

const Container = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
`;

const categories = [
  {
    id: "about-programm",
    title: "О программе",
  },
  {
    id: "features",
    title: "Возможности",
  },
  {
    id: "modules",
    title: "Модули",
  },
  {
    id: "interface",
    title: "Интерфейс",
  },
  {
    id: "getting-started",
    title: "Начать работу",
  },
  {
    id: "calculator",
    title: "Калькулятор",
  },
];

const Footer = () => {
  return (
    <Container>
      <NavContainer>
        <LogoContainer>
          <img src={Logo} alt="Логотип"></img>
        </LogoContainer>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              style={{
                display: "inline-block",
                margin: "15px",
              }}
            >
              <Link
                className={category.id}
                to={category.id.toString()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                // onSetActive={() => this.scrollToCategory(category.id)}
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
        <CompanyNumber href="tel:+78123197345" style={{marginLeft: '20px'}}>
          <ReactSVG src={PhoneCall} />
          <span>8 (812) 319-73-45</span>
        </CompanyNumber>
        {/* <Button
          color={"#fff"}
          brColor={config.collors.secondary}
          bgColor={config.collors.secondary}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          type="button"
          style={{
            padding: "10px 15px",
            height: "40px",
            borderRadius: "11px",
            marginLeft: "20px",
          }}
        >
          <span>Обратный звонок</span>
        </Button> */}
      </NavContainer>
    </Container>
  );
};

export default connect(Footer);
