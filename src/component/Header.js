import React from 'react';
import { Container, Navbar, Badge, FormControl, Nav, Button,Dropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { cartState } from '../context/Context';
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
const Header = () => {
  const { state: { cart } ,dispatch ,productState:{Searchquery} , productDispatch} = cartState()
  
  
  
  return (
    <Navbar expand="lg" variant="drak" bg="dark" style={{ height: "90px" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shoping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text>
          <FormControl style={{ width: "500px" }}
            type="search"
            name={Searchquery}
            placeholder="Search kar lo marzi apki"
            onChange={(e)=>productDispatch({type:'BySearch',payload:e.target.value})} />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: "370px" }}>

              {cart.length && cart.length > 0 ? (

                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={()=>dispatch({type:'REMOVE_TO_CART',payload:prod})}
                        
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (<span style={{ padding: "10px" }}>Card is Empty</span>)}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;