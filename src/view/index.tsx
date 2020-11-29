import React, {FC} from 'react';
import Header from './common-components/header'
import Manage from './common-components/manage'
import Memory from './common-components/memory'
import './styles.css';


const App: FC = () => {
  return (
    <>
      <Header/>
      <Manage/>
      <Memory/>
    </>
  ); 
}

export default App;
