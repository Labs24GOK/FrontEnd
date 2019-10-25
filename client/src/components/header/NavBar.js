import React from 'react';

function NavBar(props) {

  const logout = () => {
    props.logOut(props.history);
  }

  return (
    <div>
      Nav Bar
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default NavBar;