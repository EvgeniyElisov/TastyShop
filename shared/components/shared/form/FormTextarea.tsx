import { TextareaHTMLAttributes } from "react";
import { FormField } from "./FormField";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
  name: string;
  label?: string;
  required?: boolean;
};

export const FormTextarea = (props: Props) => {
  return <FormField fieldType="textarea" {...props}/>;
};
