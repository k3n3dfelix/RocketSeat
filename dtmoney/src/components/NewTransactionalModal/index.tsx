import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, RadioBox, TransactionalTypeContainer } from './styles';

interface NewTransactionalModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionalModalProps){

    const [type, setType] = useState('deposit');

    
    
    return (
    <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
            <img src={closeImg} alt="Fechar Modal"/>
        </button>

        <Container>
            <h2>Cadastrar Transação</h2>

            <input placeholder="Título"/>
            <input type="number" placeholder="Valor" />
            <TransactionalTypeContainer>
                <RadioBox type="button"  onClick={() => {setType('deposit');}} isActive={type == 'deposit'}>
                    <img src={incomeImg}  alt="Entrada"/><span>Entrada</span>
                </RadioBox>
                <RadioBox type="button"  onClick={() => {setType('withdraw')}} isActive={type == 'withdraw'}>
                    <img src={outcomeImg} /><span>Saída</span>
                </RadioBox>
            </TransactionalTypeContainer>
            <input type="text" placeholder="Categoria" />
            <button type="submit">Cadastrar</button>
           
        
        </Container>
    </Modal>
    );
}