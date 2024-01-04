import { useState } from "react";
import { todoSchema } from "./schema/todo";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useFormik } from "formik";

const initialValues = {
  title: "",
  description: "",
  completed: "",
};

function App() {
  
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div>Hello</div>
    </>
  );
}

export default App;
