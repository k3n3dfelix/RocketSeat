import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary () {

    //const data = useContext(TransactionsContext);

    const transactions = useContext(TransactionsContext);
    console.log(transactions);
    return (
        //Usando API Antiga React Render Props
        <Container>

        
            {/* <TransactionsContext.Consumer>
                {(data)=>{
                    console.log(data)
                    return <p></p>
                }}
            </TransactionsContext.Consumer> */}


            <div >
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 6000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>- R$ 1000,00</strong>
            </div>
            <div className="highLight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ 5000,00</strong>
            </div>
        </Container>
    )
}