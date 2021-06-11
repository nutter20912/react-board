import { BrowserRouter, Route } from "react-router-dom";
import {Login} from './pages/login';
import {Admin} from './pages/admin';
import { memory, storage } from '../js/utils';


const App = () => {
  memory.user = storage.get('user');

  const isLogin = () => {
    return memory.user && Object.keys(memory.user).length !== 0;
  }

  return (
      <BrowserRouter>
        <Route
          path='/'
          strict
          render={(props) => (
            isLogin()
              ? <Admin/>
              : <Login />
          )}
        />
      </BrowserRouter>
  );
}

export default App;
