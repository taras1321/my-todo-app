import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Info from './pages/info'
import MainPage from './pages/mainPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/info" component={Info} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
