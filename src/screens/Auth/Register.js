import React from 'react';
import { View, Text, Button } from 'react-native';
import { Container, Left, Body, Header, Title, Right, Content, Form, Item, Input, Label } from 'native-base';
import styles from '../../styles';
import validate from '../../utility/validation';

class RegisterScreen extends React.Component {

    state = {
        controls : {
            email : {
                value  : "",
                valid : false,
                validationRules : {
                    isEmail : true
                }
            },
            password : {
                value  : "",
                valid : false,
                validationRules : {
                    minLength : false
                }
            },
            confirmPassword : {
                value  : "",
                valid : false,
                validationRules : {
                    equalTo : 'password'
                }
            }
        }
    }

    updateTextHandler = (key , value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalControl].value;
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            };
        }
        if (key === "password") {
            connectedValue = {
                ...connectedValue,
                equalTo: value
            };
        }
        this.setState(prevState => {
            return {
                controls : {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        valid:
                            key === "password"
                                ? validate(
                                    prevState.controls.confirmPassword.value,
                                    prevState.controls.confirmPassword.validationRules,
                                    connectedValue
                                )
                                : prevState.controls.confirmPassword.valid
                    },
                    [key] : {
                        ...prevState.controls[key],
                        value : value,
                        valid: validate(
                            value,
                            prevState.controls[key].validationRules,
                            connectedValue
                        ),
                    }
                }
            }
        })
    }

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>Register</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input value={this.state.controls.email.value} onChangeText={(val) => {
                                this.updateTextHandler('email' , val)
                            }}/>
                        </Item>
                        <Item floatingLabel >
                            <Label>Password</Label>
                            <Input secureTextEntry={true} value={this.state.controls.password.value} onChangeText={(val) => {
                                this.updateTextHandler('password', val)
                            }}/>
                        </Item>
                        <Item floatingLabel >
                            <Label>Confirm Password</Label>
                            <Input secureTextEntry={true} value={this.state.controls.confirmPassword.value} onChangeText={(val) => {
                                this.updateTextHandler('confirmPassword', val)
                            }}/>
                        </Item>
                    </Form>
                    <View style={styles.m_t_30}>
                        <Button full title="Register" disabled={
                            !this.state.controls.confirmPassword.valid ||
                            !this.state.controls.email.valid ||
                            !this.state.controls.password.valid
                        } />
                    </View>
                    
                </Content>

            </Container>
        )
    }
}

export default RegisterScreen;