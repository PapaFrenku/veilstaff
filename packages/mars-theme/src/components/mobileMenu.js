import { styled } from "frontity";
import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import { categories } from "./header";

const LinksWrapper = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: flex-start;
`

class MobileMenu extends Component {
  state = {
    isOpen: false
  }
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
          this.setState({isOpen: true})
        }}
        onClose={() => {
          this.setState({isOpen: false})
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
                this.setState({isOpen: false})
              }}
            >
              {category.title}
            </Link>
          ))}
        </LinksWrapper>
      </Menu>
    );
  }
}

export default MobileMenu;
