import React from "react";
import {Container, Category, AddCategoryIcon} from './styles';
import ChannelButton from "../channelButton";

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon/>
            </Category>
            <ChannelButton channelName="chat-livre"/>
            <ChannelButton channelName="trabalho"/>
            <ChannelButton channelName="programação"/>
            <ChannelButton channelName="cs-go"/>
            <ChannelButton channelName="teste"/>
        </Container>
    );
}

export default ChannelList;