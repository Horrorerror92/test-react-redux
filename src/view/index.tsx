import React, {FC} from 'react';
import Header from './common-components/header'
import TwoColumn from './common-components/two-column'
import './styles.module.css';
import './common-styles/reset.module.css'
import './common-styles/styles.module.css'

const App: FC = () => {
  return (
    <div className = "app">
      <Header/>
      <TwoColumn/>
    </div>
  ); 
}

export default App;
