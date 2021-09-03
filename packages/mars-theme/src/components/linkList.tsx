import React from "react";
import { Component } from "react";
import { Sticky } from "react-stickup";
import DropdownMenu from "./dropdownMenu";
import FrontityLink from "@frontity/components/link";

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
    title: "Библиотека",
  },
  {
    id: "exams",
    title: "Тестирование",
  },
  {
    id: "about-360",
    title: "Опросы 360",
  },
];

export default class LinkList extends Component<{ url: string }> {
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
        <ul>
          <DropdownMenu
            link={"/"}
            title="Главная страница"
            items={subCategories}
          />
          {categories.map((category) => (
            <li key={category.id}>
              <FrontityLink
                link={`/${category.id}`}
                className={
                  this.props.url === `/${category.id}/`
                    ? "activeCategoryLink"
                    : ""
                }
              >
                {category.title}
              </FrontityLink>
            </li>
          ))}
        </ul>
      </Sticky>
    );
  }
}
