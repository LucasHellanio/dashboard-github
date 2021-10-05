import React from 'react';
import CardRepository from '../Card/cards-github'
import {EventEmitter} from '../../events';
import '../Card/cardsStyler.css'

class CardListGithub extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cardData: [],
        originalData: []
      };
      
      EventEmitter.subscribe('data', (cardData) => {
        this.state.cardData.push(cardData);
        this.state.originalData.push(cardData);
        this.forceUpdate()
      });
      EventEmitter.subscribe('filter', (filterValue) => {
        var filterArray = this.state.cardData.filter(function (el) {
          return el.name.includes(filterValue) 
        });
        if(filterValue == ""){
          this.state.cardData = this.state.originalData;
        }
        else{
          this.state.cardData = filterArray;
        }
        this.forceUpdate()
      });
      EventEmitter.subscribe('remove', (cardObj) => {
        let indexDelete = this.state.cardData.indexOf(cardObj);
        this.state.cardData.splice(indexDelete, 1);
        this.forceUpdate()
      });
    }
    render() {
      var listRepository = this.state.cardData.map(function(repository) {
        return (
            <CardRepository repository={repository}></CardRepository>   
        );
      });
        return (
       <div className="display-cards">
         {listRepository}
       </div>
    );
    }
  };

export default CardListGithub;