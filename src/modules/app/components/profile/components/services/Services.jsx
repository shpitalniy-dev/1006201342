import React from 'react';
import PropTypes from 'prop-types';
import {
    Body,
    Footer,
    Header,
    Component,
    ServicesWrapper,
} from './styledComponents';

const Services = props => {
    const { services, dictionary } = props;
    const total = services.reduce((result, current) => result + current.count, 0);

    return (
        <ServicesWrapper>
            <Header>
                <Header.Component>
                    {dictionary.resources.service}
                </Header.Component>
            </Header>
            <Body>
                {services.map((item, index) => (
                    <Body.Component key={index}>
                        <Component.LeftPart>
                            <Component.LeftPartBar 
                                width={`${item.count / total * 100}%`} 
                                isFirst={index === 0}
                            />
                            <Component.LeftPartText>
                                {item.label}
                            </Component.LeftPartText>
                        </Component.LeftPart>
                        <Component.RightPart>
                            {item.count}
                        </Component.RightPart>
                    </Body.Component>
                ))}
            </Body>
            <Footer>
                <Footer.LeftPart>
                    {dictionary.resources.total}
                </Footer.LeftPart>
                <Footer.RightPart>
                    {total}
                </Footer.RightPart>
            </Footer>
        </ServicesWrapper>
    );
};

Services.propTypes = {
    services: PropTypes.array.isRequired,
    dictionary: PropTypes.object.isRequired,
};

export default Services;