import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ title , onAdd,showAdd}) => {
  const onClick = (e) => {
    console.log("The Button is Clicked");
    console.log(e);
}

  return (
    <header className='header'>
      <h1>{title }</h1>
      <button onClick={onAdd} color="Black" className='btn'>{showAdd ? 'Close' : 'Add'}</button>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
