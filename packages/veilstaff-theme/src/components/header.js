import React, { Component } from "react";
import { Link } from "react-scroll";

import { styled } from "frontity";
import Logo from '../assets/images/logo.png'
import config from "../config";

["О программе", "/"],
  ["Возможности", "https://community.frontity.org"],
  ["Модули", "https://docs.frontity.org"],
  ["Интерфейс", "https://github.com/frontity/frontity"],
  ["Начать работу", "https://twitter.com/frontity"],
  ["Калькулятор", "https://twitter.com/frontity"];

const categories = [
  {
    id: "about-us",
    title: "О программе",
  },
  {
    id: "featues",
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

const LogoContainer = styled.div`
  width: 140px;
  height: fit-content;
`

export default class Header extends Component {
  constructor(props) {
    super(props);
    categories.forEach((category) => {
      this[category.id] = React.createRef();
    });
  }

  scrollToCategory(id) {
    this[id].current.scrollIntoView({ inline: "center" });
  }

  render() {
    return (
      <HeaderContainer className="sticky">
        <div>
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
                    margin: "20px",
                  }}
                  ref={this[category.id]}
                >
                  <Link
                    activeClass="activeCategoryLink"
                    className={category.id}
                    to={category.id.toString()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onSetActive={() => this.scrollToCategory(category.id)}
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </NavContainer>
        </div>
      </HeaderContainer>
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
