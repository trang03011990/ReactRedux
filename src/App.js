import logo from './logo.svg';
import './App.css';
import HomeComponent from './BaiTapThucHanhLayout/HomeComponent';
import HomePage from './BaiTapGlasses/HomePage';
import './style.css';
import ShoesStore from './BaiTapChonGiay/ShoesStore';
import {store}from'./Redux/configStore'
import {Provider} from 'react-redux'
import BaiTapOanTuXi from './BaiTapOanTuXi/BaiTapOanTuXi';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BaiTapOanTuXi/>
      </Provider>
      {/* <ShoesStore/> */}
      {/* <HomePage/> */}
        {/* <HomeComponent/> */}
    </div>
  );
}

export default App;
