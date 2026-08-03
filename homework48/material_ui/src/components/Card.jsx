import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function GuitarCard({
                      image,
                      title,
                      description,
                      level,
                      material,
                    }) {
  return (
      <Card
          sx={{
            height: '100%',
            overflow: 'hidden',
            borderRadius: 4,
            backgroundColor: '#fffaf2',
            border: '1px solid #e7d7c1',
            boxShadow: '0 14px 40px rgba(53, 34, 20, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 50px rgba(53, 34, 20, 0.18)',
            },
          }}
      >
        <Box
            sx={{
              position: 'relative',
              backgroundColor: '#eee3d3',
            }}
        >
          <CardMedia
              component="img"
              image={image}
              alt={title}
              sx={{
                width: '100%',
                height: {
                  xs: 360,
                  sm: 430,
                },
                objectFit: 'contain',
                p: 2,
              }}
          />

          <Chip
              label={level}
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                backgroundColor: '#6f4428',
                color: '#ffffff',
                fontWeight: 600,
              }}
          />
        </Box>

        <CardContent
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
        >
          <Typography
              variant="h4"
              component="h2"
              sx={{
                color: '#2d1d13',
                fontWeight: 700,
              }}
          >
            {title}
          </Typography>

          <Typography
              variant="body1"
              sx={{
                color: '#6c5a4d',
                lineHeight: 1.7,
              }}
          >
            {description}
          </Typography>

          <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: 'wrap',
                gap: 1,
              }}
          >
            <Chip
                label={material}
                variant="outlined"
                sx={{
                  borderColor: '#b88a5a',
                  color: '#6f4428',
                }}
            />

            <Chip
                label="Classical guitar"
                variant="outlined"
                sx={{
                  borderColor: '#b88a5a',
                  color: '#6f4428',
                }}
            />
          </Stack>

          <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 1,
                alignSelf: 'flex-start',
                backgroundColor: '#6f4428',
                px: 3,
                py: 1.2,
                borderRadius: 10,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#4d2d1b',
                },
              }}
          >
            View guitar
          </Button>
        </CardContent>
      </Card>
  )
}

export default GuitarCard