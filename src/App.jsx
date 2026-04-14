import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import AnalyticalBalance from './pages/AnalyticalBalancer.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<AnalyticalBalance/>} />
      </Routes>
    </>
  )
}

export default App;