// import { SelectProps } from '@radix-ui/react-select';
// import React from 'react';
// import { Controller, useFormContext } from 'react-hook-form';
// import { Select } from 'shared/ui';
// import { ErrorText, Label } from '.';

// type SelectItem = {
//   value: string;
//   label: React.ReactNode;
// };

// type Props = SelectProps & {
//   label?: string;
//   required?: boolean;
//   name: string;
//   items: Array<SelectItem>;
//   placeholder?: string;
// }

// export const FormSelect = ({
//   label,
//   required,
//   name,
//   items,
//   placeholder,
//   ...props
// }: Props) => {
//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();

//   const errotText = errors?.[name]?.message as string;

//   return (
//     <Controller
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <div>
//           {label && <Label label={label} required={required} />}

//           <Select onValueChange={field.onChange} defaultValue={field.value} {...props}>
//             <SelectTrigger className="h-12">
//               <SelectValue placeholder={placeholder} />
//             </SelectTrigger>
//             <SelectContent>
//               {items.map((item) => (
//                 <SelectItem key={item.value} value={item.value}>
//                   {item.label}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           {errotText && <ErrorText text={errotText} />}
//         </div>
//       )}
//     />
//   );
// };
