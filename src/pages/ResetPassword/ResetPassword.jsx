import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { resetPasswordSchema } from '../../validation/authSchemas'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function ResetPassword() {
  const navigate = useNavigate()
  const email = localStorage.getItem('resetPasswordEmail')
  const [serverError, setServerError] = useState(null)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(resetPasswordSchema), mode: 'onBlur',
  })

  const onSubmit = async (data) => {
    setServerError(null)
    try {
      await axios.patch('https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword', { ...data, email })
      await Swal.fire({
        icon: 'success',
        title: 'Password changed successfully',
        confirmButtonText: 'Go to Login',
        allowOutsideClick: false,
        allowEscapeKey: false,
      })
      localStorage.removeItem('resetPasswordEmail')
      navigate('/login', { replace: true })
    } catch {
      setServerError('Could not reset the password. Check the code and try again.')
    }
  }

  if (!email) return <Navigate to="/send-code" replace state={{ message: 'Please enter your email and request a code first.' }} />

  return (
    <Container maxWidth="xs" disableGutters>
      <Box sx={{ width: '100%', bgcolor: '#FCFAF6', border: '1px solid #E4E1D7', boxShadow: '0 4px 18px #0A2A2108', p: { xs: 3, sm: 4 }, borderRadius: 3 }}>
        <Typography sx={{ fontSize: 10, letterSpacing: 1.5, color: '#7B8076', mb: 1.5 }}>SET NEW PASSWORD</Typography>
        <Box sx={{ height: 3, bgcolor: '#0B4A3A', mb: 3 }}></Box>
        <Typography component="h1" sx={{ fontFamily: 'Georgia, serif', fontSize: 30, fontWeight: 400, mb: 1 }}>
          Create a new <Box component="span" sx={{ color: '#B8955A', fontStyle: 'italic' }}>password</Box>
        </Typography>
        <Typography sx={{ fontSize: 13, lineHeight: 1.7, color: '#7B8076', mb: 2 }}>Enter the code sent to your email and choose your new password.</Typography>
        {serverError ? <Alert severity="error">{serverError}</Alert> : null}
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Code"
            fullWidth
            margin="normal"
            autoComplete="one-time-code"
            {...register('code')}
            error={!!errors.code}
            helperText={errors.code?.message}>
          </TextField>

          <TextField
            label="New Password"
            type="password"
            fullWidth
            margin="normal"
            autoComplete="new-password"
            {...register('newPassword')}
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}>
          </TextField>
          <Button type="submit" variant="contained" fullWidth disabled={isSubmitting} sx={{ mt: 3 }}>
            {isSubmitting ? 'Loading...' : 'Reset Password'}
          </Button>
        </Box>
        <Typography variant="body2" sx={{ textAlign: 'center', mt: 3, fontSize: 12 }}>
          <Link to="/send-code">Send another code</Link>
        </Typography>
      </Box>
    </Container>
  )
}
