import React from 'react'
import axios from 'axios'
import Quotecard from './QuoteCard'


class QuoteList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        personnage: {character : 'nom'}
    }
      this.getPersonnage = this.getPersonnage.bind(this);
  
    }
    getPersonnage() {
      axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
        
        .then(response => response.data)
     
        .then(data => {
          this.setState({
            personnage: data[0],
          });
      });
    }
  
  
    render() {
        
            return (
              <div>
               <Quotecard personnage={this.state.personnage} />
               <button type="button" onClick={this.getPersonnage}>Get personnage</button>
              </div>
            );
          
  }

}
  
  
  
  
  
  export default QuoteList;
  