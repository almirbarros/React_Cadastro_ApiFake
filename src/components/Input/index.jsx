import { Controller } from "react-hook-form";
import PropTypes from 'prop-types'; // Opcional: Excelente para validação de tipos
import { IconContainer, InputContainer, InputText, ErrorText } from "./styles";

// 1. Exportação nomeada direto na função para manter a consistência do projeto
export function Input({ leftIcon, name, control, errorMessage, ...rest }) {
  return (
    <>
      <InputContainer>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <InputText 
              {...field}
              value={field.value ?? ''}
              {...rest} 
            />
          )}
        />
      </InputContainer>
      
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
}

// 2. Validação das propriedades recebidas (Padrão de produção em JS)
Input.propTypes = {
  leftIcon: PropTypes.element,
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  errorMessage: PropTypes.string
};


