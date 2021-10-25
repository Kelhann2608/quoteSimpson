import React from 'react';


const QuoteCard = ({ simpson }) => (
  <figure className="QuoteCard">
    <img src={simpson.image} alt={simpson.character} />
    <figcaption>
      <blockquote>{simpson.quote}</blockquote>
      <cite>{simpson.character}</cite>
    </figcaption>
  </figure>
);

export default QuoteCard;
