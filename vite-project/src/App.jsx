import React from 'react';
import { CardGrid } from './components/card/cardGrid';
import { TitleComponent } from './components/title/Title';
import cardImage1 from './assets/image.png';
import cardImage2 from './assets/image.png';
import cardImage3 from './assets/image.png';
import cardImage4 from './assets/image.png';
import cardImage5 from './assets/image.png';
import cardImage6 from './assets/image.png';


function App() {
  const cardData = [
    {
      title: 'Card 1',
      textContent: 'This is the content for card 1.',
      image: cardImage1,
      footerContent: 'Footer 1'
    },
    {
      title: 'Card 2',
      textContent: 'This is the content for card 2.',
      image: cardImage2,
      footerContent: 'Footer 2'
    },
    {
      title: 'Card 3',
      textContent: 'This is the content for card 3.',
      image: cardImage3,
      footerContent: 'Footer 3'
    },
    {
      title: 'Card 4',
      textContent: 'This is the content for card 4.',
      image: cardImage4,
      footerContent: 'Footer 4'
    },
    {
      title: 'Card 5',
      textContent: 'This is the content for card 5.',
      image: cardImage5,
      footerContent: 'Footer 5'
    },
    {
      title: 'Card 6',
      textContent: 'This is the content for card 6.',
      image: cardImage6,
      footerContent: 'Footer 6'
    }
  ];

  return (
    <div className="App">
      <TitleComponent
        title="Welcome to My Page"
        subtitle="This is a subtitle"
      >
        <p>This is a child component.</p>
        <p>Another child component.</p>
      </TitleComponent>
      <CardGrid cards={cardData} />
    </div>
  );
}

export default App;