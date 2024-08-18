import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';

function App(props) {
  const {myCounter} = props;
  return (
    <div style={{textAlign:'center',padding:16}}>
      COUNT : {myCounter.count}
      <br />
      <br />
      {myCounter.isNegative}
      <br />
      <br />
      <button onClick={()=> myCounter.increase()}>+</button>
      <button onClick={()=> myCounter.decrease()}>-</button>
    </div>
  );
}

export default observer(App);
