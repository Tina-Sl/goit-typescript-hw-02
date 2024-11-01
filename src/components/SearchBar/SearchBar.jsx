import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineSearch } from "react-icons/ai";
import s from "./SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    if (!values.query) {
      toast.error("You must enter text to search for images");
      return;
    }
    setQuery(values.query);
  };

  const toastOptions = {
    duration: 5000,
    style: {
      background: "#A52A2A",
      color: "#fff",
    },
  };

  return (
    <Formik
      className="container"
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <div className={s.box}>
          <Field
            className={s.field}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.button} type="submit">
            <AiOutlineSearch size="30" />
          </button>
          <Toaster containerStyle={{ top: 60 }} toastOptions={toastOptions} />
        </div>
      </Form>
    </Formik>
  );
};

export default SearchBar;
