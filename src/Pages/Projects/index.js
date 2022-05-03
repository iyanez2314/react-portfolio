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
                <Card.Text className="mx-5 d-none d-lg-block">
                Paw walkers is a full-stack website that was built with a few of my classmates. Some of the technologies that were used were MySQL, Node.js, Sequelize ORM, Bulma CSS as well as custom API with CRUD operations. For future development, we would like to create a dashboard for the owners to add or delete pets associated with them as well as book appointments with Paw Walkers.
                </Card.Text>
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
                <Card.Text className="mx-5 d-none d-lg-block">
                My Anime Finder was built by a few of my fellow classmates as well as me. This website is a reverse image search for any anime photo. As well as a info seach on any anime that the user inputs.
                </Card.Text>
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