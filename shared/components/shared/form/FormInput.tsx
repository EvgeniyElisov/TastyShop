import { InputHTMLAttributes } from "react";
import { FormField } from "./FormField";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
};

export const FormInput = (props: Props) => {
  return <FormField fieldType="input" {...props} />;
};