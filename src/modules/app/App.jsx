import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Profile from './components/profile/Profile.jsx';
import Spinner from '../../libs/spinner/Spinner.jsx';
import Comments from './components/comments/Comments.jsx';
import * as selectors from './selectors';
import * as actions from './actions';
import {
    AppWrapper,
} from './styledComponents';

const App = props => {
    const { user, isLoading, theme, dictionary } = {
        user: useSelector(selectors.getUserData),
        theme: useSelector(selectors.getTheme),
        isLoading: useSelector(selectors.getIsLoading),
        dictionary: useSelector(selectors.getDictionary),
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.initialization());
    }, []);

    return isLoading ?
        <Spinner />
        :
        <ThemeProvider theme={theme}>
            <AppWrapper>
                <Profile
                    user={user}
                    dictionary={dictionary}
                />
                <Comments
                    user={user}
                    dictionary={dictionary}
                />
            </AppWrapper>
        </ThemeProvider>;
};

export default React.memo(App);