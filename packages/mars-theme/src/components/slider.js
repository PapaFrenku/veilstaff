import styled from "@emotion/styled";
import Slider from "react-slick";
import config from '../config';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const MainSlider = ({ slides }) => {
  return (
    <SliderContainer>
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={`slide-${idx}`}>{slide}</div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
    .slick-dots {
        width: auto;
        bottom: 50%;
        
        & li {
            display: block;
        }

        & button {
            width: 12px;
            height: 12px;
            background: #fff;
            border-radius: 30px;
            border: 2px solid #fff;
            &:before {
                content: "";
            }
            transition: .1s;

            &:hover {
                background: ${config.collors.primary};
            }
        }
        & .slick-active button{
            background: ${config.collors.primary};
        }
    }
`

export default MainSlider;
