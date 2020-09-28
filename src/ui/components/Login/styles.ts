import { Grid } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled(Grid)`
  position: relative;
  left: 50%;
  top: 50%;

  flex-direction: column;
  align-items: center;

  transform: translate(-50%, 20%);

  z-index: 9;

  @media screen and (min-width: 768px) {
    transform: translate(-50%, 50%);
  }
`

export const ContainerBlock = styled(Grid)`
  background: #fff;
  border-radius: 6px;

  padding: 50px 25px;

  > div {
    align-items: center;
    flex-direction: column;

    > div {
      width: 80%;

      > div {
        width: 100%;
      }
    }
  }
`

export const ButtonsActions = styled(Grid)`
  text-align: center;

  > button:first-child {
    width: 80%;
    margin-bottom: 10px;
  }

  button {
    width: 100%;
  }
`
