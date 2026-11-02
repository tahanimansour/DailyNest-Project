import { Box, InputBase } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

export default function Search() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, bgcolor: { xs: 'transparent', md: '#FAF7F0' }, border: { xs: 'none', md: '1px solid #D7DFD1' }, borderRadius: 7, px: 1, width: { xs: 40, md: 190 }, height: { xs: 40, md: 'auto' }, minWidth: 0 }}>
      <SearchOutlinedIcon sx={{ fontSize: { xs: 23, md: 17 }, color: { xs: '#E7EAD5', md: '#7B8076' } }} />
      <InputBase placeholder="Search essentials..." readOnly inputProps={{ 'aria-label': 'Search essentials' }} sx={{ display: { xs: 'none', md: 'inline-flex' }, fontSize: 11, width: '100%', '& input': { py: 0.5 } }} />
    </Box>
  )
}
