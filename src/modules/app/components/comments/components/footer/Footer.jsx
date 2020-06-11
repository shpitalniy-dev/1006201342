import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CustomButton from '../../../../../../libs/customButton/CustomButton.jsx';
import * as actions from '../../../../actions';
import {
    FooterWrapper,
} from './styledComponents';

const Footer = props => {
    const { dictionary } = props;

    const textAreaRef = React.useRef();

    const dispatch = useDispatch();
    const sendMessage = () => {
        dispatch(actions.sendMessage(textAreaRef.current.value));
        textAreaRef.current.value = '';
    };

    const keyDownHandler = useCallback(event => {
        if (event.keyCode === 13 && event.ctrlKey) {
            sendMessage();
        }
    }, []);

    return (
        <FooterWrapper>
            <FooterWrapper.MessageBox 
                ref={textAreaRef} 
                onBlur={() => document.removeEventListener('keydown', keyDownHandler)}    
                onFocus={() => document.addEventListener('keydown', keyDownHandler)}
            />
            <CustomButton
                width={'281px'}
                height={'43px'}
                onClick={sendMessage}
                fontSize={'16px'}
                children={dictionary.resources.writeToConsultant}
                borderRadius={'23px'}
            />
        </FooterWrapper>
    );
};

Footer.propTypes = {
    dictionary: PropTypes.object.isRequired,
};

export default Footer;