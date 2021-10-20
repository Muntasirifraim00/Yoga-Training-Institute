import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Zoom from "react-reveal/Zoom";
import useAuth from "../../hooks/useAuth.js";
import { Link, NavLink } from "react-router-dom";

library.add(fullStar, emptyStar);

function Course(props) {
  const { key, img,name,description } = props.course;
  const { addToCart } = useAuth();
  return (
    <Col className="my-3" md={4}>
      <Zoom>
        <Card style={{ minHeight: "480px" }}>
          <Card.Img className="img-thumbnail"  src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-muted">{description}</Card.Text>
           
            <Link to={`/booking/${description}`}>
               <div className=" text-center "> <button className="btn btn-warning ">Description {key.toLowerCase()}</button></div>
            </Link>
           
          </Card.Body>
        </Card>
      </Zoom>
    </Col>
  );
}

export default Course;
