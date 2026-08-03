import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Header from './components/Header'
import GuitarCard from './components/Card'
import Form from './components/Form'

const guitars = [
  {
    id: 1,
    title: 'Alhambra 2C',
    image: '/images/alhambra-2c.jpg',
    description:

        'A comfortable classical guitar with a traditional appearance and a warm sound. A suitable choice for regular practice and music lessons.',
    level: 'Student model',
    material: 'Natural wood',
  },
  {
    id: 2,
    title: 'Alhambra 3C',
    image: '/images/alhambra-3c.jpg',
    description:

        'A classical guitar for musicians who want a more expressive instrument with a refined appearance and balanced sound.',
    level: 'Advanced model',
    material: 'Natural wood',
  },
]

function App() {
  const scrollToGuitars = () => {
    document
        .getElementById('guitars')
        ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
      <>
        <Header shopName="Alhambra House" />

        <Box
            component="main"
            sx={{
              backgroundColor: '#f6efe5',
              minHeight: '100vh',
            }}
        >
          <Box
              component="section"
              sx={{
                minHeight: {
                  xs: 520,
                  md: 620,
                },
                display: 'flex',
                alignItems: 'center',
                background:
                    'linear-gradient(135deg, #23170f 0%, #4c2f1c 65%, #79502e 100%)',
                color: '#ffffff',
              }}
          >
            <Container maxWidth="lg">
              <Box
                  sx={{
                    maxWidth: 760,
                    py: 8,
                  }}
              >
                <Typography
                    variant="overline"
                    sx={{
                      color: '#d9a55a',
                      letterSpacing: 3,
                      fontWeight: 700,
                    }}
                >
                  Classical guitar collection
                </Typography>

                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      mt: 2,
                      mb: 3,
                      fontSize: {
                        xs: '3rem',
                        sm: '4.5rem',
                        md: '6rem',
                      },
                      lineHeight: 0.95,
                      fontWeight: 700,
                    }}
                >
                  Find your
                  <Box
                      component="span"
                      sx={{
                        display: 'block',
                        color: '#d9a55a',
                      }}
                  >
                    perfect sound
                  </Box>
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                      maxWidth: 620,
                      mb: 4,
                      color: '#ded2c8',
                      lineHeight: 1.7,
                      fontWeight: 400,
                    }}
                >
                  Discover two classical Alhambra models designed for
                  learning, practice and musical development.
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    endIcon={<KeyboardArrowDownIcon />}
                    onClick={scrollToGuitars}
                    sx={{
                      backgroundColor: '#d9a55a',
                      color: '#23170f',
                      px: 4,
                      py: 1.4,
                      borderRadius: 10,
                      fontWeight: 700,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#efbf78',
                      },
                    }}
                >
                  Explore guitars
                </Button>
              </Box>
            </Container>
          </Box>

          <Container maxWidth="lg">
            <Box
                component="section"
                id="guitars"
                sx={{
                  py: {
                    xs: 7,
                    md: 11,
                  },
                }}
            >
              <Typography
                  variant="overline"
                  sx={{
                    color: '#8a5934',
                    letterSpacing: 2,
                    fontWeight: 700,
                  }}
              >
                Our collection
              </Typography>

              <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    mt: 1,
                    mb: 2,
                    color: '#2d1d13',
                    fontWeight: 700,
                  }}
              >
                Classical guitars
              </Typography>

              <Typography
                  sx={{
                    maxWidth: 650,
                    mb: 5,
                    color: '#746255',
                    fontSize: '1.1rem',
                  }}
              >
                Compare the two available models and choose the instrument
                that matches your experience.
              </Typography>

              <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      md: 'repeat(2, 1fr)',
                    },
                    gap: 4,
                  }}
              >
                {guitars.map((guitar) => (
                    <GuitarCard
                        key={guitar.id}
                        image={guitar.image}
                        title={guitar.title}
                        description={guitar.description}
                        level={guitar.level}
                        material={guitar.material}
                    />
                ))}
              </Box>
            </Box>

            <Box
                component="section"
                sx={{
                  pb: {
                    xs: 7,
                    md: 11,
                  },
                }}
            >
              <Form />
            </Box>
          </Container>
        </Box>
      </>
  )
}

export default App