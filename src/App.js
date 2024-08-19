
import './App.css';

import Form from './pages/Form';
import ThankYou from './pages/ThankYou';
import {Routes,Route, BrowserRouter} from "react-router-dom"


import store from './pages/redux/store';

import { Provider } from'react-redux';
import UpdateForm from './pages/UpdateForm';
import View from './pages/View';

function App() {
  return (
    <>
     <Provider store={store}>

    <BrowserRouter>
            <Routes>
              <Route  path="/" element={<Form/>} />
              <Route path="/thankYou"element={ <ThankYou/>} />

              <Route path="/update"element={ <UpdateForm/>} />
              <Route path="/view"element={ <View/>} />
 </Routes>
          </BrowserRouter>
     </Provider>
     
  
    </>
  );
}

export default App;
