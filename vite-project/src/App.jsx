import './App.css'
import { TitleComponent } from './components/title/title'

function App() {


  return (
    
    <div className="App">
        <TitleComponent title="Welcome to My Page" subtitle="This is a subtitle">
            <p>This is a child component.</p>
            <p>Another child component.</p>
        </TitleComponent>
    </div>
  )
}

export default App
