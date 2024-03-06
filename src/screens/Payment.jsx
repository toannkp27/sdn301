import React from 'react';
<<<<<<< HEAD
import { Calendar2Check, ChatDotsFill, CurrencyDollar, FileEarmarkText } from 'react-bootstrap-icons';
import './Payment.css';
=======
import './Payment.css';
import { Calendar2Check, ChatDotsFill, CurrencyDollar, FileEarmarkText } from 'react-bootstrap-icons';
>>>>>>> 72e031bc7fa8bbef817c040a7fe54aaac613c185

const Payment = () => {
  return (
    <div className="container d-md-flex align-items-center">
      <div className="card box1 shadow-sm p-md-5 p-md-5 p-4">
        <div className="fw-bolder mb-4">
          <CurrencyDollar />
          <span className="ps-1">599,00</span>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center justify-content-between text">
            <span className="">Commission</span>
            <CurrencyDollar />
            <span className="ps-1">1.99</span>
          </div>
          <div className="d-flex align-items-center justify-content-between text mb-4">
            <span>Total</span>
            <CurrencyDollar />
            <span className="ps-1">600.99</span>
          </div>
          <div className="border-bottom mb-4"></div>
          <div className="d-flex flex-column mb-4">
            <span className="ps-2">
              <FileEarmarkText />
              Invoice ID:
            </span>
            <span className="ps-3">SN8478042099</span>
          </div>
          <div className="d-flex flex-column mb-5">
            <span className="ps-2">
              <Calendar2Check />
              Next payment:
            </span>
            <span className="ps-3">22 July 2018</span>
          </div>
          <div className="d-flex align-items-center justify-content-between text mt-5">
            <div className="d-flex flex-column text">
              <span>Customer Support:</span>
              <span>online chat 24/7</span>
            </div>
            <div className="btn btn-primary rounded-circle">
              <ChatDotsFill />
            </div>
          </div>
        </div>
      </div>
      <div className="card box2 shadow-sm">
        <div className="d-flex align-items-center justify-content-between p-md-5 p-4">
          <span className="h5 fw-bold m-0">Payment methods</span>
          <div className="btn btn-primary bar">
            <span className="fas fa-bars"></span>
          </div>
        </div>
        <ul className="nav nav-tabs mb-3 px-md-4 px-2">
          <li className="nav-item">
            <a className="nav-link px-2 active" href="#credit-card">Credit Card</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2" href="#mobile-payment">Mobile Payment</a>
          </li>
          <li className="nav-item ms-auto">
            <a className="nav-link px-2" href="#more">+ More</a>
          </li>
        </ul>
        <form action="">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column px-md-5 px-4 mb-4">
                <span>Credit Card</span>
                <div className="inputWithIcon">
                  <input className="form-control" type="text" value="5136 1845 5468 3894" />
                  <span className="">
                    <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column ps-md-5 px-md-0 px-4 mb-4">
                <span>Expiration<span className="ps-1">Date</span></span>
                <div className="inputWithIcon">
                  <input type="text" className="form-control" value="05/20" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column pe-md-5 px-md-0 px-4 mb-4">
                <span>Code CVV</span>
                <div className="inputWithIcon">
                  <input type="password" className="form-control" value="123" />
                  <span className="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column px-md-5 px-4 mb-4">
                <span>Name</span>
                <div className="inputWithIcon">
                  <input className="form-control text-uppercase" type="text" value="Vladimir Berezovkiy" />
                  <span className="far fa-user"></span>
                </div>
              </div>
            </div>
            <div className="col-12 px-md-5 px-4 mt-3">
              <div className="btn btn-primary w-100">Pay $599.00</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;