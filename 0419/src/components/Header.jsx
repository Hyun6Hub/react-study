import React from 'react';
import {FiShoppingBag} from 'react-icons/fi';
import {BsFillPencilFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Header({cartCount}) {

    return (
      <div className='header-outer'>
        <div className='header'>
          <Link to="/" className='header-left'>
            <FiShoppingBag />
            <span>Shoppy</span>
          </Link>
          <nav className='header-right'>
            <Link to="/products">Products</Link>
            <Link to="/carts">MyCart ({cartCount})</Link>
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
            <Link to="/signup">
              <button type="button">Signup</button>
            </Link>
            <Link to="/products/new">
              <BsFillPencilFill className="header-right-icon" />
            </Link>
          </nav>
        </div>
      </div>
    );
}