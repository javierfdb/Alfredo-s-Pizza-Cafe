import React, { Component } from 'react';

import Banner from "../components/Banner";

export default function NotFound() {

    return (
        
        <> 
            <Banner url="/banner-2.png" texto="Página no encontrada"/>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-5 pt-5 mb-5">
                    
                    <figure> 
                        <img className='w-100' src="https://media0.giphy.com/media/jOpLbiGmHR9S0/giphy.gif" alt="Alfredo's Pizza Cafe" />
                    </figure> 
                </div>
            </div>
        </>
    )
}