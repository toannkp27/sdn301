import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { routers } from './routers/routers'
import DefaultLayout from './layout/DefaultLayout';
import { Fragment } from 'react';
import Contact from './screens/Contact';
import Payment from './screens/Payment';
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
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
