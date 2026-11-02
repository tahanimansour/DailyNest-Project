import { Box, Button, TextField, Typography } from '@mui/material'

export default function JoinClub() {
  return (
    <Box component="section" sx={{ display: 'grid', gridTemplateColumns: '1fr', textAlign: 'center', justifyItems: 'center', gap: { xs: 1.5, md: 3 }, bgcolor: '#ECEBE3', border: '1px solid #E6E3D9', borderRadius: 4, px: { xs: 2, md: 5 }, py: { xs: 2.5, md: 5 }, mt: 3, mb: { xs: 5, md: 12 }, maxWidth: 1100, mx: 'auto' }}>
      <Box>
        <Box sx={{ mb: 1.5 }}>
          <Typography sx={{ color: '#9B804A', fontSize: 9, letterSpacing: 2 }}>PRIVATE SOCIETY</Typography>
        </Box>
        <Typography component="h2" sx={{ color: '#0A2A21', fontFamily: 'Georgia, serif', fontSize: { xs: 20, md: 30 }, fontWeight: 400, mb: 1.5 }}>Join the <Box component="span" sx={{ color: '#9B804A', fontStyle: 'italic' }}>DailyNest</Box> Club</Typography>
        <Typography sx={{ color: '#66715E', fontSize: { xs: 11, md: 12 }, lineHeight: 1.7, maxWidth: 420, mx: 'auto' }}>Receive private invitations to limited collections, seasonal inspiration, and the latest from DailyNest.</Typography>
      </Box>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 1.5 }}>
          <TextField placeholder="Enter your email address" type="email" variant="outlined" fullWidth slotProps={{ input: { readOnly: true }, htmlInput: { 'aria-label': 'Email address' } }} sx={{ minWidth: 0, '& .MuiOutlinedInput-root': { height: { xs: 36, md: 42 }, bgcolor: '#FFFFFF', borderRadius: 8, fontFamily: 'inherit', fontSize: 12, color: '#0A2A21' }, '& .MuiOutlinedInput-input': { px: 2, py: 1.5 }, '& .MuiOutlinedInput-notchedOutline': { borderColor: '#D7DFD1' }, '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#A5B39B' }, '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#0B4A3A', borderWidth: 1 }, '& input::placeholder': { color: '#8A9185', opacity: 1 } }} />
          <Button disabled variant="contained" sx={{ height: { xs: 36, md: 42 }, px: 3, borderRadius: 8, fontFamily: 'inherit', fontSize: 10, letterSpacing: 1, whiteSpace: 'nowrap', textTransform: 'uppercase', boxShadow: 'none', '&.Mui-disabled': { bgcolor: '#063326', color: '#FFFFFF' } }}>Subscribe</Button>
        </Box>
        <Typography sx={{ color: '#7B8076', fontSize: { xs: 9, md: 10 }, mt: 1 }}>Thoughtful inspiration, at your own pace.</Typography>
      </Box>
    </Box>
  )
}
