import React from "react";
import bgImage from "./../../assets/images/sectionBg.png";
import Bg from "./../../assets/images/bg.png";
import { Container,Card, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Course from "./../course/Course.js";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import useCourses from "../../hooks/useCourses.js";
import "../Home/Home.css"
import img4 from "./4.jpg"
import img1 from "./1.jpg"
import img2 from "./2.jpg"
import img3 from "./3.jpg"
import img5 from "./5.jpg"

const Home = () => {
  const history = useHistory();
  const [courses] = useCourses();
  const featureCourses = courses;
  function GoServices() {
    history.push("/courses");
  }

  return (
    <div>
      <div className="header">
        <h2 className="h2-design">Full Body Workouts That Leave You Energized</h2>
        <h1 className="">GO BEYOND YOUR LIMITS</h1>
      </div>
      <div>
        <Container className="py-5">
          <Slide left>
            <h2 className="text-center  mb-2">Featured Courses</h2>
          </Slide>
          <Slide right>
            <p className="text-muted text-center">
              Here you can find our all latest courses. Choose some of them and
              try to grow up your skills.
            </p>
          </Slide>

          <div id="carouselExampleIndicators" class="carousel slide w-75 mx-auto text-center" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <br />



          <Row>
            {featureCourses?.map((course) => (
              <Course course={course} key={course.key}></Course>
            ))}
          </Row>
        </Container>

        <div className="d-flex">
        <div className="w-50 mx-5">
          <div className="mb-3">
            <input type="email" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Enter Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Enter Phone Number" />
          </div>
          <div className="mb-3">
            <textarea className="form-control form-control-lg" placeholder="Enter Massage" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="button" class="btn btn-lg px-5 py-2 btn-warning">Send Massage</button>
        </div>
        <div>
          {/* <img src={img4} className=" image-css " id="cardImg" alt="..." /> */}
          <img className=" image-css  " src={img4} alt=""></img>
        </div>
      </div>
      <br />     <br />

      <div className="d-flex mx-5  gap-4   " >
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img4} />
          <Card.Body>
            <Card.Title>Hatha Yoga</Card.Title>
          </Card.Body>
        </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img5} />
          <Card.Body>
            <Card.Title>Bikram yoga</Card.Title>
          </Card.Body>
        </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Aerial Yoga</Card.Title>
          </Card.Body>
        </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title>Power Yoga</Card.Title>
          </Card.Body>
        </Card>
        </div>
      </div>

      <br />     <br />     <br />
      </div>
    </div>
  );
};

export default Home;
