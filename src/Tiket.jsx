import React, { useState } from "react"; // Tambahkan useState di sini
import './Styleguide.css';
import TicketDeparture from './Tiket/TicketDeparture'; 
import BarcodeEffect from './Tiket/BarcodeEffect'; 
import Icon1 from './Tiket/Icon1'; 
import TicketDetails from './Tiket/TicketDetails'; 
import TicketFooter from './Tiket/TicketFooter'; 
import Tombol1 from './Tiket/Tombol1'; 
import RotateScreenWarning from './Tiket/RotateScreenWarning'; 

export default function App() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [ticketData, setTicketData] = useState(null);

    return (
        <>
            {/* Peringatan Rotate Screen dan Loading */}
            <RotateScreenWarning onLoaded={() => console.log("Loading selesai, masuk ke halaman tiket")} />

            <form className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[--hitam] via-[--ijo] to-[--ijo] animate-gradient-x">
                {/* Background Animation Layers */}
                <section className="absolute inset-0 bg-gradient-to-r from-[--ijo]/20 via-[--hoverijo] to-[--hitam] animate-pulse opacity-30 blur-3xl"></section>
                <section className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[--hitam] via-[--abuabu] to-[--ijo]/10 animate-gradient-xy opacity-50 blur-2xl"></section>

                <div className="relative z-10 w-full h-full flex flex-col space-y-5 items-center my-3 px-4 py-8">
                    {/* Step Component */}
                    <header className="w-full flex flex-col items-center justify-center">
                    </header>

                    {/* Ticket Details Section */}
                    <section className="w-full flex-col flex items-center">
                        <div className="flex w-full max-w-3xl text-[--putih] h-64">
                            {/* Left Side with Barcode and Icon */}
                            <article className="h-full bg-[--hitam] flex items-center justify-center px-8 rounded-l-3xl w-fit relative overflow-hidden">
                                <BarcodeEffect />
                                <Icon1 />
                                <span style={{ transform: "rotate(270deg)", display: "inline-block" }} className="font-bold text-2xl text-[--putih]">
                                    Ticket Details
                                </span>
                            </article>

                            {/* Dashed Border Section */}
                            <aside className="relative h-full flex flex-col items-center border-dashed justify-between border-2 bg-[--hitam] border-[--putih]">
                                <div className="absolute rounded-full w-8 h-8 -top-5" />
                                <div className="absolute rounded-full w-8 h-8 -bottom-5" />
                            </aside>

                            {/* Right Side with Ticket Information */}
                            <article className="h-full py-8 px-10 bg-[--hitam] flex-grow rounded-r-3xl flex flex-col overflow-hidden">
                                <div className="flex w-full justify-between items-center">
                                    <TicketDeparture />
                                    <TicketDetails />
                                    <div className="flex flex-col items-center">
                                        <span id="ticketArrival" className="text-4xl font-bold">UB</span>
                                        <span className="text-[--abuabu] text-sm">Institution</span>
                                    </div>
                                </div>
                                <TicketFooter setTicketData={setTicketData} isSubmitted={isSubmitted} />
                            </article>
                        </div>
                    </section>

                    {/* Email Input and Button */}
                    <section className="flex flex-col items-center space-y-4">
                        <Tombol1 setIsSubmitted={setIsSubmitted} />
                    </section>
                </div>
            </form>
        </>
    );
}