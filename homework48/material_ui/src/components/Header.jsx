import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import MusicNoteIcon from '@mui/icons-material/MusicNote'

function Header({ shopName }) {
  return (
      <AppBar
          position="sticky"
          elevation={0}
          sx={{
            backgroundColor: '#23170f',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 72 }}>
            <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
            >
              <MusicNoteIcon sx={{ color: '#d9a55a' }} />

              <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 1.5,
                  }}
              >
                {shopName}
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box
                component="nav"
                sx={{
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                  gap: 1,
                }}
            >
              <Button color="inherit">Home</Button>
              <Button color="inherit">Guitars</Button>
              <Button color="inherit">About</Button>

              <Button
                  variant="outlined"
                  sx={{
                    ml: 1,
                    color: '#f5e8d3',
                    borderColor: '#d9a55a',
                    '&:hover': {
                      borderColor: '#f5c77f',
                      backgroundColor: 'rgba(217, 165, 90, 0.1)',
                    },
                  }}
              >
                Contact
              </Button>
            </Box>

            <IconButton
                color="inherit"
                aria-label="Open menu"
                sx={{
                  display: {
                    xs: 'flex',
                    md: 'none',
                  },
                }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default Header