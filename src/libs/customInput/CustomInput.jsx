import React from 'react';
import PropTypes from 'prop-types';
import { CustomInputContainer } from './styledComponents';

const CustomInput = props => {
    return (
        <CustomInputContainer
            style={props.style}
        >
            <CustomInputContainer.Label
                htmlFor={props.htmlFor}
                labelText={props.labelText}
                children={props.labelText ? props.labelText : null}
            />
            <CustomInputContainer.Input 
                id={props.id}
                ref={props.ref}
                type={props.type}
                value={props.value}
                onBlur={props.onBlur}
                onClick={props.onClick}
                onFocus={props.onFocus}
                onChange={props.onChange}
                readOnly={props.readOnly}
                maxLength={props.maxLength}
                placeholder={props.placeholder}
            />
            <CustomInputContainer.Output 
                isOutput={props.isOutput}
                children={props.outputText ? props.outputText : null}
            />
        </CustomInputContainer>
    )
}

CustomInput.propTypes = {
    id: PropTypes.string,
    ref: PropTypes.object,
    type: PropTypes.string,
    value: PropTypes.string,
    style: PropTypes.object,
    onBlur: PropTypes.func,
    htmlFor: PropTypes.string,
    onFocus: PropTypes.func,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    isOutput: PropTypes.bool.isRequired,
    readOnly: PropTypes.bool,
    labelText: PropTypes.string,
    maxLength: PropTypes.number,
    outputText: PropTypes.string,
    placeholder: PropTypes.string,
}

export default React.memo(CustomInput);