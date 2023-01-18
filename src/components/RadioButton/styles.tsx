import styled from 'styled-components';

export const Checkbox = styled.input`
    display: grid;
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 0 10px;
    font-size: 16px;
    outline: none;
    &:focus {
        border-color: #333;
    }
`;
