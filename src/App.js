import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import './styles/addproduct.css';
import './styles/editprofile.css';
import './styles/product.css';

import { Fragment } from 'react';
import DefaultLayout from './layout/DefaultLayout';
import { routers } from './routers/routers';
import Dashboard from './screens/DashBoard';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routers.map((route) => {
            const Page = route.page
            const DeLayout = route.isShowHeader ? DefaultLayout : Fragment
            return (
              <Route path={route.path} element={
                <DeLayout>
                  <Page />
                </DeLayout>
              } />
            )
          })}
          <Route path='/dashboard' element={
            <>
              <Dashboard />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
