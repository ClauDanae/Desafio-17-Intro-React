import React from "react";
import {default as BCard} from 'react-bootstrap/Card';

const Card = (props) => {
    const { imgname, imgdescr, imgpicture } = props;

    return (
        <BCard style={{ width: '15rem' }}>
            <BCard.Img variant="imageBCard" src={imgpicture} />
            <BCard.Body>
                <BCard.Title>{imgname}</BCard.Title>
                <BCard.Text>
                   {imgdescr}
                </BCard.Text>
            </BCard.Body>
        </BCard>
    )
}
export default Card