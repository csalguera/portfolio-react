// components
import ArrowDown from "../../components/ArrowDown/ArrowDown"

// mui components
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

function Landing(props) {
  const {
    id,
    arrowColor,
    scrollToElement,
  } = props

  return (
    <>
      <main
        id='landing'
        className='page-component-container'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ maxWidth: '700px', textAlign: 'center' }}>
          <Typography variant="h1">
            Carlos Salguera
          </Typography>
          <Typography
            variant="h5"
            sx={{ py: 1 }}
            color="primary"
          >
            FULL STACK DEVELOPER
          </Typography>
          <Typography sx={{ px: 10, py: 1 }}>
            I am a Software Engineer with a focus on React, JavaScript, TypeScript, PostgreSQL, and MongoDB.
          </Typography>
        </Box>
        <ArrowDown
          id={id}
          arrowColor={arrowColor}
          scrollToElement={scrollToElement}
        />
      </main>
    </>
  )
}

export default Landing
