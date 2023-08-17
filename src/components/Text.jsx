import { styled } from "styled-components";

const Text = styled.p`
    color: ${(props) => (props.text ? props.text : props.secondary ? props.tertiary : "#E4B661")};
    letter-spacing: 2px;
    text-align: ${(props) => (props.center ? "center" : props.justify ? "justify" : "left")};
    font-family: ${(props) => props.main ? props.main : props.normal};
`;

export default Text;