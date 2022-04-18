import Modal from 'react-modal';

interface NewTransactionalModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionalModalProps){
    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
    >
        <h2>Cadastrar Transação</h2>
    </Modal>
    );
}