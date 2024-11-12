import React from 'react'
import {
    Navigate,
} from "react-router-dom";
import { useAppContext } from '../../context';
const PrivateRoute = ({ children,redirectTo  }) => {
    const { state: { user: { isSignedIn } } } = useAppContext()
    return true ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute
