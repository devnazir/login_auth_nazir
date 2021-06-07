import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/App.css'
import { routes } from '../routes'

function App() {
  return (
    <div className="App">
      <Router>
        {routes.map((route, id) => {
          return (
            <Route exact path={route.path} key={`page_${id}`}>
              <route.page />
            </Route>
          )
        })}
      </Router>
    </div>
  );
}

export default App;
