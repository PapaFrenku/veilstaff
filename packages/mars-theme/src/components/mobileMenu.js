import { styled } from "frontity";
import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import { categories } from "./header";
import {ReactSVG} from 'react-svg'
import CompanyNumber from "./styles/CompanyNumber";
import Button from "./styles/button";
import PhoneCall from "../assets/images/phone-call.svg";
import config from '../config'

const LinksWrapper = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: flex-start;
`;

class MobileMenu extends Component {
  state = {
    isOpen: false,
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

  render() {
    return (
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
          <CompanyNumber href="tel:+78123197345" style={{marginTop: '20px'}}>
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
    );
  }
}

export default MobileMenu;
