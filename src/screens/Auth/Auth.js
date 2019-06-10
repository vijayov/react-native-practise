import React from 'react';
import { View, Text, Button} from 'react-native';
import { Container, Left, Body, Header, Title, Right, Content, Form, Item, Input, Label } from 'native-base';
import styles from '../../styles';
class AuthScreen extends React.Component {
    
    loginHandler = () => {
        this.props.navigation.navigate('MainApp');
    }
    render(){
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Login</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input autoCompleteType={'email'}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} />
                        </Item>
                    </Form>
                    <View style={styles.m_t_30}>
                        <Button  full title="login" onPress={this.loginHandler} />
                    </View>
                    <View style={[styles.m_t_30 , styles.alignCenter]}>
                        <Text>Click here to <Text onPress={() => { this.props.navigation.navigate('Register')}} style={{ color: '#0000FF'}}>Register</Text> </Text>
                    </View>
                </Content>

            </Container>
        )
    }
}

export default AuthScreen;