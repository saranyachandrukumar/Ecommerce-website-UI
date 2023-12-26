import React, { useState } from 'react';
import './homepage.css';
import { Container, Row } from 'react-bootstrap';
import Navbaritem from './navbaritem.js'; 
import Topbar from './topbar.js'; 
import { Card, Button, Col } from 'react-bootstrap';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import product8 from './product8.jpg';
import Starrating from './starrating.js';

const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: product1 },
    { id: 2, name: 'Product 2', price: 29.99, image: product2 },
    { id: 3, name: 'Product 3', price: 29.99, image: product3 },
    { id: 4, name: 'Product 4', price: 29.99, image: product4 },
    { id: 5, name: 'Product 5', price: 29.99, image: product5 },
    { id: 6, name: 'Product 6', price: 29.99, image: product6 },
    { id: 7, name: 'Product 7', price: 29.99, image: product7 },
    { id: 8, name: 'Product 8', price: 29.99, image: product8 },

];


const LeftArrow = () => {
    const [cart, setCart] = useState([]);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonStyle = {
        transition: 'background-color 0.3s ease',
        backgroundColor: isHovered ? 'black' : 'white',
        color: isHovered ? 'white' : 'black',
    };

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };
    return (
        <Container fluid >
            <Row>
                <Topbar /> 
                <Navbaritem />
                <div className='maincontainer' style={{ marginTop: '-12rem' }}>
                    <h2 className='heading'>Shop in style</h2>
                    <p className='para'>With this shop homepage template</p>
                </div>
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={3}>
                        <Card style={{ width: '18rem', height: '22rem', margin: '10px', textAlign: 'center' }}>
                            <Card.Img
                                variant="top"
                                src={product.image}
                                alt={product.name}
                                style={{ height: '150px', width: '125px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '85px' }}
                            />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.id === 2 || product.id === 3 || product.id === 7 ? (
                                        <>
                                            <span style={{ textDecoration: 'line-through' }}>${product.price.toFixed(2)}</span>{' '}
                                        </>
                                    ) : (
                                        `$${product.price.toFixed(2)}`
                                    )}
                                </Card.Text>
                                <Starrating />
                                <Button
                                    className="btn btn-light"
                                    style={buttonStyle}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleAddToCart(product)}
                                >
                                    {product.id === 1 ? 'View Options' : product.id === 7 ? 'View Options' : 'Add to Cart'}
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default LeftArrow;
