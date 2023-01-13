import { useContext } from "react"
import { UserContext } from "./App"
import React, { useState } from 'react'
import { Form, Button, Input, Label, FormGroup } from 'reactstrap'


function Login(){

    const [ , setUser ] = useContext(UserContext) 

    const [ loginObj, setLoginObj ] = useState({username: '', password: ''}) 
    const [ error, setError ] = useState({})

    function updateLoginObj(key, value){
        const copy = {...loginObj}
        copy[key] = value
        setLoginObj(copy)
    }

    function submitLogin(e){
        e.preventDefault()
        fetch('/login', {
            method: 'POST', 
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(loginObj)
        })
        .then(res => {
            if(res.ok) res.json().then(data => setUser(data))
            else res.json().then( data => setError(data))
            
        })
    }

  

    return (  

        <div id='form'>

            <h1>Login</h1>

            <Form onSubmit={submitLogin}>

                <FormGroup>
                    <Label>Username</Label>
                    <Input value={loginObj.username} onChange={e=> updateLoginObj('username', e.target.value)}/>
                </FormGroup>
                
                <FormGroup>
                    <Label>Password</Label>
                    <Input value={loginObj.password} type='password' onChange={e=> updateLoginObj('password', e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Button color='primary'>Login</Button>
                </FormGroup>
                
            </Form>

            { error ? <p className='error'>{error.error}</p> : null}

            <p>New to Bird Watcher? Signup here</p>

        </div>

    )
}

export default Login