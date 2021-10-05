import React, { useState } from 'react';
import { Button,Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {EventEmitter} from '../../events';
import './modalStyler.css'

const ModalAddRepo = (props) => {
  const [modal, setModal] = useState(false);
  const [inputRepositoryName, setInputRepositoryName] = React.useState('');
  var cardData = {name: '', 
  stars: null,
  forks: null,
  openIssues: null,
  age: '',
  lastCommit: '',
  lincense: '',
  language: ''}


  const toggle = () => setModal(!modal);

  const handleChange = (event) => {
    setInputRepositoryName(event.target.value);
  }
 
   const getPromiseResult = (res) => {
    res.then(function(result) {
      if(result.message){
        alert('Repository does not exist');
        toggle();
      }else{
        cardData.name = result.full_name;
        cardData.stars = result.stargazers_count;
        cardData.forks = result.forks_count;
        cardData.openIssues = result.open_issues;
        cardData.age = result.open_issues;
        cardData.lastCommit = result.updated_at;
        cardData.lincense = null; // quebra quando n tem
        cardData.language = result.language;
        EventEmitter.dispatch('data', cardData);
        toggle();
      }
    });
   }
   
  function getRepository() {
      fetch(
      `https://api.github.com/repos/${inputRepositoryName}`,
      {method: 'GET'}
    ).then(res => getPromiseResult(res.json()));

  } 
  
  return (
    <div>
        <Button  color="primary" onClick={toggle}>+</Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>New Repository</ModalHeader>
            <ModalBody>
                Repository
                <Input  onChange={handleChange}  placeholder="user/repository"/>
            </ModalBody>
            <ModalFooter>
              <Button className="cancel-button-styler" onClick={toggle}>Cancel</Button>
              <Button color="primary" onClick={getRepository} >Add</Button>
            </ModalFooter>
        </Modal>
    </div>
  );
}

export default ModalAddRepo;