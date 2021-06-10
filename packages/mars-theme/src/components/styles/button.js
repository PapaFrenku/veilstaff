import {styled} from 'frontity';

const Button = styled.button`
    background: ${props => props.bgColor};
    color: ${props => props.color};
    border: 2px solid ${props => props.brColor};
    
    height: 60px;
    display: inline-flex;
    align-items: center;
    padding-left: 35px;
    padding-right: 35px;
    width: fit-content;
    outline: none;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.35s ease-out;
    font-weight: 600;
    
    &:hover {
        opacity: 0.8;
    }

    & span::after {
        content: "";
        height: 2px;
        display: block;
        transition: 0.2s;
        border-top: 2px dashed ${props => props.color};
    }
`

export default Button