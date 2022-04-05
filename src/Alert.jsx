import { Button, Modal } from 'react-bootstrap'

export default function Alert ({ alert, setAlert }) {
  const handleClose = () => {
    // after clicked the confirm button, the page will reload
    window.location.reload(false)
    // when get API error, the Alert window will show up
    setAlert(false)
  }
  return (
    <Modal show={alert} onHide={handleClose} centered>
      <Modal.Body>
        <p>
          Oops, there seems to be an error
          <br />
          (wrong IP address)
        </p>
        <Button variant='outline-secondary' onClick={handleClose}>
          Back to Home
        </Button>
      </Modal.Body>
    </Modal>
  )
}
