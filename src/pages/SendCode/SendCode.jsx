import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { sendCodeSchema } from '../../validation/authSchemas'
import axios from 'axios'

export default function SendCode() {
  const navigate = useNavigate()
  const location = useLocation()
  const [serverError, setServerError] = useState(null)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(sendCodeSchema), mode: 'onBlur',
  })

  const onSubmit = async (data) => {
    setServerError(null)
    try {
      await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/SendCode', data)
      localStorage.setItem('resetPasswordEmail', data.email)
      navigate('/reset-password')
    } catch {
      setServerError('Could not send the code. Please try again.')
    }
  }

  return (
    <Container maxWidth="xs" disableGutters>
      <Box sx={{ width: '100%', bgcolor: '#FCFAF6', border: '1px solid #E4E1D7', boxShadow: '0 4px 18px #0A2A2108', p: { xs: 3, sm: 4 }, borderRadius: 3 }}>
        <Typography sx={{ fontSize: 10, letterSpacing: 1.5, color: '#7B8076', mb: 1.5 }}>PASSWORD RECOVERY</Typography>
        <Box sx={{ height: 3, bgcolor: '#E8EDE3', mb: 3 }}>
          <Box sx={{ width: '50%', height: '100%', bgcolor: '#0B4A3A' }}></Box>
        </Box>
        <Typography component="h1" sx={{ fontFamily: 'Georgia, serif', fontSize: 30, fontWeight: 400, mb: 1 }}>
          Forgot your <Box component="span" sx={{ color: '#B8955A', fontStyle: 'italic' }}>password?</Box>
        </Typography>
        <Typography sx={{ fontSize: 13, lineHeight: 1.7, color: '#7B8076', mb: 2 }}>Enter your email and we will send you a verification code.</Typography>
        {location.state?.message ? <Alert severity="info">{location.state.message}</Alert> : null}
        {serverError ? <Alert severity="error">{serverError}</Alert> : null}
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}>
          </TextField>
          <Button type="submit" variant="contained" fullWidth disabled={isSubmitting} sx={{ mt: 3 }}>
            {isSubmitting ? 'Sending...' : 'Send Code'}
          </Button>
        </Box>
        <Typography variant="body2" sx={{ textAlign: 'center', mt: 3, fontSize: 12 }}>
          <Link to="/login">Back to sign in</Link>
        </Typography>
      </Box>
    </Container>
  )
}
