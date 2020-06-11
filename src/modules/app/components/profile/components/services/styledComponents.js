import styled from 'styled-components';

export const ServicesWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const Header = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    font-size: 13px;
    box-sizing: border-box;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.servicesBlockBorder};
    justify-content: flex-end;
`;

Header.Component = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    min-width: 60px;
    justify-content: center;
`;

export const Body = styled.div`
    width: 100%;
    height: fit-content;
    margin: 20px 0;
    box-sizing: border-box;
    border-left: 1px solid ${props => props.theme.servicesBlockBodyBorder};
`;

Body.Component = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    margin-bottom: 3px;
`;

export const Component = {};

Component.LeftPart = styled.div`
    flex: 1;
    height: 100%;
    position: relative;
`;

Component.RightPart = styled.div`
    width: fit-content;
    display: flex;
    min-width: 60px;
    font-size: 13px;
    font-weight: bold;
    justify-content: center;
`;

Component.LeftPartBar = styled.div`
    top: 0;
    left: 0;
    width: ${props => props.width};
    height: 100%;
    content: "";
    position: absolute;
    box-sizing: border-box;
    border-radius: 0 3px 3px 0;
    background-color: ${props => props.isFirst ? props.theme.servicesFirstBarBackground : props.theme.servicesOtherBarBackground};
`;

Component.LeftPartText = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
    position: relative;
    font-size: 13px;
    box-sizing: border-box;
    background: transparent;
    align-items: center;
    padding-left: 5px;
`;

export const Footer = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    font-size: 16px;
    box-sizing: border-box;
    font-weight: bold;
    align-items: center;
    border-top: 1px solid ${props => props.theme.servicesBlockBorder};
`;

Footer.LeftPart = styled.div`
    flex: 1;
`;

Footer.RightPart = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    min-width: 60px;
    justify-content: center;
`;
