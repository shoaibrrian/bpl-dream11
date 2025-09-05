import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './App.css'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import Players from './components/players/Players'
import SelectedPlayers from './components/selectedPlayers/SelectedPlayers';

function App() {
  const [coins, setCoins] = useState(0);
  
  const handleAddCoins = () => {
    setCoins(coins + 600000);
    toast.success('Successfully Claimed!');
  }

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handleAddPlayer = player =>{
    const newSelectedPlayers = [...selectedPlayers, player];
    setSelectedPlayers(newSelectedPlayers);
    toast.success('Player Added Successfully!');
    console.log(newSelectedPlayers);
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
      <Players handleAddPlayer={handleAddPlayer}></Players>
      <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>
    </>
  )
}

export default App
