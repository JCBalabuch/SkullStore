import { styled } from "styled-components";

const Title = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-size: 28px;
    font-weight: 900;
    letter-spacing: 2px;
`;

export default Title;