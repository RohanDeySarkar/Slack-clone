import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import {
    ChatContainer,
    Header,
    HeaderLeft,
    HeaderRight,
    ChatMessages,
    ChatBottom
} from './styledComponents/chatStyles';

import {selectRoomId, selectRoomName} from '../features/appSlice';

import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import ChatInput from './ChatInput';

import {useCollection} from 'react-firebase-hooks/firestore';

import {db} from '../firebase';
import Message from './Message';

function Chat() {
    const chatRef = useRef(null);

    const roomId = useSelector(selectRoomId);
    const roomName = useSelector(selectRoomName);

    const [roomMessages, loading] = useCollection(
        roomId && 
        db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy('timestamp', "asc")
    );

    // console.log(roomMessages);

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behaviour: "smooth"
        });
    }, [roomId, loading])

    return (
        <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4>
                            <strong>#{roomName}</strong>
                        </h4>

                        <StarBorderRoundedIcon />
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoOutlinedIcon /> Details
                        </p>
                    </HeaderRight>
                </Header>

                <ChatMessages>
                    {roomMessages?.docs.map((doc) => {
                        const {message, timestamp, user, userImage} = doc.data();

                        return (
                            <Message
                                key={doc.id}
                                message={message}
                                timestamp={timestamp}
                                user={user}
                                userImage={userImage}
                            />
                        )
                    })}
                </ChatMessages>
                
                {/* Scroll down auto*/}
                <ChatBottom ref={chatRef} />

                <ChatInput 
                    chatRef={chatRef}
                    channelName={roomName}
                    channelId={roomId}
                />
            </>
        </ChatContainer>
    )
}

export default Chat;
