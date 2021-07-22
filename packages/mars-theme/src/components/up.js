import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useVerticalScroll } from "../hooks/useVerticalScroll";
import { connect, styled } from "frontity";
import config from "../config";
import { ReactSVG } from "react-svg";
import up from "../assets/images/up.svg";

const ButtonIcon = styled.button`
  width: 40px;
  height: 40px;

  cursor: pointer;

  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
  background-color: var(--primary);

  &:hover {
    background-color: ${config.collors.primary};
  }

  & svg {
    fill: ${config.collors.primary};
    stroke: ${config.collors.primary};
  }
`;

export const Up = () => {
  const controls = useAnimation();
  const y = useVerticalScroll();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="upButton"
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon onClick={scrollToTop}>
        <ReactSVG src={up} />
      </ButtonIcon>
    </motion.div>
  );
};
