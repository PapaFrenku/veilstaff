import React, {
  useRef,
  useMemo,
  useEffect,
  useState,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import { styled, connect } from "frontity";
import Arrow from "../assets/images/next.svg";
import { ReactSVG } from "react-svg";
import config from "../config";
import Link from "@frontity/components/link";
import { motion, AnimateSharedLayout } from "framer-motion";
import Button from "./styles/button";

export type Competence = {
  title: string;
  description: string;
  image: any;
  alias: string;
  skills: { title: string }[];
};

type Props = {
  competences: Competence[];
};

const ComptenceWrapper = styled(motion.div)`
  transition: 0.1;
  cursor: pointer;
  z-index: ${(p: any) => p.isActive && 100};
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  padding-bottom: 35px;
  position: relative;
  height: 150px;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    & .circle {
      color: #fff;
      background: ${config.collors.primary};
    }
  }
`;

const CompetenceHeader = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 90px auto;

  @media (max-width: 768px) {
    grid-gap: 5px;
    grid-template-columns: 70px auto;
  }

  & > img {
    align-self: center;
  }
`;

const ComptetenceTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CompetenceDescription = styled.p`
  color: #5c5c5c;
  font-size: 16px;
  line-height: 17px;
  font-weight: 300;
  padding-top: 8px;
  max-height: 110px;
  overflow: hidden;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CompetencesListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 40px;
  grid-column-gap: 50px;
  position: relative;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ArrowInCircle = styled(motion.div)`
  color: ${config.collors.primary};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  /* background: #f8f8f8; */
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  position: absolute;
  bottom: 15px;
  left: calc(50% - 15px);
  padding-top: 3.5px;
  & svg {
    width: 18px;
    position: relative;
    transform: rotate(90deg);
  }
  & > div {
    width: 18px;
    height: 18px;
  }
  cursor: pointer;
`;

const CompetenceSkillsWrapper = styled.div`
  padding-left: 28px;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 1fr 1fr;
  padding-top: 10px;
`;

const SkillWrapper = styled.p`
  position: relative;

  & > span {
    content: "";
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    color: #fff;
    font-size: 14px;
    left: -28px;
    top: -3px;
    background: ${config.collors.secondary};

    border-radius: 50%;
  }
`;

const ExpandedWrapper = styled(motion.div)`
  width: 60%;
  background-color: #fff;
  padding: 30px;
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 30%);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  & > button {
  }

  @media(max-width: 1024px) {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    padding: 20px;
  }
`;

const AditionalContentWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
`;

const PlugDiv = styled.div`
  min-height: 120px;


  @media(max-width: 768px) {
    display: none;
  } 
`

interface CompetenceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onExpand: () => void;
  onCollapse: () => void;
  disabled: boolean;
}

const arrowAnimate = {
  enter: {
    transition: {
      duration: 0.5,
      ease: [0.04, 0.62, 0.23, 0.98],
    },
    rotate: 180,
  },
  exit: {
    transition: {
      duration: 0.2,
      ease: [0.04, 0.62, 0.23, 0.98],
      delay: 0.1,
    },
    rotate: 0,
  },
};

export const CompetenceCompact = ({
  title,
  description,
  image,
  onExpand,
  disabled,
}: Competence & { onExpand: () => void; disabled: boolean }) => {
  return (
    <ComptenceWrapper
      layoutId="expandable-card"
      initial={false}
      onClick={() => !disabled && onExpand()}
    >
      <div>
        <CompetenceHeader>
          <img src={image.url} />
          <div style={{ paddingLeft: "5px" }}>
            <ComptetenceTitle>{title}</ComptetenceTitle>
            <CompetenceDescription>{description}</CompetenceDescription>
          </div>
          <ArrowInCircle
            // animate={isOpen ? "enter" : "exit"}
            initial={false}
            variants={arrowAnimate}
            className="circle"
          >
            <ReactSVG src={Arrow} />
          </ArrowInCircle>
        </CompetenceHeader>
      </div>
    </ComptenceWrapper>
  );
};

function CompetenceExpanded({ children, onCollapse }) {
  return (
    <>
      <ExpandedWrapper
        className="card expanded"
        layoutId="expandable-card"
      >
        {children}
        <Button
          color={"#fff"}
          brColor={config.collors.primary}
          bgColor={config.collors.primary}
          type="button"
          style={{
            margin: "auto auto 0 auto",
          }}
          onClick={onCollapse}
        >
          <span>Закрыть</span>
        </Button>
      </ExpandedWrapper>
    </>
  );
}

const Competence: React.FC<CompetenceProps & Competence> = ({
  title,
  skills,
  image,
  description,
  alias,
  onCollapse,
  onExpand,
  disabled,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const collapseCompetence = () => {
    setIsExpanded(false);
    onCollapse();
  };

  const expandCompetence = () => {
    setIsExpanded(true);
    onExpand();
  };

  return (
    <>
      <AnimateSharedLayout>
        {isExpanded ? (
          <>
            <PlugDiv></PlugDiv>
            <CompetenceExpanded onCollapse={collapseCompetence}>
              <CompetenceHeader>
                <img src={image.url} />
                <div style={{ paddingLeft: "5px" }}>
                  <ComptetenceTitle>{title}</ComptetenceTitle>
                  <CompetenceDescription>{description}</CompetenceDescription>
                </div>
                {/* <ArrowInCircle
                  // animate={isOpen ? "enter" : "exit"}
                  initial={false}
                  variants={arrowAnimate}
                  className="circle"
                >
                  <ReactSVG src={Arrow} />
                </ArrowInCircle> */}
              </CompetenceHeader>
              <AditionalContentWrapper>
                <ComptetenceTitle>Навыки компетенции:</ComptetenceTitle>
                <CompetenceSkillsWrapper>
                  {skills
                    ? skills?.map((s, idx) => (
                        <SkillWrapper key={s.title}>
                          <span>{++idx}</span>
                          {s.title}
                        </SkillWrapper>
                      ))
                    : "у этой компетенции нет навыков"}
                </CompetenceSkillsWrapper>
              </AditionalContentWrapper>
            </CompetenceExpanded>
          </>
        ) : (
          <CompetenceCompact
            title={title}
            skills={skills}
            image={image}
            description={description}
            alias={alias}
            onExpand={expandCompetence}
            disabled={disabled}
          />
        )}
      </AnimateSharedLayout>
    </>
  );
};

export const CompetencesList = ({ competences }: any) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const onClick = (title: string | null) => {
    if (expanded === title) {
      setExpanded(null);
    } else {
      setExpanded(title);
    }
  };

  return (
    <CompetencesListWrapper>
      {competences.map((item: Competence) => (
        <Competence
          key={item.title}
          skills={item.skills}
          description={item.description}
          title={item.title}
          image={item.image}
          alias={item.alias}
          onExpand={() => onClick(item.title)}
          onCollapse={() => onClick(null)}
          disabled={expanded !== null && expanded !== item.title}
        />
      ))}
    </CompetencesListWrapper>
  );
};

export default connect(CompetencesList);
