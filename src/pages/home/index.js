import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer"
import axios from "axios";
import {
  Container,
  Text,
  FieldWrapper,
  Label,
  Row,
  SmallInput,
  Button,
  Forms,
  Error
} from "./style";
import { useToasts } from "react-toast-notifications";
import { Formik, Form } from "formik";
import Card from "../../components/card";


const _renderCard = () => {
  return <Card />;
};

const sendToSheet = data => {
  return axios.post(`https://rabielakhdar-hireme-back.glitch.me/sheet`, { data });
};

const _renderContent = setCard => {
  const { addToast } = useToasts();
  return (
    <Forms>
      <Formik
        initialValues={{
          fullname: null,
          function: null,
          phone: null,
          mail: null,
          town: null
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validate={values => {
          const errors = {};

          if (!values.fullname) {
            errors.fullname = "Please fill fullname please";
          }
          if (!values.function) {
            errors.function = "Please fill function please";
          }
          if (!values.phone) {
            errors.phone = "Fill your phone please";
          }
          if (!values.mail) {
            errors.mail = "Fill your mail please";
          }
          if (!values.town) {
            errors.town = "Fill your city please";
          }
          return errors;
        }}
        onSubmit={values => {
          const data = [
            values.fullname,
            values.function,
            values.mail,
            values.phone,
            values.town
          ];
          setCard(false)
          sendToSheet(data);
          addToast("succed", {
            appearance: "success",
            autoDismiss: true
          });
          
        }}
      >
        {({ errors, values, handleChange }) => (
          <Form>
            <Row direction="row" top={24} left={24} bottom={24} center>
              <FieldWrapper>
                <Label>
                  Nom et Prénom<span>*</span>
                </Label>
                <FieldWrapper direction="row" marginRight={16}>
                  <SmallInput
                    type="string"
                    width={300}
                    height={51}
                    onChange={handleChange}
                    name="fullname"
                    values={values}
                    marginRight={8}
                  />
                </FieldWrapper>
                {errors.fullname && <Error>{errors.fullname}</Error>}
              </FieldWrapper>
            </Row>

            <Row direction="row" top={24} left={24} bottom={24} center>
              <FieldWrapper>
                <Label>
                  Fonction<span>*</span>
                </Label>
                <FieldWrapper direction="row" marginRight={16}>
                  <SmallInput
                    type="string"
                    width={300}
                    height={51}
                    onChange={handleChange}
                    name="function"
                    values={values}
                    marginRight={8}
                  />
                </FieldWrapper>
                {errors.function && <Error>{errors.function}</Error>}
              </FieldWrapper>
            </Row>

            <Row direction="row" top={24} left={24} bottom={24} center>
              <FieldWrapper>
                <Label>
                  Numéro de téléphone<span>*</span>
                </Label>
                <FieldWrapper direction="row" marginRight={16}>
                  <SmallInput
                    type="number"
                    width={300}
                    height={51}
                    onChange={handleChange}
                    name="phone"
                    values={values}
                    marginRight={8}
                  />
                </FieldWrapper>
                {errors.phone && <Error>{errors.phone}</Error>}
              </FieldWrapper>
            </Row>

            <Row direction="row" top={24} left={24} bottom={24} center>
              <FieldWrapper>
                <Label>
                  Adresse Email<span>*</span>
                </Label>
                <FieldWrapper direction="row" marginRight={16}>
                  <SmallInput
                    type="mail"
                    width={300}
                    height={51}
                    onChange={handleChange}
                    name="mail"
                    values={values}
                    marginRight={8}
                  />
                </FieldWrapper>
                {errors.mail && <Error>{errors.mail}</Error>}
              </FieldWrapper>
            </Row>

            <Row direction="row" top={24} left={24} bottom={24} center>
              <FieldWrapper>
                <Label>
                  Ville<span>*</span>
                </Label>
                <FieldWrapper direction="row" marginRight={16}>
                  <SmallInput
                    type="string"
                    width={300}
                    height={51}
                    onChange={handleChange}
                    name="town"
                    values={values}
                    marginRight={8}
                  />
                </FieldWrapper>
                {errors.town && <Error>{errors.town}</Error>}
              </FieldWrapper>
            </Row>

            <Row center>
              <Button
                width="146px"
                height="51px"
                border="#0054df"
                type="submit"
              >
                Send
              </Button>
            </Row>
          </Form>
        )}
      </Formik>
    </Forms>
  );
};

const Home = () => {
  const [card, setCard] = useState(true);

  return (
    <>
      <Header />
      <Container>
        <Text color="#3e3f42" size="24px">
          Inscrivez vous et tentez de gagner un ticket pour la journée Agile En
          Med sur le thème "Agilité et Culture d'Entreprise" qui aura lieu le 8
          février au campus universitaire de l'Ecole Centrale Casablanca.
        </Text>
      </Container>
      {card ? _renderContent(setCard) : _renderCard()}
      <Footer/>
    </>
  );
};

export default Home;
