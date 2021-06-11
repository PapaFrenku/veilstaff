import { styled } from "frontity";
import Arrow from "../../assets/images/next.svg";
import { ReactSVG } from "react-svg";
import config from "../../config";

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
`;

const ArrowInCircle = ({ color }) => (
  <Container color={color}>
    <ReactSVG src={Arrow} />
  </Container>
);

export default ArrowInCircle;
