import React from "react";
import { Card, Button, Stack } from 'react-bootstrap'
import Image from '../../Assets/isaac-yanez-background.png'

function Projects () {
    return (
    <section className="bg-light mt-5 pb-3">
        <div className="container-lg">
           <div className="text-center py-4">
                <h2>
                    Projects
                </h2>
                </div>

<div className="row my-3 align-items-center justify-content-center g-3">
<div className="col-8 col-lg-4 col-xl-3">
        <Card className="border-0">
    <Card.Body className="text-center py-4">
        <Card.Title><h4>Paw walkers</h4></Card.Title>
        <Card.Subtitle className="mb-2 text-muted py-2">Technologies used</Card.Subtitle>
        <Card.Subtitle className="mb-2 py-2 ">Handlebars.js, MySQL, Sequelize ORM, Bulma, and custom API using CRUD operations</Card.Subtitle>
                <Stack gap={1} className="col-md-6 mx-auto">
                <Button className="btn-outline btn-md mt-3" href="https://iyanez2314-dogwalking.herokuapp.com/login" target="_blank">Live website</Button>
                <Button className="btn-outline btn-md mt-3" href="https://github.com/iyanez2314/dog-walkers" target="_blank">Code</Button>
                </Stack>
    </Card.Body>
    </Card>
    </div>

    <div className="col-8 col-lg-4 col-xl-3">
        <Card className="border-0">
    <Card.Body className="text-center py-4">
        <Card.Title><h4>My Anime</h4></Card.Title>
        <Card.Subtitle className="mb-2 text-muted py-2">Technologies used</Card.Subtitle>
        <Card.Subtitle className="mb-2 py-2 ">HTML, JavaScript, CSS, 3rd party API's</Card.Subtitle>
                <Stack gap={1} className="col-md-6 mx-auto">
                <Button className="btn-outline btn-md mt-3" href="https://ethanrugh.github.io/project-1/" target="_blank">Live website</Button>
                <Button className="btn-outline btn-md mt-3" href="https://github.com/EthanRugh/project-1" target="_blank">Code</Button>
                </Stack>
    </Card.Body>
    </Card>
    </div>

</div>    
            </div>
        </section>    
    )
}

export default Projects;