import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionalModal';
import { TransactionsProvider } from './TransactionsContext';


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionalModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <div className="App">
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard/>
        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionalModal}
        />
        <GlobalStyle></GlobalStyle>
     </TransactionsProvider>
    </div>
  );
}


