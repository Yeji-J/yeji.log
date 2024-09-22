import styled from '@emotion/styled'

export default function Symbol() {
  return (
    <SymbolWrapper>
      <SymbolContent>yeji.log</SymbolContent>
    </SymbolWrapper>
  )
}

const SymbolWrapper = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SymbolContent = styled.div`
  width: 18rem;
  height: 6rem;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  text-align: center;
`
