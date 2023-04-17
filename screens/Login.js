import React from "react";

import {
    StyledContainer,
    InnerContainer,
    PageLogo,PageTitle
} from '../components/styles'

const Login = () => {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" style={{ width:280,height:240}} source={require("../assets/img/wine.png")} />
                <PageTitle>Wine Stores</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login;