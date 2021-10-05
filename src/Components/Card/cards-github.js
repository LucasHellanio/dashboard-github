import './cardsStyler.css'
import React from 'react'
import { Card, Button, CardHeader, CardBody, CardText } from 'reactstrap'
import {AiOutlineStar} from 'react-icons/ai'
import DeleteModalRepo from '../Modal/delete-modal-repository'

const CardRepository = ({repository}) => {
  return (
    <div className="adjustment-card">
        <Card>
                <CardHeader> {repository.name} 
                    <div className="button-spacing-adjustment">
                        <Button color="link"><AiOutlineStar/></Button> 
                        <DeleteModalRepo cardObj={repository}></DeleteModalRepo>
                    </div>
                </CardHeader>
                <CardBody>
                    <CardText>Stars: {repository.stars}</CardText>
                    <CardText>Forks: {repository.forks}</CardText>
                    <CardText>Open Issues: {repository.openIssues}</CardText>
                    <CardText>Age: {repository.age}</CardText>
                    <CardText>Last Commit:{repository.lastCommit}</CardText>
                    <CardText>Lincense: {repository.lincense}</CardText>
                    <CardText>Language: {repository.language}</CardText>
                </CardBody>
        </Card>
    </div>
  );
};

export default CardRepository;