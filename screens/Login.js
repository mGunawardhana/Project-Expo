import React, {useState} from "react";
import { Formik as Formic } from 'formik';
import { View } from 'react-native';

import {
    StyledContainer,
    InnerContainer,
    PageLogo, PageTitle, SubTitle, StyledFormArea
    ,LeftIcon,StyledInputLabel,StyledTextInput,RightIcon,Colors
} from '../components/styles';

//icons
import {Octicons,Ionicons} from '@expo/vector-icons'

import { StatusBar } from "expo-status-bar";
const { darkLight, brand, primary } = Colors;

const Login = () => {

        const [hidePassword, setHidePassword] = useState(true);

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer style={{justifyContent: 'center',alignItems:'center'}}>
                <PageLogo resizeMode="cover" style={{ width: 280, height: 240 }} source={require("../assets/img/wine.png")} />
                <PageTitle >𝖂𝖎𝖓𝖊 𝕾𝖙𝖔𝖗𝖊</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formic
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >{({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                           <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="sample@gmail.com"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />

                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="* * * * * * * * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                             <StyledButton>
                                <ButtonText>
                                    Login
                                </ButtonText>
                            </StyledButton>
                    </StyledFormArea>
                )}

                </Formic>

            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label, icon, ...props}) => {
    return (<View style={{}}>
        <LeftIcon>
            <Octicons name={ icon} size={30} color={brand}/>
        </LeftIcon>
        <StyledInputLabel>
            {label}
        </StyledInputLabel>
        <StyledTextInput {...props} />
        {isPassword && (
            <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                <Ionicons name={hidePassword ? "md-eye-off" : "md-eye"} size={30} color={darkLight}/>
            </RightIcon>
        )}
    </View>)
}
//19.29
export default Login;