import styled from 'styled-components'

export const CharacterDetailsLoaderWrapper = styled.div`
  display: flex;
  width: 30rem;
  flex-direction: column;
  height: 38rem;
  border-radius: 2rem;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  object-fit: contain;
  border-radius: 2rem;

  @media (max-width: 460px) {
    width: 100%;
  }
`
