import styled from 'styled-components';

export const CommentsListWrapper = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    box-sizing: border-box;
    margin-bottom: 5px;
`;

CommentsListWrapper.Block = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

export const MessageBlock = styled.div`
    color: ${props => props.theme.color};
    width: 100%;
    height: fit-content;
    padding: 0 20px 0 20px;
    box-sizing: border-box;
`;

MessageBlock.Header = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
`;

MessageBlock.Message = styled.div`
    width: 100%;
    height: fit-content;
    border: 1px solid ${props => props.theme.commentsMessageBlockBorder};
    padding: 10px 20px 10px 20px;
    position: relative;
    box-sizing: border-box;
    background: ${props => props.theme.commentsMessageBlock};
    box-sizing: border-box;
    font-weight: normal;
    margin-bottom: 5px;

    ::before {
        top: -12px;
        left: 19px;
        content: "";
        display: block;
        position: absolute; 
        border: 6px solid transparent; 
        border-left: 6px solid ${props => props.theme.commentsMessageBlockBorder};
        border-bottom: 6px solid ${props => props.theme.commentsMessageBlockBorder}; 
    }

    ::after {
        top: -10px;
        left: 20px;
        content: "";
        display: block;
        position: absolute; 
        border: 5px solid transparent; 
        border-left: 5px solid ${props => props.theme.commentsMessageBlock};
        border-bottom: 5px solid ${props => props.theme.commentsMessageBlock}; 
    }
`;

export const Header = {};

Header.Name = styled.div`
    width: fit-content;
    height: fit-content;
    font-size: 14px;
    font-weight: bold;
    margin-right: 5px;
`;

Header.Date = styled.div`
    color: ${props => props.theme.commentsMessageHeaderDateColor};
    width: fit-content;
    height: fit-content;
    font-size: 12px;
`;