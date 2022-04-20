import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';

function Contact () {
    return (
        <section className='bg-light mt-5 pb-3' id="contact-form">
            <div className='container-lg'>
                <div className='text-center py-4'>
                    <h2>
                        Lets chat!
                    </h2>
                </div>

            <div className='row my-5 align-items-center justify-content-center'>
    <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel
                controlId='floatingInput'
                label='Email address'
                className='mb-3'
                >
                    <Form.Control type="email" placeholder="Enter email" />
                </FloatingLabel>    
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel
                controlId='floatingInput'
                label='Phone Number'
                className='mb-3'
                >
                <Form.Control type="phoneNumber" placeholder="Phone number" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingTextarea2" label="Message">
            <Form.Control
            as="textarea"
            placeholder="Message"
            style={{ height: '100px' }}
            />
            </FloatingLabel>
            </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
               
    </Form>
            </div>    
            </div>
        </section>
    )
}

export default Contact;