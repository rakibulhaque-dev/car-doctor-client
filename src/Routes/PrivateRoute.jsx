import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    
    if(loading){
        return <progress className="w-56 progress"></progress>;
    }
    if(user?.email){
        return children;
    }
    
    return  <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;