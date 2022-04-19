import React from "react";
import { Card, Button } from 'react-bootstrap'
import Image from '../../Assets/isaac-yanez-background.png'

function Projects () {
    return (
    <section className="bg-light mt-5 pb-5">
        <div className="container-lg">
           <div className="text-center">
                <h2>
                    Projects
                </h2>
                </div>

            <div className="row my-5 align-items-center justify-content-center">
                <div className="col-8 col-lg-4 col-xl-3">
<Card className="card border-0">
    <Card.Body className="text-center py-4">
        <Card.Title><h4>Card Title</h4></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text className="mx-5">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
                    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
        </Card.Body>
</Card>
                </div>
            </div>    
            </div>
        </section>    
    )
}

export default Projects;