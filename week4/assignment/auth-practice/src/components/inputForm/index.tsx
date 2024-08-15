import { InputFormProps } from '@typings/componentType';
import React, { forwardRef } from 'react';

import { InputFormContainer } from './styles';

const Index = forwardRef(function Index(
  {
    title,
    type = 'text',
    placeholder = '입력해주세요',
    value,
    onChange = () => {},
    infoText,
    error = false,
    className = '',
    ...props
  }: InputFormProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <InputFormContainer className={`${className}${error ? ' error' : ''}`} {...props}>
      <h3>{title}</h3>
      <input ref={ref} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      {infoText && <p className="input-form__text">{infoText}</p>}
    </InputFormContainer>
  );
});

export default Index;
