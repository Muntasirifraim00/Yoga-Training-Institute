import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import useCourses from "../../hooks/useCourses.js";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import useAuth from "../../hooks/useAuth.js";

const CourseDetails = () => {
  const [courses] = useCourses();
  const { addToCart } = useAuth();
  console.log(courses);
  const { serviceId } = useParams();
  // const newSelected = courses?.find((course) => course.serviceId === Number(serviceId));

  return (
    <div className="my-5">
      <Row>
        <Col>
          {/* <img width="100%" src={newSelected?.img} alt="" /> */}
        </Col>
        <Col className="p-3">
     
          <h4>{serviceId}</h4>
        
        </Col>
      </Row>
    </div>
  );
};
export default CourseDetails;
