
import './App.css';
import Data from './pages/Data';
import Form from './pages/Form';
import ThankYou from './pages/ThankYou';
import {Routes,Route, BrowserRouter} from "react-router-dom"


import store from './pages/redux/store';

import { Provider } from'react-redux';

function App() {
  return (
    <>
     <Provider store={store}>

    <BrowserRouter>
            <Routes>
              <Route  path="/" element={<Form/>} />
              <Route path="/thankYou"element={ <ThankYou/>} />
              <Route path="/data"element={ <Data/>} />
 </Routes>
          </BrowserRouter>
     </Provider>
     
  
    </>
  );
}

export default App;
