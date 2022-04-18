import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <header>
                    <img src={logoImg} alt="dt money"></img>
                    <button>Nova Transação</button>
                </header>
            </Content>
        </Container>
    )
}