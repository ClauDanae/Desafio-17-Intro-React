import React from "react";
import Badge from 'react-bootstrap/Badge';

const Footer = (props) => {
    const { description } = props;
    return <footer>{description}
    <Badge bg="black">New!</Badge>
    </footer>
}

export default Footer