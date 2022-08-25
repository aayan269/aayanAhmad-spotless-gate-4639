import { Button, FormControl, FormHelperText, FormLabel, Input, Link } from '@chakra-ui/react';
import './Login.css';
import logo from './bg-gtm-2020 (2).png';
import logo2 from './login-h1 (1).png'
import { useContext } from 'react';
import { AuthContext } from '../context/AppContext';
import { useState } from 'react';
import {Navigate} from "react-router-dom";

const initForm={email:"",password:""}

export default function Login(){
    const auth= useContext(AuthContext)
    const [form,setForm]=useState(initForm)
console.log(auth)
    const handleChange=(e)=>{
        const {name,value}=e.target
        setForm({...form,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch(`https://reqres.in/api/login`,{
            method:'POST',
            headers:{"content-Type":"Application/json"},
            body:JSON.stringify(form)
        }).then((res)=>{
            res.json().then((result)=>{
                console.log(result)
                auth.setToken(result.token)
               auth.handleLogin()
            })
        }).catch((err)=>{
            console.log(err)
        })
      
    }
   
    if(auth.token){
        return <Navigate to="/" />
    }
    return(
        <div className='leftRight'>
            <div className="Left"><div className='logo'><img src="https://app.pluralsight.com/id/img/login-logo.png" alt="" /></div>
            <div className='form'><FormControl onSubmit={handleSubmit}>
  <FormLabel>Email or Username</FormLabel>
  <Input className='inpt' type='email' name='email' value={form.email} onChange={handleChange} />
  <FormHelperText/>
  <br/>
   <FormLabel>Password</FormLabel>
   <Input className='inpt' type='Password' name='password' value={form.password} onChange={handleChange} />
   <FormHelperText/>
   <Button width='100%'
   backgroundColor={'#0074ab'}
            mt={4}
            onClick={handleSubmit}
            // colorScheme={'#0074ab'}
            type='submit' value='SUBMIT'> Sign In </Button>
           <FormHelperText/>
           <br/>
           <Link color={'#0074ab'} to="">Forget Password</Link>
           <FormHelperText/>
           <Link color={'#0074ab'} to="">Sign in with company school</Link>
           <FormHelperText/>
           <br/>
           <hr/>
           <Button width='100%' backgroundColor={'#2d3137'} mt={4}
             type='submit'>Create an acoount</Button>
             <FormHelperText/><br/>
             <p className='copyright'>Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved.</p>
            
</FormControl>
</div>
            </div>

            <div className="Right">
                <div className='rightlogo'><img src={logo} alt="" />
                <div className='rightlogo2'><img src={logo2} alt="" /></div>
                <Button position='absolute' left='10%' top='68%' width='250px' background={'rgb(131,58,180) linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'}>Try for free</Button>
                </div>
            </div>
            
        </div>
    )
}