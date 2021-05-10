import React from 'react'
import styled from "styled-components"

const Container =styled.span``;

interface IProps {
    count: number
}
// 함수형 component 에서는 함수명:React.FunctionComponent<interface object(ex:IProps)> or <{count:number}>
const Number:React.FunctionComponent<IProps> = ({count}) => <Container>{count}</Container>

export default Number;