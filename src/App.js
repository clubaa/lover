import React from 'react';
import 'style/tese.less'
import { Button } from 'antd';
function App(props) {
  return (
    <div className="App">
      {props.children}
      <Button type="danger">Primary</Button>
       
      
    </div>
  );
}

export default App;
