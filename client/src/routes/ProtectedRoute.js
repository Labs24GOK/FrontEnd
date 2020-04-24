import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...rest}) => {

    console.log("protectedroute");

    return (
        <Route {...rest} render={ props => {

            if (localStorage.getItem("token"))
                { return <Component {...props} />; }
            else
                { return <Redirect to="/login" />; }
        }} />
    )
}

export default ProtectedRoute;