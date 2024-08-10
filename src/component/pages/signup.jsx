import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import axios from 'axios';

function  SignUp () {

const[name, setName]= useState('')
const[email, setEmail]= useState('')
const[password, setPassword]= useState('')
const navigate = useNavigate()
const [message, setMessage] = useState('');

   const handleSignup = async(e)=>{
    e.preventDefault();
    console.log("form submitted")
    const url = "http://localhost:7000/api/user/signup";
    try{
    const result = await axios.post(url, {name , email , password})
    console.log(result);
    setMessage(result.data.message);
    navigate('/request')
   }catch(err){ 
    console.log(err);
    setMessage('Error: ' + (err.response?.data?.message || 'Something went wrong'))
   }
  };
   
    return (
      <div>
        <h1> SignUp </h1>
        <Form 
        onSubmitCapture = {handleSignup}
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
  >
    <Form.Item
      label="name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your firstname!',
        },
      ]}
    >
      <Input value={name}  
      onChange={(e)=> setName(e.target.value)} />
    
      </Form.Item>
      <Form.Item
      label="Email Address"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email address!',
        },
      ]}
    >
      <Input value={email}  onChange={(e)=> setEmail(e.target.value)} />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      // value={signUpInfo.password}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password value={password}  onChange={(e)=> setPassword(e.target.value)} />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  {message && <p>{message}</p>}
  <ToastContainer />
   {/* <div style={{display:"Flex" ,justifyContent:"Center"}}>
   You have account? */}
 {/* </div> */}
      </div>
    )
  }
  
  export default  SignUp;