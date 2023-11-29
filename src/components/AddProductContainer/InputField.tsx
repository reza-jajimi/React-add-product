import { ErrorMessage } from "formik";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type InputFieldType = {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  inputType?: HTMLInputTypeAttribute | undefined;
  handleBlur: ChangeEventHandler<HTMLInputElement>;
  title: String;
  name: string | undefined | any;
  value: string | number | readonly string[] | undefined;
};

type TextareaFieldType = {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement>;
  inputType?: HTMLInputTypeAttribute | undefined;
  handleBlur: ChangeEventHandler<HTMLTextAreaElement>;
  title: String;
  name: string | undefined | any;
  value: string | number | readonly string[] | undefined;
};

const InputField = ({
  placeholder,
  handleChange,
  inputType,
  handleBlur,
  title,
  name,
  value,
}: InputFieldType) => {
  return (
    <div className="mb-2 text-base">
      <p className="text-[#444444] mb-[2px] mr-1">{title}</p>
      <input
        className="w-full p-2 rounded shadow focus:shadow-lg focus:outline-none text-gray-600"
        type={inputType}
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        value={value}
        placeholder={placeholder}
      />
      <div className="h-4 mt-[2px]">
        <ErrorMessage
          name={name}
          render={(msg) => <p className="text-[13px] text-red-600">{msg}</p>}
        />
      </div>
    </div>
  );
};

const TextareaField = ({
  placeholder,
  handleChange,
  handleBlur,
  title,
  name,
  value,
}: TextareaFieldType) => {
  return (
    <div className="mb-2 text-base">
      <p className="text-[#444444] mb-[2px] mr-1">{title}</p>
      <textarea
        className="w-full p-2 rounded shadow focus:shadow-lg focus:outline-none text-gray-600"
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        value={value}
        rows={4}
        placeholder={placeholder}
      />
      <div className="h-4 -mt-1">
        <ErrorMessage
          name={name}
          render={(msg) => <p className="text-[13px] text-red-600">{msg}</p>}
        />
      </div>
    </div>
  );
};

export { InputField, TextareaField };
