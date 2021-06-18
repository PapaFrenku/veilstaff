import {styled} from 'frontity'
import config from '../../config'

const CompanyNumber = styled.a`
    margin: 0;
    font-weight: 700;
    color: #000;
    font-size: 18px;
    transition: .2s;
    display: flex;
    align-items: center;
    & svg {
        width: 15px;
        height: 15px;
    }
    & span {
        display: inline-block;
        margin-left: 5px;
        font-size: inherit;
    }
    &:hover {
        color: ${config.collors.secondary};
    }

    /* @media(max-width: 1205px) {
        & .telNumber {
            display: none;
        }
    } */
`

export default CompanyNumber;