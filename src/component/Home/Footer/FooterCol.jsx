import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { scrollUP } from '../../Shared/ScrollTop/ScrollTop';

const FooterCol = (props) => {
    return (
        <Col xs={12} sm={6} md={6} lg={3} className="footerLink d-flex flex-column align-items-center align-items-md-start">
            <h5>{props.title ? props.title : ''}</h5>
            <ul className="list-unstyled w-100">
                {props.menuItems?.map(({ name, id }) => (
                    <li key={id} className="text-center text-md-start">
                        <Link to="/" onClick={scrollUP}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
            {props.children && props.children}
        </Col>
    );
};

export default FooterCol;
