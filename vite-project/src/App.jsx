import { Card } from './components/card/card'
import { CardBody } from './components/card/cardBody'
import { CardFooter } from './components/card/cardFooter'
import { CardHeader } from './components/card/cardHeader'
import { TitleComponent } from './components/title/title'



function App() {

  const cardData = {
    textContent: "This is the main content of the card.",
    title: "Card Title",
    footerContent: "Card Footer Content"
  };


  return (
    
    <div className="App">
        <TitleComponent
          title="Welcome to My Page"
          subtitle="This is a subtitle"
          >
          <p>This is a child component.</p>
          <p>Another child component.</p>
        </TitleComponent>
        <Card >
        <CardHeader text= {cardData.title}/>
          <CardBody content = {cardData.textContent}/>
          <CardFooter content = {cardData.footerContent}/>
        </Card>
    </div>
  )
}

export default App
