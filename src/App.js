import React, { useEffect, createContext, useReducer, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, /*useNavigate*/ } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';

//import Navigation from './components/Navigation'
import Login from './components/pages/Login';
import LoginU from './components/pages/LoginU';
import DocumentsList from './components/pages/DocumentsList'
import CreateDocument from './components/pages/CreateDocument'
import CreateUsers from './components/pages/CreateUsers'
import HomePageInst from './components/pages/HomePageInst';
import DocumentsListLogin from './components/pages/DocumentsListLogin'
import UserF from './components/pages/UserF';
import MyLibrary from './components/pages/MyLibrary,';
import NotFoundPage from './components/pages/NotFoundPage';
import EditPer from './components/pages/EditPer';
import RecuPassword from './components/pages/RecuPassword';
import DetailsDocuments from './components/pages/DetailsDocuments'
import UpdateD from './components/pages/UpdateD';
import PDF from './components/pages/PDF';
import PrivateRoutes from './routers/PrivateRoutes';
import { reducer, initialState } from './components/userReducer'

export const UserContext = createContext()


const Routing = () => {
  //const history = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER", payload:user})
      //history('/HomePageInstS')
    }/*else
    history('/Login')*/
  }, [])
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
      <Route exact path="/HomePageInstU" element={<DocumentsListLogin />} />
      <Route exact path="/userF" element={<UserF />} />
      <Route exact path="/EditarPerfil/:id" element={<EditPer />} />
      <Route exact path="/library" element={<MyLibrary />} />
      <Route exact path="/create" element={<CreateDocument />} />
      <Route exact path="/EditarDocuments/:id" element={<UpdateD />} />
      <Route exact path="/HomePageInstS" element={<HomePageInst />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/LoginU" element={<LoginU />} />
      </Route>
      <Route exact path="/user" element={<CreateUsers />} />
      <Route exact path="/Recuperacion-password" element={<RecuPassword />} />
      <Route exact path="/" element={<DocumentsList />} />
      <Route exact path="/edit/:id" element={<DetailsDocuments />} />
      <Route exact path="/pdf/:id" element={<PDF />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routing />
      </Router>
    </UserContext.Provider>
  );
}


export default App;
