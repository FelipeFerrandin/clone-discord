import styled from "styled-components";

//A aplicacao foi dicidida em areas de tres linha e 4 colunas que ocupam os componentes
// o auto que é a parte do ChannelData não é fixo diferente dos demais
//VH tamanho da view, a grid ira ocupar 100% do tamanho da view
export const Grid = styled.div`
display: grid;
 
 grid-template-columns: 71px 240px auto 240px;
 
 grid-template-rows:46px auto 52px;
 
 grid-template-areas: 
 'ServerList ServerName ChannelInfo ChannelInfo'
 'ServerList ChannelList ChannelData UserList'
 'ServerList UserInfo ChannelData UserList';
 
 height: 100vh;
 `;