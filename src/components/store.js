import React from 'react'
import Items from './items'
import Book from '../img/book.jpg';
import Backbook from '../img/backbook.jpg'
import {Button, Dropdown} from 'react-bootstrap'
import {CgTwitter, CgMail} from 'react-icons/cg'
import {RiFacebookCircleFill} from 'react-icons/ri'
import {ImGooglePlus3} from 'react-icons/im'
import {AiFillHeart} from 'react-icons/ai'
import './store.css'

function Store() {
    return(
        <div className="container">
            <div className="books">
                <div className="boo">
                    <img src={Book} alt=""></img>
                </div>
                <div className="text">
                    <h1>รสชาติของผลไม้ที่ยังไม่สุกงอม</h1>
                    <p>ผู้เขียน : โชนัมจู</p>
                    <p>สำนักพิมพ์ : Piccolo</p>
                    <p>หมวดหมู่ : วรรณกรรม เรื่องสั้น</p>
                    <p>ประเภทของสินค้า : Books</p>
                    <p>บาร์โค้ด : 9786161840488</p>
                    <div className="price">
                        <ul>
                            <li id="a">ราคา</li>
                            <li id="b">THB499.00</li>
                            <li id="c"><del>THB499.00</del></li>
                        </ul>
                    </div>
                    <div className="button-add">
                        <ul>
                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">1</Dropdown.Toggle>
                            <li><Button variant="primary" border-radius="10px">Add</Button></li>
                            <li><Button variant="warning"><AiFillHeart/> Wlishlist</Button></li>
                        </ul>
                    </div>
                    <div className="social-icon">
                        <ul>
                            <li>แชร์ :</li>
                            <li><a href="/#"><CgMail size="30px"/></a> </li>
                            <li><a href="/#"><CgTwitter size="30px"/></a></li>
                            <li><a href="/#"><RiFacebookCircleFill size="30px"/></a></li>
                            <li><a href="/#"><ImGooglePlus3 size="30px"/></a> </li>
                        </ul>
                    </div>             
                </div>
            </div>
            <div className="backbook">
                <img src={Book} alt=""></img>
                <img src={Backbook} alt=""></img>
            </div>
            <br></br>
            <h5>สินค้าที่เกี่ยวข้อง</h5>
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

export default Store;