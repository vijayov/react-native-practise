import React from 'react';
import {  Header,  Body, Title } from 'native-base';



class HeaderComponent extends React.Component {
    render(){
        return (
            <Header>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
            </Header>
        );
    }
   
}
export default HeaderComponent;