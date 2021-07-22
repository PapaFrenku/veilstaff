import { styled } from "frontity";
import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import { categories } from "./header";
import { ReactSVG } from "react-svg";
import CompanyNumber from "./styles/CompanyNumber";
import Button from "./styles/button";
import PhoneCall from "../assets/images/phone-call.svg";
import config from "../config";
import { Sticky, StickyScrollUp } from "react-stickup";
import { window } from "global";
import Logo from "../assets/images/logo.png";

const LinksWrapper = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: flex-start;
`;

const LogoContainer = styled.div`
  width: 140px;
  height: fit-content;
  margin-left: 60px;
  @media (max-width: 1070px) {
    width: 110px;
  }
  @media (max-width: 500px) {
    margin-left: 20px;
  }
  @media (max-width: 450px) {
    margin-left: 0px;
  }
  @media (max-width: 425px) {
    margin-left: auto
  }
`;

const MobileMenuWrapper = styled.header`
  height: 60px;
  background: #fff;
  border-radius: 40px;
  padding: 12px;
  padding-left: 20px;
  padding-right: 30px;
  position: relative;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  position: fixed;
  width: calc(100% - 30px);
  z-index: 1000;
  top: 0;
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const CompanyNumberWrapper = styled.div`
  width: 170px;
  min-width: 170px;
  overflow: hidden;
  margin-left: auto;
  padding-top: 6px;

  @media (max-width: 425px) {
    margin-left: 70px;
    & a span {
      font-size: 16px;
    }
  }
`;

class MobileMenu extends Component {
  state = {
    isOpen: false,
    offset: 0,
  };
  constructor(props) {
    super(props);
    categories.forEach((category) => {
      this[category.id] = React.createRef();
    });
  }

  scrollToCategory(id) {
    this[id].current?.scrollIntoView({ inline: "center" });
  }

  showSettings = (ev) => {
    ev.preventDefault();
  };

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
      <MobileMenuWrapper
        className={`${this.state.offset != 0 ? "mobileHeaderWithShadow" : ""}`}
      >
        <Menu
          isOpen={this.state.isOpen}
          onOpen={() => {
            this.setState({ isOpen: true });
          }}
          onClose={() => {
            this.setState({ isOpen: false });
          }}
        >
          <LinksWrapper>
            {categories.map((category) => (
              <Link
                key={category.id}
                activeClass="activeCategoryLink"
                className={category.id}
                style={{ display: "inline-block" }}
                to={category.id.toString()}
                spy={true}
                smooth={true}
                duration={200}
                offset={-50}
                onSetActive={() => this.scrollToCategory(category.id)}
                onClick={() => {
                  this.setState({ isOpen: false });
                }}
              >
                {category.title}
              </Link>
            ))}
            <CompanyNumber
              href="tel:+78123197345"
              style={{ marginTop: "20px" }}
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
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
                this.setState({ isOpen: false });
              }}
              type="button"
              style={{
                padding: "10px 15px",
                height: "40px",
                borderRadius: "11px",
              }}
            >
              <span>Обратный звонок</span>
            </Button>
          </LinksWrapper>
        </Menu>
        <CompanyNumberWrapper>
          <CompanyNumber href="tel:+78123197345">
            <ReactSVG src={PhoneCall} />
            <span className="telNumber">8 (812) 319-73-45</span>
          </CompanyNumber>
        </CompanyNumberWrapper>
        <LogoContainer>
          <img src={Logo} alt="Логотип"></img>
        </LogoContainer>
      </MobileMenuWrapper>
    );
  }
}

export default MobileMenu;
