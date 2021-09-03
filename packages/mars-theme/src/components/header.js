import React, { Component } from "react";
import { window } from "global";
import { styled } from "frontity";
import { Link } from "react-scroll";
import FrontityLink from "@frontity/components/link";
import Logo from "../assets/images/logo.png";
import { Sticky, StickyScrollUp } from "react-stickup";
import config from "../config";
import Button from "./styles/button";
import CompanyNumber from "./styles/CompanyNumber";
import { ReactSVG } from "react-svg";
import PhoneCall from "../assets/images/phone-call.svg";
import DropdownMenu from "./dropdownMenu";
import LinkList from "./linkList";
// import Link from "@frontity/components/link";

export const subCategories = [
  {
    id: "about-programm",
    link: "about-programm",
    title: "О программе",
  },
  {
    id: "features",
    link: "features",
    title: "Возможности",
  },
  {
    id: "modules",
    link: "modules",
    title: "Модули",
  },
  {
    id: "interface",
    link: "interface",
    title: "Интерфейс",
  },
  {
    id: "getting-started",
    link: "getting-started",
    title: "Начать работу",
  },
  {
    id: "calculator",
    link: "calculator",
    title: "Калькулятор",
  },
];

export const categories = [
  {
    id: "library",
    title: "Библиотека"
  },
  {
    id: "exams",
    title: "Тестирование",
  },
  {
    id: 'about-360',
    title: "Опросы 360",
  }
]

const HeaderContainer = styled.header`
  padding-top: 2.5rem;
`;

const AdditionalButtons = styled.div`
  display: flex;
  margin-left: auto;
`;

const NavContainer = styled.nav`
  border-radius: 40px;
  background: #fff;
  max-width: 1290px;
  margin: 0 auto;
  padding-left: 35px;
  padding-right: 35px;
  /* margin-top: 2.5em; */
  display: flex;
  align-items: center;
  height: 75px;
  transition: 0.2s;

  & ul {
    align-items: center;
    display: flex;
    flex-direction: row;
    /* overflow-y: hidden; */
    white-space: nowrap;
    list-style-type: none;
    padding-left: 20px;
    flex-wrap: nowrap;
    height: 70px;
    justify-items: center;
    padding: 0;
    margin: 0;
    padding-left: 50px;
  }

  & li {
    transition: 0.1s;
    cursor: pointer;
    display: inline-block;
    margin: 15px;
    &:hover {
      color: ${config.collors.primary};
    }
  }

  & li a {
    font-size: 16px;
  }

  @media (max-width: 1310px) {
    & li a {
      font-size: 14px;
    }
  }
  @media (max-width: 1210px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const LogoContainer = styled.div`
  width: 140px;
  height: fit-content;
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    categories.forEach((category) => {
      this[category.id] = React.createRef();
    });
  }

  state = {
    offset: 0,
  };

  scrollToCategory(id) {
    this[id].current?.scrollIntoView({ inline: "center" });
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    if (window) {
      this.setState({ offset: window.pageYOffset });
    }
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = event.currentTarget.pageYOffset;
    this.setState({
      offset: scrollTop,
    });
  };


  render() {
    return (
      <Sticky style={{ zIndex: 100 }}>
        <HeaderContainer
          className={`${this.state.offset != 0 ? "headerWithShadow" : ""}`}
        >
          <div>
            <NavContainer>
              <LogoContainer>
                <Link link="/">
                  <img src={Logo} alt="Логотип"></img>
                </Link>
              </LogoContainer>
              <LinkList url={this.props.url} />
              
              <AdditionalButtons>
                <CompanyNumber
                  href="tel:+78123197345"
                  style={{ marginLeft: "auto" }}
                >
                  <ReactSVG src={PhoneCall} />
                  <span className="telNumber">8 (812) 319-73-45</span>
                </CompanyNumber>
                <Button
                  color={"#fff"}
                  brColor={config.collors.secondary}
                  bgColor={config.collors.secondary}
                  onClick={(e) => {
                    e.preventDefault();

                    const element = document.getElementById("feedbackForm");
                    window.scrollTo({
                      top:
                        document.body.scrollHeight -
                        (element.offsetHeight + 100),
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
                </Button>
              </AdditionalButtons>
            </NavContainer>
          </div>
        </HeaderContainer>
      </Sticky>
    );
  }
}
