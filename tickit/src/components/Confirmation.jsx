import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Confirmation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

        <button onClick={handleShow}className="submit-btn">
        Submit
        </button>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for your purchase. Enjoy the Show!!
        </Modal.Body>
        <Modal.Footer>
          <Link to="/"><Button variant="primary" onClick={handleClose}>
            Close
          </Button></Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Confirmation