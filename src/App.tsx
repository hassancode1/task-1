import {useState, useEffect} from "react"
import './App.css'
import Sidecomponents from './components/Sidecomponents'
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
function App() {
  const url = "http://127.0.0.1:4010/api/682.5711574446319/programs/ut/application-form"
  const [data, setData] = useState<[]>([]);

  async function fetchData() {
    try {
   
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
     
    } 
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data)
  return (
    <>
    <div className='App'>  
     
        <div className="SideMenuAndPageContent">
 <Sidecomponents />
 <div className='PageContent'>
 <Routes>
        <Route path="/" element={<> <Home/></>} />
       
        </Routes>
        </div>
 </div>
 </div>

    </>
  )
}

export default App
