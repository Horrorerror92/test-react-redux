import React, {FC} from 'react';
import Manage from '../manage'
import Memory from '../memory'
import './styles.css';
import '../../common-styles/reset.css'
import '../../common-styles/styles.css'


const TwoColumn: FC = () => {
  return (
    <div className="twoColumn">
      <Manage/>
      <Memory/>
    </div>
  ); 
}

export default TwoColumn;