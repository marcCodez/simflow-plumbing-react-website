import React from 'react'
import Container from 'react-bootstrap/Container'

function Success() {
    return (
        <section id="success" className="my-5 py-5">
            <Container className="d-flex flex-column align-items-center">
                          <i class="fas fa-check-circle tick fa-4x pb-2"></i> 
           <p className="succ-msg">Form Successfully Submitted!</p> 
           </Container>
        </section>
    )
}

export default Success

