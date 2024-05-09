import React from 'react';

export interface InputFormProps {
  title: string;
  type?: string;
  placeholder?: string;
  value?: string;
  infoText?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
