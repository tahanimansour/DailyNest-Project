import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from '../../validation/authSchemas'
import axios from 'axios'

export default function Register() {
  const navigate = useNavigate();

  const [serverError, setServerError] = useState(null);

  const { register, handleSubmit, formState:{errors,isSubmitting} } = useForm({
    resolver: yupResolver(registerSchema), mode: "onBlur"
  })

  const onSubmit = async (data) => {
    setServerError(null);
    try {
      await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Register', data)
      navigate('/login')

    } catch {
      setServerError("Registration failed")
    }
  }


  return (
    <Container
      maxWidth="xs" disableGutters>

      <Box sx={{ width: '100%', bgcolor: '#FCFAF6', border: '1px solid #E4E1D7', boxShadow: '0 4px 18px #0A2A2108', p: { xs: 3, sm: 4 }, borderRadius: 3 }}>
        <Typography component="h1" sx={{ fontFamily: 'Georgia, serif', fontSize: 30, fontWeight: 400, mb: 1 }}>
          Create your <Box component="span" sx={{ color: '#B8955A', fontStyle: 'italic' }}>account</Box>
        </Typography>
        <Typography sx={{ fontSize: 13, color: '#7B8076', mb: 2 }}>Join DailyNest and start exploring</Typography>

        {serverError ? <Alert severity="error">{serverError}</Alert> : null}


        <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            {...register('fullName')}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}>
          </TextField>

          <TextField
            label="Username"
            fullWidth
            margin="normal"
            {...register('userName')}
            error={!!errors.userName}
            helperText={errors.userName?.message}>
          </TextField>

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}>
          </TextField>

          <TextField
            label="Phone Number"
            fullWidth
            margin="normal"
            {...register('phoneNumber')}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}>
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
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }} disabled={isSubmitting}>
            {isSubmitting?"Loading..":"Create account"}
          </Button>
        </Box>

        <Typography variant="body2" sx={{ textAlign: 'center', mt: 3, fontSize: 12, color: '#7B8076' }}>
          Already have an account? <Link to="/login">Sign in</Link>
        </Typography>
      </Box>
    </Container>
  )
}
