import React from 'react';

interface FormErrorProps {
  message: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  return (
    <p className="text-sm text-red-500 mt-1">{message}</p>
  );
};