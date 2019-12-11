import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-item.component'


import { auth } from '../../firebase/firebase.utils'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='lolo'/>
        </Link>
        <div className="options">
            
            {
                currentUser ? 
                <div>Hello {currentUser.displayName}</div>
                :  
                <div></div>

            }
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>

            }
            <CartIcon/>
        </div>
        {
            hidden ? null :
            <CartDropdown />
        }
        
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) =>({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);