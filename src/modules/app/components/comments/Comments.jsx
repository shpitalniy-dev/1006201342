import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './components/header/Header.jsx';
import CommentsList from './components/commentsList/CommentsList.jsx';
import Footer from './components/footer/Footer.jsx';
import {
    CommentsWrapper,
} from './styledComponents';

const Comments = props => {
    const { dictionary, user } = props;

    const [mode, setMode] = useState('last');

    return (
        <CommentsWrapper>
            <Header 
                mode={mode}
                likes={user.likes}
                setMode={setMode}
                comments={user.comments}
                dictionary={dictionary}
            />
            <CommentsList 
                commentsData={mode === 'all' ? user.commentsData : user.commentsData.slice(-3)}
            />
            <Footer 
                dictionary={dictionary}
            />
        </CommentsWrapper>
    );
};

Comments.propTypes = {
    user: PropTypes.object.isRequired,
    dictionary: PropTypes.object.isRequired,
};

export default Comments;