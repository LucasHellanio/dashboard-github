import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {BsTrash} from 'react-icons/bs'
import {EventEmitter} from '../../events';
import './modalStyler.css'

const DeleteModalRepo = ({cardObj}) => {
  const [modal, setModal] = useState(false);
  // const [textInput, setTextInput] = React.useState('');

  const toggle = () => setModal(!modal);

  // const handleChange = (event) => {
  //   setTextInput(event.target.value);
  // }
 const deleteRepository = () => {
  EventEmitter.dispatch('remove', cardObj);
  toggle();
 }
  return (
    <div >
         <Button color="link"  onClick={toggle}><BsTrash/></Button> 
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader className="header-delete-styler" toggle={toggle}>Delete Repository</ModalHeader>
            <ModalBody>
            Are you sure to delete the repository?
            </ModalBody>
            <ModalFooter>
              <Button className="cancel-button-styler" onClick={toggle}>Cancel</Button>
              <Button className="delete-button-styler" onClick={deleteRepository} >Delete</Button>
            </ModalFooter>
        </Modal>
    </div>
  );
}

export default DeleteModalRepo;