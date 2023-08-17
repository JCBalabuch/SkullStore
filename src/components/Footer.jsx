import { styled } from "styled-components";
import Grid from "./Grid";
import Text from "./Text";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Grid cols="3">
                <a href="https://github.com/JCBalabuch" target="blank">
                    <img src="GitHubLogo.png" alt="Github Logo" />
                </a>
                <a href="https://www.linkedin.com/in/jenifferbalabuch/" target="blank">
                    <img src="LinkedinLogo.png" alt="Linkedin Logo" />
                </a>
                <a href="https://portfoliojcbs.netlify.app/" target="blank">
                    <img src="LogoJCBS.png" alt="Logo Portfolio JCBS" />
                </a>
            </Grid>
            <Text>Created by JBalabuch - 2023</Text>
        </StyledFooter>
    );
};

export default Footer;