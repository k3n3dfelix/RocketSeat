import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary () {

    //const data = useContext(TransactionsContext);

    const {transactions} = useContext(TransactionsContext);
    
    // const totalDeposits = transactions.reduce((acc, transaction) =>{
    //     if(transaction.type == 'deposit'){
    //         return acc + transaction.amount
    //     }
    //     return acc;
    // }, 0);

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type == 'deposit'){
             acc.deposits += transaction.amount; 
             acc.total += transaction.amount;      
        }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
           return acc;     
    }, {
        deposits:0,
        withdraws:0,
        total:0,
    })

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
                <strong>{new Intl.NumberFormat('pt-BR',{style:'currency', currency: 'BRL'}).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>-  {new Intl.NumberFormat('pt-BR',{style:'currency', currency: 'BRL'}).format(summary.withdraws)}</strong>
            </div>
            <div className="highLight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{style:'currency', currency: 'BRL'}).format(summary.total)} </strong>
            </div>
        </Container>
    )
}