"use client";

import { Button } from "shared/components/ui";

type Props = {
  isSubmitting?: boolean;
  className?: string;
  children: React.ReactNode;
};

export const SubmitButton = ({ isSubmitting, children, className }: Props) => {
  return (
    <Button loading={isSubmitting} className={className} type="submit">
      {children}
    </Button>
  );
};
