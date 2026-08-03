import { useField } from "formik";

function Input({ label, ...props }) {
  const [field, meta] = useField(props);

  const hasError = meta.touched && meta.error;

  return (
      <div className="form-field">
        <label htmlFor={props.id || props.name}>{label}</label>

        <input
            {...field}
            {...props}
            className={hasError ? "input input-error" : "input"}
        />

        {hasError && <p className="error-message">{meta.error}</p>}
      </div>
  );
}

export default Input;