import React from 'react'
import './QuoteCard.css'

const QuoteCard = ({personnage})=>{
   
      return (
        <figure className="QuoteCard">
          <img src={personnage.image} alt={personnage.character} />
          <figcaption>
            <blockquote>{personnage.quote}</blockquote>
            <p>
                <cite>{personnage.character}</cite>
            </p>
            <p>
                <cite>{personnage.characterDirection}</cite>
            </p>
          </figcaption>
        </figure>
      );
    
  }
  
  export default QuoteCard;