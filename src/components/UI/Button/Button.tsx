import { ButtonElement, Wrapper } from './Button.style';

type Props = {
  title: string;
  onClickHandler?: () => void;
};

const Button = ({ title, onClickHandler }: Props) => {
  return (
    <Wrapper>
      <ButtonElement type='button' onClick={onClickHandler}>
        {title}
      </ButtonElement>
    </Wrapper>
  );
};

export default Button;
