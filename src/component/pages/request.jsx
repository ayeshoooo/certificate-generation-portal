import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'
import axios from 'axios';
import {Button, DatePicker,Form,Input,Select,} from 'antd';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const RequestForm = () => {

  // const[name, setName]= useState('')
  // const[email, setEmail]= useState('')
  // const[course, setCourse]= useState('')
  // const[rollNo, setRollNo]= useState('')
  // const[teacherName, setTeacherName]= useState('')
  // const[date, setDate]= useState(null)
  // const[duration, setDuration]= useState(null)
  // const[text, setText]= useState('')
  const navigate = useNavigate()
  const [message, setMessage] = useState('');

  const handleRequest = async(values)=>{
    // e.preventDefault();

    console.log("Request form are submitted", values)
      // Format date and duration
      const formattedValues = {
        ...values,
        date: values.date ? dayjs(values.date).format('YYYY-MM-DD') : null,
        duration: values.duration ? values.duration.map(d => dayjs(d).format('YYYY-MM-DD')) : null,
      };

    const url = "http://localhost:7000/api/user/requestForm";
    try{
    const result = await axios.post(url,formattedValues
      // {
    //   name,
    //   email,
    //   course,
    //   rollNo,
    //   teacherName,
    //   date,
    //   duration,
    //   text
    // }
    )
    console.log(result);
    setMessage(result.data.message);
    toast.success(result.data.message);
    navigate('/certificate')
   }catch(err){ 
    console.log(err);
    // setMessage('Error: ' + (err.response?.data?.message || 'Something went wrong'))
    const errorMessage = err.response?.data?.message || 'Something went wrong';
    // const errorDetails = err.response?.data || 'No details available';
    setMessage('Error: ' + errorMessage);
    toast.error(errorMessage);
    // toast.error(`${errorMessage}. Details: ${JSON.stringify(errorDetails)}`);
    console.error('Error submitting form', err);
  }
  };
  return(
<>
<h1>Request Form</h1>
  <Form
  onFinish={handleRequest}
    {...formItemLayout}
    // variant="filled"
    style={{
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="Student Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input 
      // value={name} onChange={(e)=> setName(e.target.value)}
       />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input
      //  value={email}  
      // onChange={(e)=> setEmail(e.target.value)}
      />
    </Form.Item>

    <Form.Item
      label="Course"
      name="course"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
        <Select
        //  value={course} onChange={(value) => setCourse(value)}
         >
            {/* Add options here */}
            <Select.Option value="course1">Course 1</Select.Option>
            <Select.Option value="course2">Course 2</Select.Option>
          </Select>
    </Form.Item>

    <Form.Item
      label="Roll no"
      name="rollNo"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Input
      //  value={rollNo}  
      // onChange={(e)=> setRollNo(e.target.value)}
      />
    </Form.Item>

    <Form.Item
      label="Teacher/Tutor`s Name"
      name="teacherName"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Input 
      // value={teacherName}  
      // onChange={(e)=> setTeacherName(e.target.value)}
      />
    </Form.Item>

    <Form.Item
      label="Date"
      name="date"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <DatePicker
      //  value={date}  
      // onChange={(date)=> setDate(date)}
       />
    </Form.Item>

    <Form.Item
      label="Duration"
      name="duration"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <RangePicker 
      // value={duration}  
      // onChange={(dates)=> setDuration(dates)}
       />
    </Form.Item>

    <Form.Item
      label="Request"
      name="text"
      rules={[
        {
          required: true,
          message: 'Please input Request!',
        },
      ]}
    >
      <Input.TextArea
      //  value={text}  
      // onChange={(e)=> setText(e.target.value)} 
      />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 6,
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
   </>
  )
};
export default RequestForm;


// import React from 'react'

// function request() {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   )
// }

// export default request

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// import { Button, DatePicker, Form, Input, Select } from 'antd';

// const { RangePicker } = DatePicker;

// const formItemLayout = {
//   labelCol: { xs: { span: 24 }, sm: { span: 6 } },
//   wrapperCol: { xs: { span: 24 }, sm: { span: 14 } },
// };

// const RequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     course: '',
//     rollNo: '',
//     teacherName: '',
//     date: null,
//     duration: [],
//     text: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (name, value) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleRequest = async () => {
//     // e.preventDefault();
//     console.log("Request form submitted");
//     console.log("Form data:", formData);

//     const url = "http://localhost:7000/api/user/requestForm";
//     try {
//       const result = await axios.post(url, formData);
//       console.log(result);
//       toast.success(result.data.message);
//       navigate('/request');
//     } catch (err) {
//       console.log(err);
//       const errorMessage = err.response?.data?.message || 'Something went wrong';
//       toast.error(errorMessage);
//     }
//   };

//   return (
//     <Form
//       onFinish={handleRequest}
//       {...formItemLayout}
//       variant="filled"
//       style={{ maxWidth: 600 }}
//     >
//       <Form.Item
//         label="Student Name"
//         name="name"
//         rules={[{ required: true, message: 'Please input your name!' }]}
//       >
//         <Input value={formData.name} onChange={(e) => handleChange('name', e.target.value)} />
//       </Form.Item>

//       <Form.Item
//         label="Email"
//         name="email"
//         rules={[{ required: true, message: 'Please input your email!' }]}
//       >
//         <Input value={formData.email} onChange={(e) => handleChange('email', e.target.value)} />
//       </Form.Item>

//       <Form.Item
//         label="Course"
//         name="course"
//         rules={[{ required: true, message: 'Please input your course!' }]}
//       >
//         <Select
//          value={formData.course} onChange={(value) => handleChange('course', value)}>
//           {/* Add options here */}
//              <Select.Option value="course1">Course 1</Select.Option>
//              <Select.Option value="course2">Course 2</Select.Option>
//            </Select>
//       </Form.Item>

//       <Form.Item
//         label="Roll no"
//         name="rollNo"
//         rules={[{ required: true, message: 'Please input your roll number!' }]}
//       >
//         <Input value={formData.rollNo} onChange={(e) => handleChange('rollNo', e.target.value)} />
//       </Form.Item>

//       <Form.Item
//         label="Teacher/Tutor's Name"
//         name="teacherName"
//         rules={[{ required: true, message: 'Please input your teacher/tutor name!' }]}
//       >
//         <Input value={formData.teacherName} onChange={(e) => handleChange('teacherName', e.target.value)} />
//       </Form.Item>

//       <Form.Item
//         label="Date"
//         name="date"
//         rules={[{ required: true, message: 'Please select a date!' }]}
//       >
//         <DatePicker value={formData.date} onChange={(value) => handleChange('date', value)} />
//       </Form.Item>

//       <Form.Item
//         label="Duration"
//         name="duration"
//         rules={[{ required: true, message: 'Please select the duration!' }]}
//       >
//         <RangePicker value={formData.duration} onChange={(value) => handleChange('duration', value)} />
//       </Form.Item>

//       <Form.Item
//         label="Text"
//         name="text"
//         rules={[{ required: true, message: 'Please input your text!' }]}
//       >
//         <Input.TextArea value={formData.text} onChange={(e) => handleChange('text', e.target.value)} />
//       </Form.Item>

//       <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
//         <Button type="primary" htmlType="submit">Submit</Button>
//       </Form.Item>
//       <ToastContainer />
//     </Form>
//   );
// };

// export default RequestForm;
