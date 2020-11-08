import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { countContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";


const Login = () => {
    const {  foodBuyer } = useContext(countContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: '/' } };


    const [user, setUser] = foodBuyer;

    const handleInput = e => {
        let isValid;
        if (e.target.name === 'email') {
            const verifyEmail = /\S+@\S+\.\S+/.test(e.target.value);
            isValid = verifyEmail;
        }
        if (e.target.name === 'password') {
            const verifyPassword = e.target.value.length > 7;
            isValid = verifyPassword;
        }

        if (isValid) {
            const userInfoUpdate = { ...user };
            userInfoUpdate[e.target.name] = e.target.value;
            setUser(userInfoUpdate);
        }
    }

    const handleSubmit = (e) => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                history.replace(from)
            })
            .catch(function (error) {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
        e.preventDefault();
    }

    return (
        <div style={{ width: '25%', margin: '0 auto' }}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleInput} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleInput} name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='mt-2'>Don't have account? <Link to='/sign-up'>Sign Up</Link></p>
        </div>
    );
};

export default Login;