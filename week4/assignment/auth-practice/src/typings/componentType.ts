// import React from 'react';

export interface InputFormProps {
  title: string;
  type?: string;
  placeholder?: string;
  value?: string;
  infoText?: string;
  onChange?: () => void;
  className?: string;
}
