import { styled } from "styled-components";

const StyledButton = styled.button`
    background-color: ${(props) => (props.secondary ? "#E7B762" : "#E4B661")};
    border-radius: 12px;
    color: ${(props) => (props.primary ? "black" : "#504834")};
    font-weight: 600;
    border: none;
    width: fit-content;
    height: fit-content;
    padding: 10px 14px;

    &:hover {
        background-color: #504834;
        color: #E7B762;
    }
`;

const Button = ({ children, primary, action }) => {
    return (
        <StyledButton secondary={secondary} onclick={action}>
            {children}
        </StyledButton>
    );
};

export default Button;