import React from 'react'
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Desc>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Desc>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: top;
    justify-content: center;
    
    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.8;
        z-index: -1;
    }
`;

const CTA = styled.div`
    max-width: 730px;
    width: 47%;
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    top: 21%;
    
`;

const CTALogoOne = styled.img`
    width: 93%;
`;

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: 900;
    padding: 18px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 19px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 2px;
    margin-top: 12px;
    margin-bottom: 5px;

    &:hover{
        background-color: #0483ee;
    }
`;

const Desc = styled.p`
    font-size: 10.8px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`;

const CTALogoTwo = styled.img`
    width: 93%;
    margin-top: 12px;
`;