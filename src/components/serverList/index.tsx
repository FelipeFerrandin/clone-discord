import React from "react";
import {Container, Separator} from './styles';
import ServerButton from '../serverButtom';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome/>
            <Separator/>
            <ServerButton/>
            <ServerButton hasNotifications/>
            <ServerButton mentions={3}/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton hasNotifications/>
            <ServerButton/>
            <ServerButton/>
            <ServerButton mentions={10}/>
            <ServerButton/>
            <ServerButton/>
        </Container>
    );
};

export default ServerList;