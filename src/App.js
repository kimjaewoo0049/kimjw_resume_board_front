import './App.css';
import './css/resume.css';
import './function.js'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/MainPage.js';
import Login from './pages/LoginPage.js';
import FindId from './pages/FindIdPage.js';
import FindPwSendMail from './pages/FindPwSendMailPage.js';
import FindPw from './pages/FindPwPage.js';
import Join from './pages/JoinPage.js';
import Board from './pages/BoardMain.js';
import Test from './pages/DataTest.js';
import BoardCreate from './pages/BoardCreatePage.js';
import BoardUpdate from './pages/BoardUpdatePage.js';
import BoardView from './pages/BoardViewPage.js';
import UserInfoMain from './pages/UserInfoMainPage.js'
import UserInfoUpdate from './pages/UserInfoUpdatePage.js'
import Resume from './pages/ResumePage.js'
import PrivateRoute from './pages/component/privateRoute.js';

import { Provider } from 'react-redux';
import store from './pages/app/store.js';

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
export const persistor = persistStore(store);

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/test' element={<Test />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/findId' element={<FindId />}></Route>
              <Route path='/findPwSendMail' element={<FindPwSendMail />}></Route>
              <Route path='/findPw' element={<FindPw />}></Route>
              <Route path='/join' element={<Join />}></Route>
              <Route path='/board' element={<PrivateRoute element={<Board />}/>}></Route> 
              <Route path='/boardCreate' element={<PrivateRoute element={<BoardCreate />}/>}></Route> 
              <Route path='/boardUpdate' element={<PrivateRoute element={<BoardUpdate />}/>}></Route> 
              <Route path='/boardView' element={<PrivateRoute element={<BoardView />}/>}></Route> 
              <Route path='/userInfoMain' element={<PrivateRoute element={<UserInfoMain />}/>}></Route> 
              <Route path='/userInfoUpdate' element={<PrivateRoute element={<UserInfoUpdate />}/>}></Route> 
              <Route path='/resume' element={<PrivateRoute element={<Resume />}/>}></Route> 
            </Routes>
          </PersistGate>
        </Provider>
        <footer>
          <div id='footer'></div>
        </footer>
      </div >
    </>
  );
}
export default App;
