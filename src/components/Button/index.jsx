import PropTypes from 'prop-types'; // Opcional: para documentar e validar as propriedades
import { ButtonContainer } from './styles';

export function Button({ title, variant = "primary", onClick, type = "button" }) {
  return (
    <ButtonContainer $variant={variant} onClick={onClick} type={type}>
      {title}
    </ButtonContainer>
  );
}

// Validação das propriedades recebidas
Button.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
};


