import React from 'react'
import Items from './items'
import './Home.css'

function Home() {

    return(
        
        <div className="container">
            <div className="about-bg">

            </div>
            <h5>สินค้าขายดี</h5>
            <div className="row">
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
            </div>
            <h5>สินค้าแนะนำ</h5>
            <div className="row">
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
            </div>
        </div>
    );
}
export default Home;

