import React from 'react';
import './App.css';


function App() {


  return (
    <>
      <div className="App">
        <header className="App-header">
          <div>
            <tableau-viz id="tableauViz"
                         src="http://public.tableau.com/views/RegionalSampleWorkbook/Storms">
            </tableau-viz>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
