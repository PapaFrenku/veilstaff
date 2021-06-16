import { useState, useMemo } from "react";
import { styled, connect } from "frontity";
import { Formik } from "formik";
import { Element } from "react-scroll";
import config from "../config";
import Input from "./styles/input";
import TextArea from "./styles/textarea";
import Button from "./styles/button";
import InputMask from "react-input-mask";
import NumberFormat from "react-number-format";
import FedbackForm from "../assets/images/fedbackForm.svg";
import { ReactSVG } from "react-svg";
import { window, document } from "global";

const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background: #fff;
  padding-bottom: 8rem;
`;

const Form = styled.form`
  position: relative;
  max-width: 460px;
  margin: 0 auto;
  margin-top: 29px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Subtitle = styled.div`
  color: #5c5c5c;
  line-height: 20px;
  font-weight: 300;
  text-align: center;
  max-width: 245px;
  margin: 0 auto;
  margin-top: 15px;
`;

const HeadingIcon = styled.div`
  color: #5c5c5c;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  margin: 0 auto;
  & svg {
    width: 50px;
    height: 50px;
  }
`;

const ContactForm = () => {
  const onSubmit = () => {};
  return (
    <Container id="feedbackForm">
      <div className="container">
        <HeadingIcon>
          <ReactSVG src={FedbackForm} />
        </HeadingIcon>
        <h2 style={{ marginTop: "10px" }} className="blockTitle">
          Обратная связь
        </h2>
        <Subtitle>
          Задайте любой вопрос и мы ответим вам в течении 2-х часов
        </Subtitle>
        {/* <Formik
          initialValues={{ name: "", number: "", comment: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                required
                placeholder="Как вас зовут?"
                style={{ marginBottom: "10px" }}
              />
              <InputMask
                mask='+7 (999) 999-99-99'
                name="number"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {(inputProps) => (
                  <Input
                    {...inputProps}
                    type="tel"
                    style={{ marginBottom: "10px" }}
                    placeholder="Ваш телефон"
                  />
                )}
              </InputMask>
              <TextArea
                style={{ marginBottom: "20px" }}
                type="text"
                name="comment"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
                placeholder="Ваше сообщение"
                rows="7"
                height="175px"
                resize="none"
              ></TextArea>
              <Button
                color={"#fff"}
                brColor={config.collors.secondary}
                bgColor={config.collors.secondary}
                type="submit"
                disabled={isSubmitting}
              >
                <span>Отправить сообщение</span>
              </Button>
            </Form>
          )}
        </Formik> */}
        <script data-b24-form="inline/26/zcxgvq" data-skip-moving="true">
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
            "https://vkmbitrix.ru/upload/crm/form/loader_26_zcxgvq.js"
          )}{" "}
        </script>
      </div>
    </Container>
  );
};

export default connect(ContactForm);
