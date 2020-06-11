import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';
import { SpinnerWrapper } from './styledComponents';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = props => {
    // const [loading, setLoading] = useState(true);

    const theme = useSelector(state => state.theme.styles);

    return (
        <SpinnerWrapper>
            <BeatLoader
                css={override}
                size={props.size || 5}
                color={theme.spinnerColor}
                loading={true}
            />
        </SpinnerWrapper>
    );
}

Spinner.propTypes = {
    size: PropTypes.number,
    theme: PropTypes.object,
}

export default Spinner;