import { contact, wrapper, errMsg } from "../styles/contact.module.scss";
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={contact}>
            <div className={wrapper}>
              <label htmlFor="name">
                Name*
                <span className={errMsg}>
                  <ErrorMessage name="name" />
                </span>
              </label>
              <Field name="name" id="name" placeholder="Enter name" />
            </div>
            <div className={wrapper}>
              <label>
                Email*
                <span className={errMsg}>
                  <ErrorMessage name="email" />
                </span>
              </label>
              <Field name="email" placeholder="Enter email" />
            </div>
            <label htmlFor="message">
              Message*
              <span className={errMsg}>
                <ErrorMessage name="message" />
              </span>
            </label>
            <Field
              name="message"
              id="message"
              placeholder="Enter message"
              as="textarea"
            />
            <button disabled={isSubmitting} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
