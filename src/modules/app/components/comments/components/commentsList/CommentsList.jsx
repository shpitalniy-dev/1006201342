import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Scrollbar from 'react-scrollbars-custom';
import {
    Header,
    MessageBlock,
    CommentsListWrapper,
} from './styledComponents';

const CommentsList = props => {
    const { commentsData } = props;

    const scrollBarRef = React.createRef();

    useEffect(() => {
        scrollBarRef.current.scrollToBottom();
    }, [commentsData.length]);

    return (
        <CommentsListWrapper>
            <Scrollbar
                ref={scrollBarRef}
                style={{ flex: 1 }}
                noScrollX={false}
                wrapperProps={{ style: { bottom: '0px', right: '0px' } }}
                trackYProps={{ style: { width: '4px', height: '100%', top: '0' } }}
            >
                <CommentsListWrapper.Block>
                    {commentsData.map((item, index) =>
                        <MessageBlock key={index}>
                            <MessageBlock.Header>
                                <Header.Name>
                                    {item.author}
                                </Header.Name>
                                <Header.Date>
                                    {item.date}
                                </Header.Date>
                            </MessageBlock.Header>
                            <MessageBlock.Message>
                                {item.message}
                            </MessageBlock.Message>
                        </MessageBlock>
                    )}
                </CommentsListWrapper.Block>
            </Scrollbar>
        </CommentsListWrapper>
    );
};

CommentsList.propTypes = {
    commentsData: PropTypes.array.isRequired,
};

export default CommentsList;