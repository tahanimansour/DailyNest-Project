
import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../validation/authSchemas'
import axios from 'axios'
import { useAuthStore } from '../../store/useAuthStore'

export default function Login() {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)

  const [serverError, setServerError] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur'
  })

  const onSubmit = async (data) => {
    setServerError(null)

    try {
      const response = await axios.post(
        'https://knowledgeshop.runasp.net/api/auth/Account/Login',
        data
      )

      const result = response.data
      const token = result.accessToken

      if (result.success === false || !token) {
        setServerError(
          result.message || 'Login failed. Please try again.'
        )
        return
      }

      login(token)
      navigate('/')

    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.errors ||
        'Login failed. Please try again.'

      setServerError(
        typeof message === 'string'
          ? message
          : 'Login failed. Please check your information.'
      )
    }
  }

  return (
    <Container maxWidth="xs" disableGutters>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          border: '1px solid #E4E1D7',
          boxShadow: '0 4px 18px #0A2A2108',
          p: { xs: 3, sm: 4 },
          borderRadius: 3
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontFamily: 'Georgia, serif',
            fontSize: 30,
            fontWeight: 400,
            mb: 1
          }}
        >
          Welcome{' '}
          <Box
            component="span"
            sx={{ color: 'secondary.main', fontStyle: 'italic' }}
          >
            back
          </Box>
        </Typography>

        <Typography
          sx={{ fontSize: 13, color: 'text.secondary', mb: 2 }}
        >
          Sign in to your account
        </Typography>

        {serverError ? (
          <Alert severity="error">{serverError}</Alert>
        ) : null}

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Box sx={{ textAlign: 'right', mt: 1 }}>
            <Button
              component={Link}
              to="/send-code"
              sx={{ textTransform: 'none' }}
            >
              Forgot Password?
            </Button>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Loading..' : 'Sign in'}
          </Button>
        </Box>

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            mt: 3,
            fontSize: 12,
            color: 'text.secondary'
          }}
        >
          Don't have an account?{' '}
          <Link to="/register">Create one</Link>
        </Typography>
      </Box>
    </Container>
  )
}
