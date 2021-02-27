import React from 'react';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import {
    HeaderContainer,
    HeaderLeft,
    HeaderAvatar,
    HeaderMiddle,
    HeaderRight
} from './styledComponents/headerStyles';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../features/userSlice';

function Header() {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar 
                    // add onClick
                    src={user.photo}
                    alt=""
                    onClick={() => dispatch(logout())}
                />

                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderMiddle>
                <SearchIcon />
                <input 
                    placeholder='Search'
                />
            </HeaderMiddle>

            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;