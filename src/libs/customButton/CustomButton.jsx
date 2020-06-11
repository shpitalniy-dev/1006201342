import React from 'react';
import PropTypes from 'prop-types';
import { ButtonElement } from './styledComponents';

const CustomButton = props => {
    return (
        <ButtonElement
            ref={props.buttonRef}
            type={props.type}
            style={props.style}
            width={props.width}
            height={props.height}
            onClick={props.onClick}
            fontSize={props.fontSize}
            disabled={props.disabled}
            children={props.children}
            borderRadius={props.borderRadius}
        />
    )
};

CustomButton.propTypes = {
    type: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string,
    onClick: PropTypes.func,
    fontSize: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    buttonRef: PropTypes.object,
    borderRadius: PropTypes.string,
}

export default React.memo(CustomButton);