import React, { Component, useContext, useEffect, useState } from 'react';
import Api from '../components/Api';
import Banner from "../components/Banner";

export default function Home() {
    return (
        <>
            <Banner url="/banner.png" texto="Alfredo's Pizza Cafe"/>  
            <div className="container container-home my-5">
                <Api/>    
            </div>
        </>
    )
}