import { styled } from "styled-components";
import Title from "./Title";
import Logo from "./Logo";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 14vh;
    margin: 0 0 20px 0;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo>
                <img src="SkullStoreLogo.png" alt="SkullStore Logo" />
            </Logo>
            <Title>SkullStore</Title>
        </StyledHeader>
    );
};

export default Header;