import {styled} from 'frontity'
import config from '../../config'

const CompanyNumber = styled.a`
    margin: 0;
    font-weight: 700;
    color: #000;
    font-size: 18px;
    transition: .2s;

    &:hover {
        color: ${config.collors.secondary};
    }
`

export default CompanyNumber;