import NotFoundIcon from "../assets/images/error-404.svg";
import Link from "@frontity/components/link";
import { styled } from "frontity";
import config from '../config'

const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 220px);
    & img {
        max-width: 273px;
        max-height: 207px;
    }
`

const PageTitle = styled.h1`
    font-weight: bold;
    font-size: 34px;
    line-height: 27px;
    margin: 0;
    margin-top: 44px;
`

const PageText = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    margin: 0;
    margin-top: 20px;

    a {
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: ${config.collors.secondary};
    }
`

const NotFound = () => {
  return (
    <>
      <NotFoundWrapper className="container">
        <img src={NotFoundIcon} />
        <PageTitle>СТРАНИЦА НЕ НАЙДЕНА</PageTitle>
        <PageText>
          Проверьте правильность адреса или перейдите по ссылке{" "}
          <Link href="/">veilstaff.com</Link>
        </PageText>
      </NotFoundWrapper>
    </>
  );
};

export default NotFound;
