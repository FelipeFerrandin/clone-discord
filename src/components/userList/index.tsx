import React from "react";

import {Container, User, Avatar, Role} from './styles';

export interface UserProps {
    nickName: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickName, isBot}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>
            <strong>{nickName}</strong>
            {isBot && <span>Bot</span>}
        </User>
    );
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Diponível - 1</Role>
            <UserRow nickName="Felipe Ferrandin"/>
            <Role>Offline - 18</Role>
            <UserRow nickName="Gustavo Silva" isBot/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
            <UserRow nickName="Valdiney"/>
        </Container>
    );
}

export default UserList;