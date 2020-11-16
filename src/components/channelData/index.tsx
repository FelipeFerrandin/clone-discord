import React, {useRef, useEffect} from "react";

import {Container, Messages, InputWrapper, InputIcon, Input} from './styles';
import ChannelMessage, {Mention} from '../channelMessage';


const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const div = messagesRef.current;
        if (div != null)
            div.scrollTop = div.scrollHeight;
    }, [messagesRef]);


    return (
        <Container>
            <Messages>
                {Array.from(Array(20).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author={"Felipe Ferrandin"}
                        data={"15/11/2020"}
                        content={"Fala"}
                    />
                ))}

                <ChannelMessage
                    author={"Gustavo Silva"}
                    data={"15/11/2020"}
                    content={"Fala deve"}
                    isBot
                    hasMentions
                />
                <ChannelMessage
                    author={"Gustavo Silva"}
                    data={"15/11/2020"}
                    content={
                        <>
                            <Mention>@Felipe Ferrandin</Mention>, você é foda
                        </>
                    }
                />
                <ChannelMessage
                    author={"Felipe Ferrandin"}
                    data={"15/11/2020"}
                    content={"Fala"}
                />
                <ChannelMessage
                    author={"Felipe Ferrandin"}
                    data={"15/11/2020"}
                    content={"Fala"}
                />
                <ChannelMessage
                    author={"Felipe Ferrandin"}
                    data={"15/11/2020"}
                    content={"Fala"}
                />
                <ChannelMessage
                    author={"Felipe Ferrandin"}
                    data={"15/11/2020"}
                    content={"Fala"}
                />
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon/>
            </InputWrapper>
        </Container>
    );
}

export default ChannelData;