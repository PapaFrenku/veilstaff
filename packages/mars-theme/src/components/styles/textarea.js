import {styled} from 'frontity'

const TextArea = styled.textarea`
    background: transparent;
    border: 2px solid ${props => props.brCol || '#E5E5E5'};
    
    height: 60px;
    display: inline-flex;
    align-items: center;
    padding: 20px;
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
    height: ${props => props.height};
    resize: none;
`

export default TextArea;