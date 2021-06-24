import React from 'react'
import Container from 'react-bootstrap/Container'

function Success() {
    return (
        <section id="success" className="my-5 py-5">
            <Container className="d-flex flex-column align-items-center">
                          <i class="fas fa-check-circle tick fa-4x mb-3"></i> 
           <p className="succ-msg text-center">Form successfully submitted!</p> 
           </Container>
        </section>
    )
}

export default Success

