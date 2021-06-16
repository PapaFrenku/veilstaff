import { styled } from "frontity";
import Arrow from "../../assets/images/next.svg";
import { ReactSVG } from "react-svg";
import config from "../../config";
import { Link } from "react-scroll";

const Container = styled.div`
  color: ${(props) => props.color || config.collors.primary};
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 7px;
  & svg {
    width: 40px;
    height: 30px;
    transform: rotate(90deg);
  }
  cursor: pointer;
`;

const ArrowInCircle = ({ color, id }) => (
  <Container color={color}>
    <Link
      className={id}
      to={id}
      spy={true}
      smooth={true}
      duration={150}
      offset={-100}
    >
      <ReactSVG src={Arrow} />
    </Link>
  </Container>
);

export default ArrowInCircle;
