import React, { useContext } from 'react';
import {
    Route,
    Redirect,
  } from 'react-router-dom';
import { countContext } from '../App';

const PrivateRoute = ({children, ...rest}) => {
    const {  foodBuyer } = useContext(countContext);
    const [user, setUser] = foodBuyer;
    return (
        <Route
            {...rest}
            render={({ location }) => 
            user.email ? (
                children 
            ) : (
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
                />
            )
            }
        />
    );
};

export default PrivateRoute;