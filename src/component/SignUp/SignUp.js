import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { countContext } from '../../App';
import firebaseConfig from '../firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

const SignUp = () => {
    const {  foodBuyer } = useContext(countContext);
    const [user, setUser] = foodBuyer;

    const history = useHistory();
    const location = useLocation();

    // const { from } = location.state || { from: { pathname: '/' } };

    const handleInput = e => {
        let isValid = true;
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

    const handleFormSubmit = (e) => {
        if (user.email && user.password === user.confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    userName(user.name);
                    history.replace('/login')
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);

                });
        }
        else {
            const passwordError = { ...user };
            passwordError.notPassMatch = 'Password Not Matched';
            setUser(passwordError);
        }
        e.preventDefault();
    }
    const userName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
    }
    console.log(user);
    return (
        <div style={{ width: '25%', margin: '0 auto' }}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleInput} name='name' type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleInput} name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleInput} name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password <span style={{ color: 'red' }}>{user.notPassMatch && `!${user.notPassMatch}`}</span></Form.Label>
                    <Form.Control onBlur={handleInput} name='confirmPassword' type="password" placeholder="Confirm your Password" required />
                </Form.Group>

                <Button onClick={handleFormSubmit} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='mt-2'>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;