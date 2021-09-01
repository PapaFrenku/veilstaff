import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styled, connect } from "frontity";
import { Link } from "react-scroll";
import config from "../config";
import { ReactSVG } from "react-svg";
import Arrow from "../assets/images/next.svg";
import FrontityLink from "@frontity/components/link";

const SubMenu = styled(motion.div)`
  position: absolute;
  top: 30px;
  padding: 15px;
  background-color: #f8f8f8;
  border-radius: 6px;

  transform-origin: 50% -30px;
  padding-right: 30px;
`;

const SubMenuBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: 0 0;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const SubMenuItem = styled.span`
  transition: 0.1s;
  cursor: pointer;
  display: inline-block;
  margin: 10px;
  font-size: 16px;
  position: relative;
  color: #646464;
  & a {
    font-size: inherit;
    color: inherit;
  }

  &:hover {
    color: ${config.collors.primary};
  }
`;

const getBefore = () => {
  return `
    & > a:before {
        content: "";
        position: absolute;
        bottom: -5px;
        height: 4px; 
        width: 87%;
        border-bottom: 2px solid ${config.collors.primary};
    }
  `;
};

const Menuitem = styled(motion.div)`
  width: fit-content;
  perspective: 2000px;
  font-size: 16px;
  /* color: ${(props: any) => props.isActive && config.collors.primary}; */
  /* border-bottom: ${(props: any) =>
    `2px solid ${props.isActive && config.collors.primary}`}; */
  margin-left: 20px;
  margin-right: 20px;
  color: rgb(0, 0, 0);  
  & > a {
    display: flex;
    font-size: inherit;
    color: inherit;
    position: relative;
    width: fit-content;
  }

  ${(props: any) => (props.isActive ? getBefore() : "")}
`;

const ArrowWrapper = styled(motion.span)`
  margin-left: 10px;
  & svg {
    opacity: ${(p: any) => p.isHome ? 1 : 0};
    width: 10px;
    height: 10px;
  }
`;

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.2,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.2,
      delay: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const arrowAnimate = {
  enter: {
    transition: {
      duration: 0.3,
      ease: [0.04, 0.62, 0.23, 0.98],
    },
    rotate: -90,
  },
  exit: {
    transition: {
      duration: 0.3,
      ease: [0.04, 0.62, 0.23, 0.98],
      delay: 0.3,
    },
    rotate: 90,
  },
};

interface Props {
  items: {
    title: string;
    link: string;
  }[];
  title: string;
  link: string;
  itemOnClick: (s: string) => void
}

const DropdownMenu: React.FC<
  Props & { state: any; actions: any; libraries: any }
> = ({ items, title, link, state }) => {
  const [isHover, toggleHover] = useState(false);

  useEffect(() => {
    toggleHover(false)
  }, [state.router.link])

  const data = state.source.get(state.router.link);
  
  const isHome = state.router.link === '/';

  return (
    <Menuitem
      onHoverStart={() => toggleHover(true)}
      onHoverEnd={() => toggleHover(false)}
      isActive={data.isHome}
    >
      <FrontityLink link={'/'}>
        {title}
        {<ArrowWrapper
          isHome={isHome}
          animate={isHover ? "enter" : "exit"}
          initial={false}
          variants={arrowAnimate}
        >
          <ReactSVG width="10" src={Arrow} />
        </ArrowWrapper>}
      </FrontityLink>
      {isHome && <SubMenu
        initial="exit"
        animate={isHover ? "enter" : "exit"}
        variants={subMenuAnimate}
      >
        <SubMenuBackground />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((i) => (
            <SubMenuItem>
              <Link
                key={i.link}
                activeClass="activeCategoryLink"
                className={i.link}
                style={{ display: "inline-block" }}
                to={i.link.toString()}
                href={i.link.toString()}
                spy={true}
                smooth={true}
                duration={200}
                offset={-50}
              >
                {i.title}
              </Link>
            </SubMenuItem>
          ))}
        </div>
      </SubMenu>}
    </Menuitem>
  );
};

export default connect(DropdownMenu);
