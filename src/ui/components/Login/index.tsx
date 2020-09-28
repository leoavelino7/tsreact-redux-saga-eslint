import React, { useState } from 'react'

import {
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  FormControl,
  Grid,
  Button,
  Typography,
  Box,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

import { Container, ContainerBlock, ButtonsActions } from './styles'

interface Props {
  titleForm: string
  titleUsername: string
  titlePassword: string
  titleLoginButton: string
  titleForgetPasswordButton: string
  onHandleSubmit(username: string, password: string): void
  children?: React.ReactNode
}

interface State {
  username: string
  password: string
  showPassword: boolean
}

export function Login({
  titleForm,
  titleUsername,
  titlePassword,
  titleLoginButton,
  titleForgetPasswordButton,
  onHandleSubmit,
  children,
}: Props) {
  const [values, setValues] = useState<State>({
    username: '',
    password: '',
    showPassword: false,
  })

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleSubmit = () => {
    const { username, password } = values

    onHandleSubmit(username, password)
  }

  return (
    <Box boxShadow={1}>
      <Container container>
        <ContainerBlock item xs={11} lg={8}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4" variantMapping={{ h4: 'h1' }}>
                {titleForm}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel variant="standard" color="primary">
                  {titleUsername}
                </InputLabel>
                <Input
                  aria-label="standard-adornment-username"
                  type="text"
                  value={values.username}
                  onChange={handleChange('username')}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel color="primary">{titlePassword}</InputLabel>
                <Input
                  aria-label="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>

            <ButtonsActions item xs={12}>
              <Button
                type="button"
                aria-label="btnLogin"
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
              >
                {titleLoginButton}
              </Button>

              <Button
                type="button"
                aria-label="btnForgetPassword"
                variant="contained"
                color="primary"
              >
                {titleForgetPasswordButton}
              </Button>
            </ButtonsActions>
          </Grid>
          {children}
        </ContainerBlock>
      </Container>
    </Box>
  )
}
