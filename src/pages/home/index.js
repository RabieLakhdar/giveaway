import React, { useState } from "react";
import Header from "../../components/header";
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
import ReactGoogleSheets from 'react-google-sheets';

const _renderCard = () => {
  return <Card />;
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
          addToast(`Thank you for your submit, will text you soon`, {
            appearance: "success",
            autoDismiss: true
          });
          setCard(false);
        }}
      >
        {({ errors, values, handleChange, handleReset }) => (
          <Form>
            <Row direction="row" top={24} left={24} bottom={24} center>
              <FieldWrapper>
                <Label>
                  Full Name<span>*</span>
                </Label>
                <FieldWrapper direction="row" marginRight={16}>
                  <SmallInput
                    type="string"
                    width={300}
                    height={51}
                    onChange={handleChange}
                    name="fullname"
                    values={values}
                    placeholder="Fill your Fillname"
                    marginRight={8}
                  />
                </FieldWrapper>
                {errors.fullname && <Error>{errors.fullname}</Error>}
              </FieldWrapper>
            </Row>

                        <Row direction="row" top={24} left={24} bottom={24} center>
                            <FieldWrapper>
                                <Label>
                                    Function<span>*</span>
                                </Label>
                                <FieldWrapper direction="row" marginRight={16}>
                                    <SmallInput
                                        type="string"
                                        width={300}
                                        height={51}
                                        onChange={handleChange}
                                        name="function"
                                        values={values}
                                        placeholder="Fill your Function"
                                        marginRight={8}
                                    />
                                </FieldWrapper>
                                {errors.function && <Error>{errors.function}</Error>}
                            </FieldWrapper>
                        </Row>

                        <Row direction="row" top={24} left={24} bottom={24} center>
                            <FieldWrapper>
                                <Label>
                                    Phone<span>*</span>
                                </Label>
                                <FieldWrapper direction="row" marginRight={16}>
                                    <SmallInput
                                        type="number"
                                        width={300}
                                        height={51}
                                        onChange={handleChange}
                                        name="phone"
                                        values={values}
                                        placeholder="Fill your Phone number"
                                        marginRight={8}
                                    />
                                </FieldWrapper>
                                {errors.phone && <Error>{errors.phone}</Error>}
                            </FieldWrapper>
                        </Row>

                        <Row direction="row" top={24} left={24} bottom={24} center>
                            <FieldWrapper>
                                <Label>
                                    Email<span>*</span>
                                </Label>
                                <FieldWrapper direction="row" marginRight={16}>
                                    <SmallInput
                                        type="mail"
                                        width={300}
                                        height={51}
                                        onChange={handleChange}
                                        name="mail"
                                        values={values}
                                        placeholder="Fill your mail adress"
                                        marginRight={8}
                                    />
                                </FieldWrapper>
                                {errors.mail && <Error>{errors.mail}</Error>}
                            </FieldWrapper>
                        </Row>

                        <Row direction="row" top={24} left={24} bottom={24} center>
                            <FieldWrapper>
                                <Label>
                                    City<span>*</span>
                                </Label>
                                <FieldWrapper direction="row" marginRight={16}>
                                    <SmallInput
                                        type="string"
                                        width={300}
                                        height={51}
                                        onChange={handleChange}
                                        name="town"
                                        values={values}
                                        placeholder="Fill your city"
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
  const [sheetLoaded, setSheetLoaded] = useState(false);
  return (
    <>
      <Header />
      <Container>
        <Text color="#3e3f42" size="24px">
          Inscrivez vous et tentez de gagner un ticket pour la journée Agile En
          Med sur le thème "Agilité et Culture d'Entreprise" qui aura lieu le 8
          février au campus universitaire de l'Ecole Centrale Casablanca.
        </Text>
                <Text color="#e02127" size="30px" top="50px">
                    Feel Free to get ready
        </Text>
      </Container>
      {card ? _renderContent(setCard) : _renderCard()}

      <ReactGoogleSheets 
        clientId={"314782395799-3ob2cos64jq9d4basjbv97l2f50orp9a.apps.googleusercontent.com"}
        apiKey={"AIzaSyCjjl0Jq1bLZ4tGRDs2t7fW4po5xdj2G7Y"}
        spreadsheetId={"1gCxsmi-tVzHHZiZOmj1onr-zvTDeTKXeaPcq2i-3NHk"}
        afterLoading={() => setSheetLoaded(true)}
      >
        {sheetLoaded ? 
          <div>
            <button onClick={({props}) => {
              props.updateCell(
                'sheet02', // sheetName
                'E', // column
                13, // row
                'Apple', // value
                null, // successCallback
                (error) => {
                  console.log('error', error)
                } 
              );
            }}>update cell!</button>
          </div>
          :
          'loading...'
        }
      </ReactGoogleSheets>
    </>
  );
};

export default ReactGoogleSheets.connect(Home);
