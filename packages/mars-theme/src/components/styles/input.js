import {styled} from 'frontity'

const Input = styled.input`
    background: transparent;
    border: 2px solid ${props => props.brCol || '#E5E5E5'};
    
    height: 60px;
    display: inline-flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    color: #E5E5E5;
    font-size: 18px;
    line-height: 19px;
    
    &::placeholder {
        color: #E5E5E5;
        font-size: 16px;
        line-height: 19px;
    }
    width: 100%;
    outline: none;
    border-radius: 16px;
`

export default Input;