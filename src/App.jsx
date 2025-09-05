import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './App.css'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import Players from './components/players/Players'
import Footer from './components/footer/Footer';

function App() {
  const [coins, setCoins] = useState(0);

  const handleAddCoins = () => {
    setCoins(coins + 600000);
    toast.success('Successfully Claimed!');
  }

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handleAddPlayer = (player) => {
    // Duplicate check (optional)
    if (selectedPlayers.find(p => p.id === player.id)) {
      toast.error('This player is already selected!');
      return;
    }

    if (selectedPlayers.length >= 6) {
      toast.error("You can only select up to 6 players!");
      return;
    }

    if (coins < player.price) {
      toast.error("Not enough coins to select this player!");
      return;
    }

    // Deduct coins
    setCoins(coins - player.price);

    const newSelectedPlayers = [...selectedPlayers, player];
    setSelectedPlayers(newSelectedPlayers);
    toast.success('Player Added Successfully!');
  }

  return (
    <>
      <div className='max-w-7xl mx-auto px-8 pt-8'>
        <Header coins={coins} />
        <Banner handleAddCoins={handleAddCoins} />

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />

        {/* ✅ Pass selectedPlayers into Players */}
        <Players
          handleAddPlayer={handleAddPlayer}
          selectedPlayers={selectedPlayers}
          coins={coins}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
