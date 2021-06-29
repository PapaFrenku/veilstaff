import React, { useState, useEffect, useMemo } from "react";
import Slider from "./slider";
import { connect, styled } from "frontity";
import PreviewImage from "../assets/images/Layer_18.png";
import { Element } from "react-scroll";
import Features from "./features";
import ForWhom from "./forWhom";
import Button from "./styles/button";
import parse from "html-react-parser";
import Modal from "react-modal";
import { window, document } from "global";
import Cancel from "../assets/images/cancel.svg";
import { ReactSVG } from "react-svg";
import ym from "react-yandex-metrika";

{
  /* <PreviewContainer>
<div className="container">
  <Slider slides={slides}></Slider>
</div>
</PreviewContainer> */
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Container = styled.div`
  position: relative;
  margin-top: 4rem;
  margin-bottom: 4.2rem;
  @media (max-width: 930px) {
    margin-top: 5.2rem;
    margin-bottom: 1.8rem;
  }
`;

const SlideContent = styled.div`
  padding-left: 4.68em;
  @media (max-width: 1070px) {
    padding-left: 0;
  }
  @media (max-width: 930px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  padding-left: 65px;

  & img {
    width: fit-content;
  }
  @media (max-width: 1070px) {
    padding-left: 0;
  }
  @media (max-width: 930px) {
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }

  @media (max-width: 500px) {
    & img {
      width: 100%;
    }

    & .SlideButton {
      flex-direction: column;
    }
  }
`;

const SlideTitle = styled.h2`
  font-size: 2.25em;
  font-weight: 600;
  font-style: normal;
  line-height: 1em;
  margin: 0;
  margin-bottom: 40px;
  @media (max-width: 930px) {
    margin-bottom: 10px;
    margin-top: 20px;
    font-size: 1.8em;
  }

  & span {
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    line-height: inherit;
    display: block;
  }
`;

const SlideText = styled.div`
  font-weight: 300;
  line-height: 22px;
  margin: 0;
  margin-bottom: 30px;
  @media (max-width: 930px) {
    font-size: 14px;
    margin-bottom: 20px;
  }

  & * {
    font-size: inherit;
  }
`;

const SlideButton = styled.div`
  /* margin-top: 20px; */
  display: flex;
  /* justify-content: center; */
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    & button {
      width: 100%;
    }

    & button:first-of-type {
      margin-bottom: 20px;
    }
    & button {
      margin-left: 0 !important;
    }
  }
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  display: block;
  margin-left: auto;
  cursor: pointer;
  & svg {
    width: 12px;
    height: 12px;
  }
`;

const PreviewContainer = ({ state, actions, libraries }) => {
  const [getStartedmodalIsOpen, setGetStartedIsOpen] = useState(false);
  const [getDemomodalIsOpen, setGetDemoIsOpen] = useState(false);
  const [banners, setBanners] = useState([]);

  const getBanners = () => {
    const arr = [];
    for (let key in state.source.post) {
      if (state.source.post[key].acf.type === "banner") {
        arr.push(state.source.post[key]);
      }
    }

    setBanners(arr);
  };

  useEffect(async () => {
    getBanners();
  }, []);

  const slides = useMemo(() => {
    return banners.map((s, idx) => {
      const item = s.acf;
      return (
        <>
          <SlideContainer key={idx}>
            <img src={item.banner_image.url} />
            <SlideContent key={1}>
              <SlideTitle>{parse(item.banner_title)}</SlideTitle>
              <SlideText>{parse(item.banner_content)}</SlideText>
              <SlideButton>
                {item.button_get_demo && (
                  <button
                    style={{ width: "100%", maxWidth: "420px" }}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setGetDemoIsOpen(true);
                    //   ym('reachGoal', 'get-demo')
                    // }}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById("feedbackForm");
                      window.scrollTo({
                        top: document.body.scrollHeight - (element.offsetHeight + 100),
                        behavior: "smooth",
                      });
                    }}
                    id="get-demo"
                    className="primaryButton"
                  >
                    <span>Попробовать демо</span>
                  </button>
                )}
                {/* {item.button_get_started && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setGetStartedIsOpen(true);
                      ym('reachGoal', 'start')
                    }}
                    style={{ marginLeft: "20px" }}
                    className="transparentButton"
                    id="start"
                  >
                    <span>Начать работу</span>
                  </button>
                )} */}
              </SlideButton>
            </SlideContent>
          </SlideContainer>
        </>
      );
    });
  }, [banners]);

  return (
    <Element
      name="about-programm"
      className="about-programm"
      key={"display" + "about-programm"}
    >
      <Container
        style={banners.length === 0 ? { minHeight: "300px" } : {}}
        className="container"
      >
        <Slider slides={slides}></Slider>
      </Container>
      <Features />
      <ForWhom />
      {/* <Modal
        isOpen={getStartedmodalIsOpen}
        onRequestClose={() => {
          setGetStartedIsOpen(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CloseBtn
          onClick={(e) => {
            e.preventDefault();
            setGetStartedIsOpen(false);
          }}
        >
          <ReactSVG src={Cancel} />
        </CloseBtn>
        <h2 className="modalTitle">Начать работу</h2>
        <script data-b24-form="inline/30/ko324m" data-skip-moving="true">
          {(function (w, d, u) {
            if (d) {
              var s = d.createElement("script");
              s.async = true;
              s.src = u + "?" + ((Date.now() / 180000) | 0);
              var h = d.getElementsByTagName("script")[0];
              h.parentNode.insertBefore(s, h);
            }
          })(
            window,
            document,
            "https://vkmbitrix.ru/upload/crm/form/loader_30_ko324m.js"
          )}
        </script>
      </Modal>
      <Modal
        isOpen={getDemomodalIsOpen}
        onRequestClose={() => {
          setGetDemoIsOpen(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <CloseBtn
          onClick={(e) => {
            e.preventDefault();
            setGetDemoIsOpen(false);
          }}
        >
          <ReactSVG src={Cancel} />
        </CloseBtn>
        <h2 className="modalTitle">Запросить демо</h2>
        <script data-b24-form="inline/31/uze9f6" data-skip-moving="true">
          {" "}
          {(function (w, d, u) {
            if (d) {
              var s = d.createElement("script");
              s.async = true;
              s.src = u + "?" + ((Date.now() / 180000) | 0);
              var h = d.getElementsByTagName("script")[0];
              h.parentNode.insertBefore(s, h);
            }
          })(
            window,
            document,
            "https://vkmbitrix.ru/upload/crm/form/loader_31_uze9f6.js"
          )}{" "}
        </script>
      </Modal> */}
    </Element>
  );
};

export default connect(PreviewContainer);
