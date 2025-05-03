import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App'
import "./index.css"

class Main extends React.Component { 
  render() {
    return (
      <App />
    )
  }
}

const root  = createRoot(document.getElementById('root'));
root.render(<Main />)