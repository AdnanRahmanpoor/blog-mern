import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:3001/profile', {
      credentials: 'include',
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  function logout() {
    fetch('http://localhost:3001/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to='/' className='logo'>
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <span style={{fontWeight: 'bold'}}>Hello, {username}</span>
            <Link to='/create'>Create new Post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
