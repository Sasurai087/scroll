import React from 'react'
import { Container, FormWrap, FormContent, Icon, Form, FormH1, FormButton, FormInput, FormLabel, Text } from './SigninElements'

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to='/'>JOHSAKO</Icon>
        <FormContent>
          <Form>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' placeholder="johndoe@email.com" required />
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type='password' placeholder="password" required />
            <FormButton type='submit'>Continue</FormButton>
            <Text>Forgot Password?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}

export default SignIn
