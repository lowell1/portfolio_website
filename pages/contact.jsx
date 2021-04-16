import {
  contact,
  wrapper,
  fieldErrMsg,
  httpErrMsg,
} from "../styles/contact.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter email"),
  message: Yup.string().required("Please enter message"),
});

export default () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          fetch("/api/send_email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(values),
          })
            .then((response) => {
              response.json().then((val) => setStatus(val.message));
            })
            .catch((response) => {
              response.json().then((val) => setStatus(val.message));
            })
            .finally((res) => {
              console.log(res);
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting, isValidating, status }) => (
          <Form className={contact}>
            <div className={wrapper}>
              <label htmlFor="name">
                Name*
                <span className={fieldErrMsg}>
                  <ErrorMessage name="name" />
                </span>
              </label>
              <Field name="name" id="name" placeholder="Enter name" />
            </div>
            <div className={wrapper}>
              <label>
                Email*
                <span className={fieldErrMsg}>
                  <ErrorMessage name="email" />
                </span>
              </label>
              <Field name="email" placeholder="Enter email" />
            </div>
            <label htmlFor="message">
              Message*
              <span className={fieldErrMsg}>
                <ErrorMessage name="message" />
              </span>
            </label>
            <Field
              name="message"
              id="message"
              placeholder="Enter message"
              as="textarea"
            />
            <button disabled={isSubmitting || isValidating} type="submit">
              Send
            </button>
            {isSubmitting || isValidating ? (
              <div className={httpErrMsg}>Sending...</div>
            ) : (
              status && <div className={httpErrMsg}>{status}</div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
