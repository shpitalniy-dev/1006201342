import styled from 'styled-components';

export const ProfileWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    box-sizing: border-box;
    margin-bottom: 5px;
    padding: 20px 20px 0 20px;
`;

ProfileWrapper.LeftPart = styled.div`
    width: fit-content;
    height: fit-content;
    box-sizing: border-box;
`;

ProfileWrapper.RightPart = styled.div`
    flex: 1;
    box-sizing: border-box;
    padding-left: 10px;
`;

export const LeftPart = {};

LeftPart.Photo = styled.div`
    width: 100%;
    height: fit-content;
    z-index: 1;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    img { 
        border-radius: 50%;
    }
`;

export const RightPart = {};

RightPart.Name = styled.div`
    color: ${props => props.theme.color};
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    margin-bottom: 3px;
`;

RightPart.Position = styled.div`
    color: ${props => props.theme.positionColor};
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 3px;
`;

RightPart.StatusBlock = styled.div`
    position: relative;
`;

export const StatusBlock = {};

StatusBlock.Background = styled.div`
    top: 0;
    left: -60px;
    width: calc(100% + 60px);
    border: 1px solid ${props => props.theme.statusBlockBorder};
    height: 100%;
    content: "";
    position: absolute;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: ${props => props.theme.statusBlockBackground};
`;

StatusBlock.Text = styled.div`
    color: ${props => props.theme.color};
    padding: 5px 5px 5px 0;
    position: relative;
    font-size: 14px;
    background: transparent;
    box-sizing: border-box;
    line-height: 20px;
`;
