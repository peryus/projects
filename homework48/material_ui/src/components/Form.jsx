import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guitar: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))

    setIsSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(formData)
    setIsSubmitted(true)

    setFormData({
      name: '',
      email: '',
      guitar: '',
    })
  }

  return (
      <Paper
          elevation={0}
          sx={{
            p: {
              xs: 3,
              md: 5,
            },
            borderRadius: 4,
            backgroundColor: '#2d1d13',
            color: '#ffffff',
          }}
      >
        <Typography
            variant="overline"
            sx={{
              color: '#d9a55a',
              letterSpacing: 2,
            }}
        >
          Personal consultation
        </Typography>

        <Typography
            variant="h4"
            component="h2"
            sx={{
              mt: 1,
              mb: 1,
              fontWeight: 700,
            }}
        >
          Choose your guitar
        </Typography>

        <Typography
            sx={{
              mb: 4,
              color: '#d8ccc3',
            }}
        >
          Leave your contact details and select the model you are interested in.
        </Typography>

        {isSubmitted && (
            <Alert severity="success" sx={{ mb: 3 }}>
              Your request has been sent successfully.
            </Alert>
        )}

        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 2,
            }}
        >
          <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              sx={fieldStyles}
          />

          <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              sx={fieldStyles}
          />

          <TextField
              select
              label="Guitar model"
              name="guitar"
              value={formData.guitar}
              onChange={handleChange}
              required
              fullWidth
              sx={{
                ...fieldStyles,
                gridColumn: {
                  xs: 'auto',
                  md: '1 / -1',
                },
              }}
          >
            <MenuItem value="Alhambra 2C">Alhambra 2C</MenuItem>
            <MenuItem value="Alhambra 3C">Alhambra 3C</MenuItem>
          </TextField>

          <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                gridColumn: {
                  xs: 'auto',
                  md: '1 / -1',
                },
                justifySelf: 'start',
                backgroundColor: '#d9a55a',
                color: '#23170f',
                px: 4,
                py: 1.3,
                borderRadius: 10,
                fontWeight: 700,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#efbf78',
                },
              }}
          >
            Send request
          </Button>
        </Box>
      </Paper>
  )
}

const fieldStyles = {
  '& .MuiInputLabel-root': {
    color: '#c7b8ad',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#d9a55a',
  },
  '& .MuiOutlinedInput-root': {
    color: '#ffffff',
    '& fieldset': {
      borderColor: '#78685d',
    },
    '&:hover fieldset': {
      borderColor: '#b9a69a',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#d9a55a',
    },
  },
  '& .MuiSvgIcon-root': {
    color: '#ffffff',
  },
}

export default Form