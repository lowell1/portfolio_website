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
        // validate={(fieldValues) => {
        //   const errors = {};
        //   const isEmptyField = (s) => !/[^\s]+/.test(s);

        //   if (isEmptyField(fieldValues.name)) errors.name = "required";

        //   if (isEmptyField(fieldValues.email)) errors.email = "required";

        //   if (isEmptyField(fieldValues.message)) errors.message = "required";

        //   return errors;
        // }}
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
          // <Form className={contact}>
          //   <label htmlFor="name">
          //     Name*&nbsp;
          //     <ErrorMessage name="name" />
          //     <Field name="name" id="name" placeholder="Enter name" />
          //   </label>
          //   <label>
          //     Email*&nbsp;
          //     <ErrorMessage name="email" />
          //     <Field name="email" placeholder="Enter email" />
          //   </label>
          //   <label htmlFor="message">
          //     Message*&nbsp;
          //     <ErrorMessage name="message" />
          //   </label>
          //   <Field
          //     name="message"
          //     id="message"
          //     placeholder="Enter message"
          //     as="textarea"
          //   />
          //   <button disabled={isSubmitting} type="submit">
          //     Send
          //   </button>
          // </Form>
        )}
      </Formik>
    </>
  );
};

// import { useState } from "react";
// import { contact } from "../styles/contact.module.scss";

// export default () => {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [formSubmitErrors, setFormSubmitErrors] = useState([]);

//   const handleChange = (event) => {
//     setFormState({ ...formState, [event.target.id]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const isEmptyField = (s) => !/[^\s]+/.test(s);
//     const errors = [];

//     if (isEmptyField(formState.name)) errors.push("missing name");

//     if (isEmptyField(formState.email)) errors.push("missing of invalid Email");

//     if (isEmptyField(formState.message)) errors.push("missing message");

//     if (errors.length === 0) setFormState({ name: "", email: "", message: "" });

//     setFormSubmitErrors(errors);
//   };

//   return (
//     <form onSubmit={handleSubmit} className={contact}>
//       <label>
//         Name:
//         <input
//           placeholder="Enter name"
//           id="name"
//           value={formState.name}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           placeholder="Enter email"
//           type="email"
//           id="email"
//           value={formState.email}
//           onChange={handleChange}
//         />
//       </label>
//       <label htmlFor="message">Message:</label>
//       <textarea
//         fixed
//         placeholder="Enter message"
//         id="message"
//         value={formState.message}
//         onChange={handleChange}
//       />
//       {formSubmitErrors && (
//         <ul>
//           {formSubmitErrors.map((error) => (
//             <li>{error}</li>
//           ))}
//         </ul>
//       )}
//       <button>Send</button>
//     </form>
//   );
// };
