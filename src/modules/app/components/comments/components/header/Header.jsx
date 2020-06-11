import React from 'react';
import PropTypes from 'prop-types';
import LikesLogo from '../../../../../../../assets/likes.png';
import CommentsLogo from '../../../../../../../assets/comments.png';
import {
    HeaderWrappper,
    HeaderLeftPart,
    HeaderRightPart,
} from './styledComponents';

const Header = props => {
    const { mode, setMode, dictionary, likes, comments } = props;

    return (
        <HeaderWrappper>
            <HeaderWrappper.LeftPart>
                <HeaderLeftPart.Component
                    onClick={() => setMode('last')}
                    isActive={mode === 'last'}
                    children={dictionary.resources.lastComments}
                />
                <HeaderLeftPart.Component
                    onClick={() => setMode('all')}
                    isActive={mode === 'all'}
                    children={dictionary.resources.allComments}
                />
            </HeaderWrappper.LeftPart>
            <HeaderWrappper.RightPart>
                <HeaderRightPart.Block>
                    <HeaderRightPart.Icon>
                        <img
                            src={LikesLogo}
                            width={14}
                            height={14}
                        />
                    </HeaderRightPart.Icon>
                    <HeaderRightPart.Text>
                        {likes}
                </HeaderRightPart.Text>
                </HeaderRightPart.Block>
                <HeaderRightPart.Block>
                    <HeaderRightPart.Icon>
                        <img
                            src={CommentsLogo}
                            width={14}
                            height={14}
                        />
                    </HeaderRightPart.Icon>
                    <HeaderRightPart.Text>
                        {comments}
                </HeaderRightPart.Text>
                </HeaderRightPart.Block>
            </HeaderWrappper.RightPart>
        </HeaderWrappper>
    );
};

Header.propTypes = {
    mode: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    setMode: PropTypes.func.isRequired,
    comments: PropTypes.number.isRequired,
    dictionary: PropTypes.object.isRequired,
};

export default Header;