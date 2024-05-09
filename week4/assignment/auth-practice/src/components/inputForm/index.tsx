import { InputFormProps } from '@typings/componentType';

import { InputFormContainer } from './styles';

const Index = ({
  title,
  type = 'text',
  placeholder = '입력해주세요',
  value,
  onChange = () => {},
  infoText,
  className = '',
  ...props
}: InputFormProps) => {
  return (
    <InputFormContainer className={className} {...props}>
      <h3>{title}</h3>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
      {infoText && <p className="input-form__text">{infoText}</p>}
    </InputFormContainer>
  );
};

export default Index;
