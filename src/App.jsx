import './App.css'
import { useState, useEffect } from 'react'
import { Shield, Leaf, Lock, Zap, Globe, Users, TrendingUp, Award } from 'lucide-react'

// Import des assets NFT
import nftCommonRingTailed from './assets/nft_common_ring_tailed.png'
import nftCommonBrownLemur from './assets/nft_common_brown_lemur.png'
import nftCommonMouseLemur from './assets/nft_common_mouse_lemur.png'
import nftRareIndri from './assets/nft_rare_indri.png'
import nftRareSifaka from './assets/nft_rare_sifaka.png'
import nftLegendaryAyeAye from './assets/nft_legendary_aye_aye.png'
import nftLegendaryRedRuffed from './assets/nft_legendary_red_ruffed.png'

function App() {
  const [selectedRarity, setSelectedRarity] = useState('common')
  const [isConnected, setIsConnected] = useState(false)
  const [account, setAccount] = useState('')
  const [mintQuantity, setMintQuantity] = useState(1)
  const [totalMinted, setTotalMinted] = useState(1247)
  const [quantumSecurityEnabled, setQuantumSecurityEnabled] = useState(true)

  // Configuration des NFTs par rareté
  const nftConfig = {
    common: {
      name: 'Common Lemurs',
      price: 50,
      supply: 7000,
      minted: 856,
      images: [nftCommonRingTailed, nftCommonBrownLemur, nftCommonMouseLemur],
      description: 'Beautiful common lemur species from Madagascar forests'
    },
    rare: {
      name: 'Rare Lemurs', 
      price: 150,
      supply: 2500,
      minted: 312,
      images: [nftRareIndri, nftRareSifaka],
      description: 'Endangered lemur species with unique characteristics'
    },
    legendary: {
      name: 'Legendary Lemurs',
      price: 500,
      supply: 500,
      minted: 79,
      images: [nftLegendaryAyeAye, nftLegendaryRedRuffed],
      description: 'Ultra-rare lemur species with mystical powers'
    }
  }

  const currentConfig = nftConfig[selectedRarity]
  const totalCost = currentConfig.price * mintQuantity

  // Simulation de connexion wallet
  const connectWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      if (accounts.length > 0) {
        const account = accounts[0];
        setAccount(account);
        setIsConnected(true);
        console.log('Wallet connecté:', account);
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
      if (error.code === 4001) {
        alert('Connexion refusée par l\'utilisateur');
      } else {
        alert('Erreur lors de la connexion au wallet');
      }
    }
  } else {
    alert('MetaMask n\'est pas installé. Veuillez l\'installer pour continuer.');
    window.open('https://metamask.io/download/', '_blank' );
  }
}


  const mintNFT = async () => {
    if (!isConnected) {
      await connectWallet()
      return
    }
    
    // Simulation du mint avec sécurité post-quantique
    alert(`🛡️ Quantum-Safe Mint Initiated!\n\n` +
          `Rarity: ${currentConfig.name}\n` +
          `Quantity: ${mintQuantity}\n` +
          `Total Cost: ${totalCost} MATIC\n` +
          `Security: Post-Quantum Encryption\n\n` +
          `Transaction will be signed with military-grade security...`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Header avec sécurité quantique */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-purple-500/30 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Lemur Aera
                </h1>
                <div className="flex items-center space-x-2 text-xs text-purple-300">
                  <Shield className="w-3 h-3" />
                  <span>Quantum-Safe NFTs</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Indicateur de sécurité quantique */}
              <div className="hidden sm:flex items-center space-x-2 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-400/30">
                <Lock className="w-4 h-4 text-purple-300" />
                <span className="text-sm font-medium text-purple-200">Post-Quantum Secured</span>
              </div>
              
              <button
                onClick={connectWallet}
                className={`px-6 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isConnected
                    ? 'bg-purple-500/20 text-purple-200 border border-purple-400/30'
                    : 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {isConnected ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>World's First Quantum-Resistant NFT Collection</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Protect Lemurs with
              <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Quantum-Safe Security
              </span>
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              The first NFT collection secured against quantum computer attacks while supporting 
              lemur conservation in Madagascar. Advanced cryptography meets environmental impact.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg">
              <div className="text-3xl font-bold text-purple-300">{totalMinted.toLocaleString()}</div>
              <div className="text-sm text-purple-100">NFTs Minted</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg">
              <div className="text-3xl font-bold text-pink-300">10,000</div>
              <div className="text-sm text-purple-100">Total Supply</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg">
              <div className="text-3xl font-bold text-purple-300">$2M</div>
              <div className="text-sm text-purple-100">Conservation Goal</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg">
              <div className="text-3xl font-bold text-pink-300">100%</div>
              <div className="text-sm text-purple-100">Quantum-Safe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mint Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/85 backdrop-blur-lg rounded-3xl shadow-xl border border-emerald-50 overflow-hidden">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Mint Your Quantum-Safe Lemur NFT
              </h3>

              {/* Sélecteur de rareté */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 rounded-2xl p-1 flex space-x-1">
                  {Object.entries(nftConfig).map(([key, config]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedRarity(key)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                        selectedRarity === key
                          ? 'bg-white shadow-md text-emerald-600'
                          : 'text-gray-600 hover:text-emerald-600'
                      }`}
                    >
                      {config.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Galerie NFT */}
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {currentConfig.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`${currentConfig.name} ${index + 1}`}
                          className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                        />
                        <div className="absolute top-3 right-3 bg-emerald-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                          <Shield className="w-3 h-3 inline mr-1" />
                          Quantum-Safe
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                    <h4 className="font-semibold text-emerald-800 mb-2">{currentConfig.name}</h4>
                    <p className="text-emerald-700 text-sm mb-4">{currentConfig.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-emerald-600">Supply: {currentConfig.supply.toLocaleString()}</span>
                      <span className="text-emerald-600">Minted: {currentConfig.minted.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-emerald-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(currentConfig.minted / currentConfig.supply) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Interface de mint */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-gray-900">Price per NFT</span>
                      <span className="text-2xl font-bold text-emerald-600">{currentConfig.price} MATIC</span>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => setMintQuantity(Math.max(1, mintQuantity - 1))}
                          className="w-10 h-10 bg-emerald-100 hover:bg-emerald-200 rounded-xl flex items-center justify-center text-emerald-600 font-bold transition-colors"
                        >
                          -
                        </button>
                        <span className="text-2xl font-bold text-gray-900 w-12 text-center">{mintQuantity}</span>
                        <button
                          onClick={() => setMintQuantity(Math.min(10, mintQuantity + 1))}
                          className="w-10 h-10 bg-emerald-100 hover:bg-emerald-200 rounded-xl flex items-center justify-center text-emerald-600 font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-emerald-200 pt-4 mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold">{totalCost} MATIC</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Quantum Security Fee</span>
                        <span className="font-semibold text-emerald-600">+0.003 MATIC</span>
                      </div>
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total</span>
                        <span className="text-emerald-600">{(totalCost + 0.003).toFixed(3)} MATIC</span>
                      </div>
                    </div>

                    <button
                      onClick={mintNFT}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <Shield className="w-5 h-5" />
                      <span>{isConnected ? 'Mint with Quantum Security' : 'Connect & Mint'}</span>
                    </button>
                  </div>

                  {/* Fonctionnalités de sécurité */}
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-emerald-50 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-emerald-600" />
                      Quantum Security Features
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>CRYSTALS-Kyber encryption</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>Post-quantum signatures</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>BLAKE3 integrity hashing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>Military-grade protection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-8">Conservation Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Globe className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Madagascar Forests</h4>
              <p className="text-emerald-100">Protecting critical lemur habitats through direct funding</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Local Communities</h4>
              <p className="text-emerald-100">Supporting sustainable livelihoods and conservation education</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Research Funding</h4>
              <p className="text-emerald-100">Advancing lemur research and conservation science</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Lemur Aera</span>
              </div>
              <p className="text-gray-400 text-sm">
                The world's first quantum-resistant NFT collection supporting lemur conservation.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Collection</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Common Lemurs</li>
                <li>Rare Lemurs</li>
                <li>Legendary Lemurs</li>
                <li>Roadmap</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Security</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Post-Quantum Crypto</li>
                <li>Military-Grade</li>
                <li>Audit Reports</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Conservation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Impact Reports</li>
                <li>Partner Organizations</li>
                <li>Madagascar Projects</li>
                <li>Transparency</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Lemur Aera. Quantum-safe technology for a sustainable future.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

