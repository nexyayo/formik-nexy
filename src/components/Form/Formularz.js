import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Formularz.css';
import Confirm from '../Confirm/Confirm';
import Navbar from '../Navbar/Navbar';

const Formularz = () => {
  const initialValues = {
    imie: '',
    nazwisko: '',
    email: '',
    numerTelefonu: '',
    historiaDiagnoz: '',
    plec: '',
  };

  useEffect(() => {
    document.title = 'Formularz';
  }, []); 

  const handleSubmit = (values) => {
    console.log(values);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.imie) {
      errors.imie = '⚠️ Pole Imię jest wymagane';
    }

    if (!values.nazwisko) {
      errors.nazwisko = '⚠️ Pole Nazwisko jest wymagane';
    }

    if (!values.email) {
      errors.email = '⚠️ Pole Email jest wymagane';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = '⚠️ Niepoprawny adres email';
    }

    if (!values.numerTelefonu) {
      errors.numerTelefonu = '⚠️ Pole Numer Telefonu jest wymagane';
    }

    if (!values.historiaDiagnoz) {
      errors.historiaDiagnoz = '⚠️ Proszę wypełnić pole - "Historia Diagnoz"';
    }

    if (!values.plec) {
      errors.plec = '⚠️ Pole Płeć jest wymagane';
    }

    return errors;
  };

  const [isRegulaminAccepted, setIsRegulaminAccepted] = useState(false);

  const handleRegulaminAccept = () => {
    setIsRegulaminAccepted(true);
  };

  return (
    <div>
        <Navbar />
        <div className="form-container">
        <h1>Formularz</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="imie">Imię:</label>
                <Field type="text" id="imie" name="imie" />
                <ErrorMessage className="error-message" name="imie" component="h2" />
              </div>

              <div>
                <label htmlFor="nazwisko">Nazwisko:</label>
                <Field type="text" id="nazwisko" name="nazwisko" />
                <ErrorMessage name="nazwisko" component="h2" />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <Field type="text" id="email" name="email" />
                <ErrorMessage name="email" component="h2" />
              </div>

              <div>
                <label htmlFor="numerTelefonu">Numer telefonu:</label>
                <Field type="text" id="numerTelefonu" name="numerTelefonu" />
                <ErrorMessage name="numerTelefonu" component="h2" />
              </div>

              <div>
                <label htmlFor="historiaDiagnoz">Historia diagnoz:</label>
                <Field as="textarea" id="historiaDiagnoz" name="historiaDiagnoz" />
                <ErrorMessage name="historiaDiagnoz" component="h2" />
              </div>

              <div>
                <label htmlFor="plec">Płeć:</label>
                <Field as="select" id="plec" name="plec">
                  <option value="">Wybierz</option>
                  <option value="Mężczyzna">Mężczyzna</option>
                  <option value="Kobieta">Kobieta</option>
                  <option value="Nie chcę podawać">Nie chcę podawać</option>
                </Field>
                <ErrorMessage name="plec" component="h2" />
              </div>

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="regulaminCheckbox"
                  name="regulaminCheckbox"
                  checked={isRegulaminAccepted}
                  onChange={() => setIsRegulaminAccepted(!isRegulaminAccepted)}
                />
                <label htmlFor="regulaminCheckbox">
                  Akceptuję regulamin
                </label>
              </div>

              <button type="submit" disabled={isSubmitting || !isRegulaminAccepted}>
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
              </button>
            </Form>
          )}
        </Formik>
        {!isRegulaminAccepted && (
          <button className="warning-button" onClick={handleRegulaminAccept}>⚠️ Przeczytaj i zaakceptuj regulamin</button>
        )}
        {isRegulaminAccepted || <Confirm onAccept={handleRegulaminAccept} />}
      </div>
    </div>

  );
};

export default Formularz;
