import logo from './logo.svg';
import './App.css';
import TypeCalc from './components/TypeCalc';
import { Tab, Container, Tabs } from '@material-ui/core';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const handleTabChange = (event, newV) => {
    setValue(newV);
  }
  return (
    <Container fixed>
      <Tabs value={value} onChange={handleTabChange} centered>
        <Tab label="Attack"/>
        <Tab label="Defend"/>
      </Tabs>
      <TypeCalc mode={value}/>
    </Container>
  );
}

export default App;
