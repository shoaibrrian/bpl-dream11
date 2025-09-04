import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './App.css'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import Players from './components/players/Players'

function App() {
  const [coins, setCoins] = useState(0);
  
  const handleAddCoins = () => {
    setCoins(coins + 600000);
    toast.success('Successfully Claimed!');
  }

  return (
    <>
      <Header coins={coins}></Header>
      <Banner handleAddCoins={handleAddCoins}></Banner>
      <ToastContainer
        position="top-center"
        autoClose={3000}   // 3 seconds e close
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <Players></Players>
    </>
  )
}

export default App
