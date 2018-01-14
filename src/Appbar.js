import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Appbar = () => (
  <AppBar
    title={<span style={styles.title}>Title</span>}
    onTitleClick={handleClick}
    iconElementLeft={
    <div>
       <IconButton><NavigationClose /></IconButton>
       <Link to='/'><RaisedButton label="Home"/></Link>
     </div>         }
    iconElementRight={<Link to='/search'><RaisedButton label="Search"/></Link>}
  />
);

export default Appbar;
