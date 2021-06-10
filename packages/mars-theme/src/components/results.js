import {styled, connect} from 'frontity';
import {Element} from 'react-scroll'

const Container = styled.div`
    padding-top: 50px;
    padding-bottom: 75px;
`

const Results = () => {
    return (
        <Element
            name="getting-started" className="getting-started" key={"display" + "getting-started"}
        >
        <Container>
            <div className="contaier">
                <h2 className="blockTitle">
                    Результаты работы программы
                </h2>
            </div>
        </Container>
        </Element>
    )
}

export default connect(Results);