import styled from 'styled-components';

export const HeaderWrappper = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    padding: 0 20px 0 20px;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 5px;
`;

HeaderWrappper.RightPart = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
`;

HeaderWrappper.LeftPart = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const HeaderRightPart = {};

HeaderRightPart.Block = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
`;

HeaderRightPart.Icon = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    margin-right: 5px;
`;

HeaderRightPart.Text = styled.div`
    width: fit-content;
    height: fit-content;
    font-size: 12px;
    margin-right: 5px;
`;

export const HeaderLeftPart = {};

HeaderLeftPart.Component = styled.div`
    width: fit-content;
    color: ${props => props.isActive ? 'inherit' : props.theme.commentsHeaderModeColor};
    height: fit-content;
    cursor: pointer;
    font-size: ${props => props.isActive ? '16px' : '14px'};
    font-weight: ${props => props.isActive ? 'bold' : 'normal'};
    margin-right: 5px;
    text-decoration-line: ${props => props.isActive ? null : 'underline'};
`;