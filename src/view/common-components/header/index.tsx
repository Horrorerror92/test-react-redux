import React, {FC} from 'react';
import './styles.css';
import '../../common-styles/reset.css'
import '../../common-styles/styles.css'

const Header: FC = () => {
  return (
    <div className="header">
      <h1>Weather viewer</h1>
      <h2>Type your City and see the current weather status.</h2>
    </div>
  ); 
}

export default Header;
