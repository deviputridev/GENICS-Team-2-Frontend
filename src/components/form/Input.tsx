import React from 'react';
import {
  FieldError,
  get,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

import { FormInput } from '@/components/nextui-extend-variants/Input';
import clsxm from '@/lib/clsxm';

type InputProps = {
  id: string;
  variant?: 'bordered' | 'flat' | 'underlined' | 'faded' | undefined;
  label?: string;
  placeholder?: string;
  validation?: RegisterOptions;
  labelPlacement?: 'inside' | 'outside' | 'outside-left' | undefined;
  className?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  description?: string;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  defaultValue?: string;
  errorMessage?:
    | React.ReactNode
    | ((error: FieldError | undefined) => React.ReactNode);
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void | React.ChangeEvent<HTMLInputElement>;
  isDisabled?: boolean;
  onValueChange?: ((value: string) => void) | undefined;
  type?: string | undefined;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  id,
  variant,
  validation,
  label,
  placeholder,
  labelPlacement,
  className,
  isRequired,
  description,
  endContent,
  onChange,
  onValueChange,
  type,
  isDisabled,
  errorMessage,
  startContent,
  defaultValue,
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);
  return (
    <FormInput
      {...register(id, validation)}
      variant={variant}
      label={label}
      placeholder={placeholder}
      labelPlacement={labelPlacement}
      className={clsxm(className)}
      isRequired={isRequired}
      isInvalid={error ? true : false}
      errorMessage={
        typeof errorMessage === 'function' ? errorMessage(error) : errorMessage
      }
      description={description}
      startContent={startContent}
      endContent={endContent}
      onValueChange={onValueChange}
      onChange={onChange}
      type={type}
      isDisabled={isDisabled}
      defaultValue={defaultValue}
    />
  );
}