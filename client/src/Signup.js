import React, { useState } from 'react'
import { Form, Button, Input, Label, FormGroup } from 'reactstrap'
import { useContext } from 'react'
import { UserContext } from './App'


function Signup(){


    const defaultObj = { username: '', password: '', password_confirmation: ''}

    const [ , setUser ] = useContext(UserContext)
    const [ signupObj, setSignupObj ] = useState(defaultObj)
    const [ errors, setErrors ] = useState([])



    function updateSignupObj(key, value){
        const copy = {...signupObj}
        copy[key] = value
        setSignupObj(copy)
    }

  

    const renderErrors = errors.map( e => {
        return <p key={e} className='error'>{e}</p>
    })


    function submitSignup(e){
        e.preventDefault()
        fetch('/signup', {
            method: 'POST', 
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(signupObj)
        })
        .then(res => {
            if(res.ok) res.json().then(data => setUser(data))
            else res.json().then( data => setErrors(data.errors))
            
        })
    }
    return (
            <div id='form'>

                <h1>Signup</h1>
                
                <Form onSubmit={submitSignup}>

                    <FormGroup>
                        <Label>Username</Label>
                        <Input value={signupObj.username} onChange={e=> updateSignupObj('username', e.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Password</Label>
                        <Input value={signupObj.password} type='password' onChange={e=> updateSignupObj('password', e.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Confirm Password</Label>
                        <Input value={signupObj.password_confirmation} type='password' onChange={e=> updateSignupObj('password_confirmation', e.target.value)}/>
                    </FormGroup>

                    <FormGroup>                
                        <Button color='primary'>Submit</Button>
]                   </FormGroup>

                </Form>

                { errors.length > 0 ? renderErrors : null}

            </div>
    )
}

export default Signup