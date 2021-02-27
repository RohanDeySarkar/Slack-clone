import styled from  'styled-components';

import Avatar from '@material-ui/core/Avatar';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    /* top: 0; */
    position: fixed;
    width: 100%;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: whitesmoke;
`;

export const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

export const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    
    :hover {
        opacity: 0.8;
    }
`;

export const HeaderMiddle = styled.div`
    flex: 0.4;
    display: flex;
    align-items: center;
    padding: 0 50px;
    opacity: 1;
    border-radius: 6px;
    color: gray;
    border: 1px solid gray; 
    background-color: #421f44;
    /* text-align: center; */

    > input {
        min-width: 30vw;
        border: none;
        outline: none;
        text-align: center;
        color: white;
        background-color: transparent;
    }
`;

export const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;