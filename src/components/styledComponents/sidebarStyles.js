import styled from  'styled-components';

export const SidebarContainer = styled.div`
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
    color: white;
    background-color: var(--slack-color);

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b
    }
`;

export const SidebarHeader = styled.div`
    display: flex;
    /* align-items: center; */
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        font-size: 18px;
        border-radius: 999px;
        color: #49274b;
        background-color: white;
        padding: 8px;
    }
`;

export const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: 400;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: #43a047;
    }
`;