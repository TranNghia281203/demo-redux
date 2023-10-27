import './App.css';
import TrangChu from './pages/trang_chu';

import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store}>
    <TrangChu/>
    </Provider>
    </>
  );
}

export default App;
