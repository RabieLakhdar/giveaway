import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-image: linear-gradient(to top, #fff 0%, rgba(237, 0, 0, 0.65) 100%);

  main {
    flex: 1 0 auto;
    width: 100%;
    max-width: 1400px;
    margin: 34px auto 0 auto;
    background: #ffffff;
    border-radius: 10px;
  }
`
