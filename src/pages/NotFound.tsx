import React, { FC } from 'react';
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div className='container'>
      <h1>Error 404</h1>
      Page not found!
      <p>Already have an account?<br/>
        <Link to='/login'>Sign in</Link><br/>
        or <Link to='/register'>Register</Link>
      </p>
    </div>
  );
};

export default NotFound;