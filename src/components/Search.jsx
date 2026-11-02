import { Box, InputBase } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

export default function Search() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, bgcolor: '#FAF7F0', border: '1px solid #D7DFD1', borderRadius: 7, px: 1, width: { xs: 145, sm: 190 }, minWidth: 0 }}>
      <SearchOutlinedIcon sx={{ fontSize: 17, color: '#7B8076' }} />
      <InputBase placeholder="Search essentials..." readOnly inputProps={{ 'aria-label': 'Search essentials' }} sx={{ fontSize: 11, width: '100%', '& input': { py: 0.5 } }} />
    </Box>
  )
}
