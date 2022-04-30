import React, {useState} from "react";
import Toast from 'react-bootstrap/Toast';

export default function MessageToast() {

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <>
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>Please provide value in each input fields.</Toast.Body>
      </Toast>
    </>
  );
}
