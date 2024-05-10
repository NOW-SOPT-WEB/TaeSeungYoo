import { InputFormProps } from '@typings/componentType';

import { InputFormContainer } from './styles';

const Index = ({
  useRef,
  title,
  type = 'text',
  placeholder = '입력해주세요',
  value,
  onChange = () => {},
  infoText,
  error = false,
  className = '',
  ...props
}: InputFormProps) => {
  return (
    <InputFormContainer className={`${className}${error ? ' error' : ''}`} {...props}>
      <h3>{title}</h3>
      <input ref={useRef} type={type} placeholder={placeholder} value={value} onChange={onChange} />
      {infoText && <p className="input-form__text">{infoText}</p>}
    </InputFormContainer>
  );
};

export default Index;
