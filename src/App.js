import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { routers } from './routers/routers'
import DefaultLayout from './layout/DefaultLayout';
import { Fragment } from 'react';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
