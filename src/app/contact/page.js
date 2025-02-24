import React from "react";
import Image from "next/image";
import bg from "../../../public/background/pixelbg.png";

export default function ContactPage(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between relative">
        <Image
            src={bg}
            alt="background-image"
            fill
            className="absolute top-0 left-0 w-full h-screen object-cover opacity-20"
        />
        <div className="w-full h-screen flex flex-col items-center justify-center bg-cream bg-opacity-80 p-10">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="text-lg">My contact will be here</p>
        </div>
        </main>
    );
}