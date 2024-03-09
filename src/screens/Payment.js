import { TabPanel, TabView } from 'primereact/tabview';
import React from 'react';
import { Calendar2Check, ChatDotsFill, FileEarmarkText } from 'react-bootstrap-icons';
import { BreadCrumb } from '../uiCore';

const Payment = () => {
    const items = [{ label: "Payment" }];
    const home = { icon: "pi pi-home", url: "http://localhost:3000/" };
    return (
        <div className="container"
            style={{ paddingTop: "15px", paddingBottom: "20px" }}
        >
            <div className="m-2 mb-4 w-full">
                <BreadCrumb model={items} home={home} />
            </div>
            <div className="flex justify-content-center align-items-center w-full h-full">
                <div className="grid w-8 h-full">
                    <div className="col-5 my-auto h-28rem w-26rem flex align-items-stretch justify-content-center border-round-xs"
                        style={{ backgroundColor: "#3fcc6c" }}>
                        <div className="grid align-items-center text-50 m-2">
                            <div style={{ fontFamily: "Courier New" }} className="w-full">
                                <div className='grid'>
                                    <div className='col-7'>
                                        <div className="">Commission</div>
                                        <div>Total</div>
                                    </div>
                                    <div className='col-5 text-right'>
                                        <div className="ps-1">$1.99</div>
                                        <div className="ps-1">$600.99</div>
                                    </div>
                                </div>
                                <hr />
                                <div className="font-bold mb-4">
                                    <div className='text-right' >$ 599,00</div>
                                </div>
                                <div className="flex flex-column mb-4">
                                    <div className="ps-2">
                                        <FileEarmarkText />
                                        <div className='inline-block m-1'>Invoice ID :</div>
                                    </div>
                                    <span className="ps-3">SN8478042099</span>
                                </div>
                                <div className="flex flex-column mb-4">
                                    <div className="ps-2">
                                        <Calendar2Check />
                                        <div className='inline-block m-1'>
                                            Next payment :
                                        </div>
                                    </div>
                                    <span className="ps-3">22 July 2018</span>
                                </div>
                                <div >
                                    <div >
                                        <div>Customer Support:</div>
                                        <div>online chat 24/7</div>
                                    </div>
                                    <div className="inline-block rounded-circle"
                                        style={{ borderColor: "white" }}>
                                        <ChatDotsFill className="inline-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 h-30rem flex flex-column align-items-stretch border-round-xs border-3 border-round surface-border"
                        style={{ fontFamily: "Garamond" }}>
                        <div className='text-2xl font-bold m-4'>
                            Payment methods
                        </div>
                        <TabView>
                            <TabPanel header="Credit Card">
                                <div className='m-2'>
                                    <div style={{ fontFamily: "Garamond" }} className='text-lg'>Credit Card</div>
                                    <div className="">
                                        <input className="form-control m-2 text-lg"  style={{fontFamily: "Garamond"}} type="text" value="5136 1845 5468 3894" />
                                        <div style={{
                                            position: "absolute",
                                            top: 0,
                                            right: 0,
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "center",

                                        }}>
                                            {/* <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-logok-15.png" alt="" /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='grid m-1'>
                                    <div className='col'>
                                        <div style={{ fontFamily: "Garamond" }} className='text-lg'>Expiration Date</div>
                                        <div className="">
                                            <input type="text" className="form-control m-2 text-lg" style={{fontFamily: "Garamond"}} value="05/20" />
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div style={{ fontFamily: "Garamond" }} className='text-lg'>Code CVV</div>
                                        <div className="">
                                            <input type="password" className="form-control m-2 text-lg" style={{fontFamily: "Garamond"}} value="123" />
                                            <div className="fas fa-lock"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='m-2'>
                                    <div style={{ fontFamily: "Garamond" }} className='text-lg'>Name</div>
                                    <div className="">
                                        <input className="form-control m-2 uppercase text-lg" style={{fontFamily: "Garamond"}} type="text" value="Vladimir Berezovkiy" />
                                        <div className="far fa-user"></div>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap">
                                    <input
                                        type="submit"
                                        value="Pay"
                                        className='flex align-items-center justify-content-center border-round-sm w-8rem h-3rem mx-auto text-white text-xl'
                                        style={{ backgroundColor: "#3fcc6c", borderColor: "#3fcc6c", fontFamily: "Garamond" }}
                                    />
                                </div>
                            </TabPanel>
                            <TabPanel header="Mobile Payment">
                            </TabPanel>
                            <TabPanel header="More">
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;