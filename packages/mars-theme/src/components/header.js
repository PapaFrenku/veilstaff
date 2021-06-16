import React, { Component } from "react";
import { Link } from "react-scroll";
import { window } from "global";
import { styled } from "frontity";
import Logo from "../assets/images/logo.png";
import { Sticky, StickyScrollUp } from "react-stickup";
import config from "../config";
import Button from "./styles/button";
import CompanyNumber from './styles/CompanyNumber'

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

const HeaderContainer = styled.header``;

const NavContainer = styled.nav`
  border-radius: 40px;
  background: #fff;
  max-width: 1290px;
  margin: 0 auto;
  padding-left: 35px;
  padding-right: 35px;
  margin-top: 2.5em;
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
    console.log(window);
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
                <img src={Logo} alt="Логотип"></img>
              </LogoContainer>
              <ul>
                {categories.map((category) => (
                  <li
                    key={category.id}
                    ref={this[category.id]}
                  >
                    <Link
                      activeClass="activeCategoryLink"
                      className={category.id}
                      to={category.id.toString()}
                      spy={true}
                      smooth={true}
                      duration={200}
                      offset={-50}
                      onSetActive={() => this.scrollToCategory(category.id)}
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <CompanyNumber href="tel:+78123197345" style={{marginLeft: "auto"}}>
                8 (812) 319-73-45
              </CompanyNumber>
              <Button
                color={"#fff"}
                brColor={config.collors.secondary}
                bgColor={config.collors.secondary}
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
                }}
                type="button"
                style={{padding: "10px 15px", height: '40px', borderRadius: "11px", marginLeft: "20px"}}
              >
                <span>
                  Обратный звонок
                </span>
              </Button>
            </NavContainer>
          </div>
        </HeaderContainer>
      </Sticky>
    );
  }
}

{
  /* <div style={{ marginTop: "30px" }}>
{categories.map((category) => (
  <Element
    name={category.id.toString()}
    className={category.id}
    key={"display" + category.id}
  >
    <div style={{ height: "50vh" }}>
      <h2>{category.title}</h2>
    </div>
  </Element>
))}
</div> */
}
