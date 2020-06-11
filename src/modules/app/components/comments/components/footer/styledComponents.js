import styled from 'styled-components';

export const FooterWrapper = styled.div`
    width: 100%;
    height: 191px;
    padding: 20px;
    display: flex;
    background: ${props => props.theme.commentsFooterBackground};
    box-sizing: border-box;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

FooterWrapper.MessageBox = styled.textarea`
    width: 100%;
    height: 63px;
    border: 1px solid ${props => props.theme.commentsFooterTextAreaBorder};
    resize: none;
    display: block;
    padding: 10px;
    overflow: auto;
    background: ${props => props.theme.commentsFooterTextAreaBackground}; 
    box-sizing: border-box;
    border-radius: 1px;
    margin-bottom: 10px;
`;