import React from 'react';
import PropTypes from 'prop-types';
import Services from './components/services/Services.jsx';
import {
    LeftPart,
    RightPart,
    StatusBlock,
    ProfileWrapper,
} from './styledComponents';

const Profile = props => {
    const { user, dictionary } = props;
    return (
        <ProfileWrapper>
            <ProfileWrapper.LeftPart>
                <LeftPart.Photo>
                    <img
                        src={user.photo}
                        width={'124'}
                        height={'124'}
                    />
                </LeftPart.Photo>
            </ProfileWrapper.LeftPart>
            <ProfileWrapper.RightPart>
                <RightPart.Name>
                    {user.name}
                </RightPart.Name>
                <RightPart.Position>
                    {user.position}
                </RightPart.Position>
                <RightPart.StatusBlock>
                    <StatusBlock.Background />
                    <StatusBlock.Text>
                        {user.status}
                    </StatusBlock.Text>
                </RightPart.StatusBlock>
                <Services 
                    services={user.services}
                    dictionary={dictionary}
                />
            </ProfileWrapper.RightPart>
        </ProfileWrapper>
    );
};

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    dictionary: PropTypes.object.isRequired,
};

export default Profile;