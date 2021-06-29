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
import Screen from "../assets/images/website.svg";
import Modal from "react-modal";
import Cancel from "../assets/images/cancel.svg";
import SearchIcon from "../assets/images/magnifier.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000000",
  },
};

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
  @media (max-width: 500px) {
    margin-top: 0px;
  }
`;

const HeadingIcon = styled.div`
  color: #5c5c5c;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  & svg {
    width: 50px;
    height: 50px;
  }
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  display: block;
  margin-left: auto;
  cursor: pointer;
  right: 20px;
  padding-top: 10px;
  
  padding-bottom: 10px;
  & > div {
    width: 20px;
    height: 20px;
    margin-left: auto;
    margin-right: 10px;
   
  }
  & svg {
    width: 20px;
    height: 20px;
  }
`;

const Container = styled.div`
  background: #fff;
  padding-top: 65px;
  padding-bottom: 67px;
`;

const SliderBg = styled.div`
  height: 350px;
  max-width: 591px;
  width: 100%;
  padding-bottom: 10px;
  background: url(${MackBookBg});
  background-position: center;
  /* padding: 20px; */
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 0 auto;
  display: flex;
  /* overflow: hidden; */
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: zoom-in;
  & > div {
    /* max-width: 485px; */
    width: calc(100% - 100px);
    /* height: 320px; */
  }

  &::before {
    content: "";
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${config.collors.primary};
    background-image: url(${SearchIcon});
    position: absolute;
    top: -20px;
    right: 20px;
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1000;
    cursor: zoom-in;
  }

  @media (max-width: 650px) {
    & > div {
      width: 80%;
    }

    &::before {
      top: 18px;
      right: 18px;
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 500px) {
    height: 270px;
  }
`;

const SlideWrapper = styled.div`
  position: relative;
  padding-left: 4px;
  overflow: hidden;
  position: relative;
  cursor: zoom-in;
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
  flex-wrap: wrap;
  margin-top: 50px;
  @media (max-width: 690px) {
    margin-bottom: 0px;
    margin-top: 30px;
  }
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
  left: ${(props) => (props.isPrev ? "-95px" : "unset")};
  right: ${(props) => (props.isPrev ? "unset" : "-100px")};
  cursor: pointer;
  &:hover {
    background-color: ${config.collors.primary};
    color: #fff;
  }

  @media (max-width: 740px) {
    left: ${(props) => (props.isPrev ? "-20px" : "unset")};
    right: ${(props) => (props.isPrev ? "unset" : "-20px")};
  }

  & svg {
    width: 15px;
    height: 15px;
  }
`;

const AppScreenList = ({ state, actions, libraries }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const [data, setData] = useState([]);

  const getData = async () => {
    const arr = [];
    for (let key in state.source.post) {
      if (state.source.post[key].acf.type === "screen") {
        arr.push(state.source.post[key]);
      }
    }

    setData(arr);
  };

  const slides = useMemo(() => {
    return data
      .map((item) => ({
        title: item.acf.title,
        image: item.acf.image,
        index: item.acf.index,
        description: item.acf.description,
      }))
      .sort((a, b) => a.index - b.index);
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  const slick = useRef();
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArroWrapper onClick={next}>
        <ReactSVG src={ArrowIcon} />
      </ArroWrapper>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArroWrapper isPrev={true} onClick={prev}>
        <ReactSVG src={ArrowIcon} />
      </ArroWrapper>
    );
  };

  const next = (e) => {
    e.stopPropagation()
    slick.current.slickNext();
    if (currentSlide + 1 === slides.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prev = (e) => {
    e.stopPropagation()
    slick.current.slickPrev();
    if (currentSlide === 0) {
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
    <Element
      name="interface"
      className="interface"
      key={"display" + "interface"}
    >
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="container"
        >
          <HeadingIcon>
            <ReactSVG src={Screen} />
          </HeadingIcon>
          <h2
            style={{ textAlign: "center", marginTop: "20px" }}
            className="blockTitle"
          >
            Экраны приложения
          </h2>
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
          <SliderBg
            onClick={(e) => {
              const slide = slides[currentSlide].image.url
              setFullScreenImage(slide);
            }}
          >
            <Slider ref={slick} {...settings}>
              {slides.map((item) => (
                <SlideWrapper key={item.title}>
                  <img src={item.image.url} alt={item.title}></img>
                </SlideWrapper>
              ))}
            </Slider>
          </SliderBg>
          <UnderText>{slides[currentSlide]?.description}</UnderText>
        </div>
      </Container>
      <AssessmentStages />
      <Advantages />

      <Modal
        isOpen={fullScreenImage}
        onRequestClose={() => {
          setFullScreenImage(null);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CloseBtn
          onClick={(e) => {
            setFullScreenImage(null);
          }}
        >
          <div><ReactSVG src={Cancel} /></div>
          <img src={fullScreenImage} onClick={() => {}}></img>
        </CloseBtn>
      </Modal>
    </Element>
  );
};

export default connect(AppScreenList);
