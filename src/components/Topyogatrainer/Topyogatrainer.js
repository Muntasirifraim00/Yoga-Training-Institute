import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import img6 from "./6.jpg"
import img7 from "./7.jpg"
import img8 from "./8.jpg"
import img9 from "./9.jpg"
const Topyogatrainer = () => {
    return (
        <div>
            <h1 className="text-center">Best Yoga Trainer</h1>
            <br/>
            
            <div className="d-flex mx-5  gap-4 ">
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                            <Card.Title>Self Paced Online 200-Hour Multi Style Yoga Teacher Training - Hatha, Ashtanga, and Vinyasa</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button className="mx-5" variant="primary">See Details</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img7} />
                        <Card.Body>
                            <Card.Title>Online Self-Paced Certified 200 Hour Hatha, Ashtanga, Vinyasa, Yin, Ayurveda & Kundalini Yoga TTC</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button className="mx-5" variant="primary">See Details</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img8} />
                        <Card.Body>
                            <Card.Title>Self-Paced 90 Day 300-Hour Online Advanced Hatha, Vinyasa Flow, and Ashtanga Yoga Teacher Training</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button className="mx-5" variant="primary">See Details</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img9} />
                        <Card.Body>
                            <Card.Title>
                                28 Day 200-Hour self paced Multi Style Online Yoga Teacher Training</Card.Title>
                            <Card.Text>

                            </Card.Text>
                            <Button className="mx-5" variant="primary">See Details</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Topyogatrainer;