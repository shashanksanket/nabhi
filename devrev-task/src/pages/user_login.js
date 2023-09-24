import React from 'react';
import { HeadDescription } from '../components/Styles';
import NavbarHead  from '../components/NavbarHead';
import FooterBottom  from '../components/FooterBottom';
import {useEffect,useState} from 'react'
import {
    HeadTitle,
    PageContainer,
    ContentContainer,
    FormGroup,
    Input,
    Label,
    Button,
    
  } from '../components/Styles';
  import { useNavigate } from "react-router-dom";

  
  const Login = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
    
      const data = await res.json();
    
      if (data.token) {
        localStorage.setItem("token",data.token)
        navigate("/");
        console.log('Login successful');
      } else {
        setError("wrong credentials");
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
    return (
        <div>
        <NavbarHead />
        <PageContainer>
            <ContentContainer>
            <HeadTitle style={{ marginTop: '130px' }}>User Login</HeadTitle>
            
        <form preventDefault={handleLogin} style={{ marginTop: '50px',marginLeft: '550px' }}>
            <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="Enter your username"
              onChange={(e)=>{setUsername(e.target.value)}}
              id="name"
              name="name"
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              onChange={(e)=>{setPassword(e.target.value)}}

              placeholder="Enter your password"
              id="pw"
              name="pw"
            />
          </FormGroup>

          <Button style={{ marginLeft: '110px',marginTop: '50px' }} onClick={handleLogin}>Login</Button>
          <HeadDescription style={{ marginLeft: '30px'}}>New User? <a href ="/signup" >Signup!</a> </HeadDescription>
        </form>
            </ContentContainer>
            <FooterBottom />
        </PageContainer>
        </div>
    );
};

export default Login;