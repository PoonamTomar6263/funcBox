import React from 'react'
import './Header.css'

function Header() {
    return (
        <div>
            <div className="header" >
            <div className="header_left">
                
                    <img className="header_logo" src="https://fundbox.com/img/brand-logo.png" alt="imgamazonelogo" />
               
            </div>
            

            <div className="header_right">
              
            <div className="header_nav1">
                <img src="https://icon-library.com/images/home-logo-icon/home-logo-icon-0.jpg"/>
                    <span className="span2">Home</span>
                </div>
                <div className="header_nav1">
                <img src="https://cdn4.iconfinder.com/data/icons/shopping-52/24/Add-Cart-512.png"/>
                    <span className="span2">About</span>
                </div>
                <div className="header_nav1">
                <img src="https://cdn.dribbble.com/users/64815/screenshots/1518220/attachments/229248/shop_logo_big.png?compress=1&resize=400x300"/>
                    <span className="span2">Shop</span>
                </div>
                <div className="header_nav1">
                <img src="https://cdn3.iconfinder.com/data/icons/e-commerce-8/91/account-512.png"/>
                    <span className="span2">Login/Sign Up</span>
                </div>
            </div>
        </div>
          
        </div>
    )
}

export default Header
