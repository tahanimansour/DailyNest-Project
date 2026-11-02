import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../validation/authSchemas'
import axios from 'axios'
import { useAuthStore } from '../../store/useAuthStore'

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [serverError, setServerError] = useState(null);

  const { register, handleSubmit, formState:{errors,isSubmitting} } = useForm({
    resolver: yupResolver(loginSchema), mode: "onBlur"
  })

  const onSubmit = async (data) => {
    setServerError(null);
    try {
      const response = await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login', data)
      const token = response.data.accessToken;
      if (typeof token !== 'string' || !token.trim()) {
        setServerError('Login response did not include an access token');
        return;
      }
      login(token);
      navigate('/')
      

    } catch {
      setServerError("Login failed")
    }
  }


  return (
    <Container
      maxWidth="xs" disableGutters>

      <Box sx={{ width: '100%', bgcolor: '#FCFAF6', border: '1px solid #E4E1D7', boxShadow: '0 4px 18px #0A2A2108', p: { xs: 3, sm: 4 }, borderRadius: 3 }}>
        <Typography component="h1" sx={{ fontFamily: 'Georgia, serif', fontSize: 30, fontWeight: 400, mb: 1 }}>
          Welcome <Box component="span" sx={{ color: '#B8955A', fontStyle: 'italic' }}>back</Box>
        </Typography>
        <Typography sx={{ fontSize: 13, color: '#7B8076', mb: 2 }}>Sign in to your account</Typography>

        {serverError ? <Alert severity="error">{serverError}</Alert> : null}


        <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}>
          </TextField>

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}>
          </TextField>
          <Box sx={{ textAlign: 'right', mt: 1 }}>
            <Button component={Link} to="/send-code" sx={{ textTransform: 'none' }}>
              Forgot Password?
            </Button>
          </Box>
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }} disabled={isSubmitting}>
            {isSubmitting?"Loading..":"Sign in"}
          </Button>
        </Box>

        <Typography variant="body2" sx={{ textAlign: 'center', mt: 3, fontSize: 12, color: '#7B8076' }}>
          Don't have an account? <Link to="/register">Create one</Link>
        </Typography>
      </Box>
    </Container>
  )
}

