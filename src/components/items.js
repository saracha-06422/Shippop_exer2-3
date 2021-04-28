import React, {useState} from 'react'
import Book from '../img/book.jpg';
import {Button} from 'react-bootstrap'
import {HiCheckCircle} from 'react-icons/hi'
// import {GoGraph} from 'react-icons/go'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {BiCart} from 'react-icons/bi'
import './Home.css'

function Items() {
    const [style, setStyle] = useState({display: 'none'});
    let iconStyles = { color: "yellow"};
    return(
            <div>
                <a href="/store">
                    <div className="work"
                    onMouseEnter={e => {
                        setStyle({display: 'block'});
                    }}
                    onMouseLeave={e => {
                        setStyle({display: 'none'})
                    }}
                    >                   
                        <p><HiCheckCircle/> มีสินค้า</p>
                            <img src={Book} alt="" />                    
                        <div style={style} className="cart">
                        <Button variant="outline-primary"> <BiCart/> Add To Cart</Button>
                        </div>
                        <h5 className="reviews"><AiFillStar style={iconStyles}/>
                        <AiFillStar style={iconStyles}/><AiFillStar style={iconStyles}/>
                        <AiFillStar style={iconStyles}/><AiOutlineStar/> Reviews(4)</h5>
                        <h5>รสชาติของผลไม้ที่ยังไม่สุกงอม</h5>
                        <h4><del>THB499.00</del></h4>
                        <h4>THB499.00</h4>
                    </div>
                </a>
            </div>
    );
}

export default Items;