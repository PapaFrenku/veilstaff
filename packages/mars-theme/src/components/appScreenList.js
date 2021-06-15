import { useRef, useState, useMemo, useEffect } from "react";
import { Element } from "react-scroll";
import { connect, styled } from "frontity";
import MackBookBg from "../assets/images/MacBook_Pro_16.png";
import Slider from "react-slick";
import ArrowIcon from "../assets/images/next.svg";
import { ReactSVG } from "react-svg";
import Screen1 from "../assets/images/screen1.png";
import config from "../config";
import AssessmentStages from "./assessmentStages";
import Advantages from "./advantages";

const UnderText = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #5c5c5c;
  text-align: center;
  margin: 0 auto;
  max-width: 550px;
  margin-top: 40px;
  height: 70px;
`;

const Container = styled.div`
  background: #fff;
  padding-top: 95px;
  padding-bottom: 50px;
`;

const SliderBg = styled.div`
  height: 350px;
  width: 591px;
  padding-bottom: 10px;
  background: url(${MackBookBg});
  /* padding: 20px; */
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 0 auto;
  display: flex;
  /* overflow: hidden; */
  align-items: center;
  justify-content: center;

  & > div {
    width: 485px;
    height: 320px;
  }
`;

const SlideWrapper = styled.div`
  position: relative;
  padding-left: 4px;
  overflow: hidden;
  & img {
    width: inherit;
    height: inherit;
    border-radius: 6px;
  }
`;

const LinksList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  top: 95px;
`;

const LinkWrapper = styled.li`
  color: ${(props) => (props.active ? "#fff" : config.collors.primary)};
  font-weight: 400;
  padding: 10px 20px 10px 20px;
  border-radius: 30px;
  transition: 0.2s;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? config.collors.primary : "transparent"};
  &::after {
    content: "";
    width: 100%;
    height: 2px;
    display: block;
    transition: 0.2s;
    border-top: 2px dashed ${config.collors.primary};
  }

  &:hover {
    color: ${config.collors.secondary};
    &::after {
      border-top: 2px dashed ${config.collors.secondary};
    }
  }
`;

const ArroWrapper = styled.div`
  width: 45px;
  height: 45px;
  background-color: #dfdfdf;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 25px);
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(props) => (props.isPrev ? "rotate(180deg)" : "")};
  &:hover {
    background-color: ${config.collors.primary};
    color: #fff;
  }

  & svg {
    width: 15px;
    height: 15px;
  }
`;

const AppScreenList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "http://91.201.41.228/index.php/wp-json/wp/v2/screens"
    );
    const arr = await res.json();
    if (Array.isArray(arr)) {
      setData(arr);
    }
  };

  const slides = useMemo(() => {
    return data.map((item) => ({
      title: item.screen_name,
      image: item.screen_image,
      index: item.screen_index,
      description: item.screen_description
    })).sort((a, b) => a.index - b.index)
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  const slick = useRef();
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArroWrapper style={{ right: "-100px" }} onClick={next}>
        <ReactSVG src={ArrowIcon} />
      </ArroWrapper>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArroWrapper isPrev={true} style={{ left: "-95px" }} onClick={prev}>
        <ReactSVG src={ArrowIcon} />
      </ArroWrapper>
    );
  };

  const next = () => {
    slick.current.slickNext();
    if (currentSlide + 1 === slides.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prev = () => {
    slick.current.slickPrev();
    if (currentSlide - 1 < 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const slickGoTo = (number) => {
    slick.current.slickGoTo(number);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Element name="interface" className="interface" key={"display" + "interface"}>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="container"
        >
          <LinksList>
            {slides.map((item, idx) => (
              <LinkWrapper
                active={idx === currentSlide}
                key={item.title}
                onClick={() => {
                  slickGoTo(idx);
                  setCurrentSlide(idx);
                }}
              >
                {item.title}
              </LinkWrapper>
            ))}
          </LinksList>
          <SliderBg>
            <Slider ref={slick} {...settings}>
              {slides.map((item) => (
                <SlideWrapper key={item.title}>
                  <img src={item.image.guid} alt={item.title}></img>
                </SlideWrapper>
              ))}
            </Slider>
          </SliderBg>
          <UnderText>
            {slides[currentSlide]?.description}
          </UnderText>
        </div>
      </Container>
      <AssessmentStages />
      <Advantages />
    </Element>
  );
};

export default connect(AppScreenList);
