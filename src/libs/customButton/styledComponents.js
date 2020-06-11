import styled from 'styled-components';

export const ButtonElement = styled.button`
    color: ${props => props.theme.buttonColor};
    width: ${props => props.width ? props.width : '100px'};
    height: ${props => props.height ? props.height : '40px'};
    border: none;
    cursor: pointer;
    background: ${props => props.theme.buttonBackground};
    font-size: ${props => props.fontSize ? props.fontSize : 'inherit'};
    font-weight: bold;
    border-radius: ${props => props.borderRadius ? props.borderRadius : '5px'};

    &:disabled{
        opacity: .5;
        cursor: not-allowed !important;
    }
`;