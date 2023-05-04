// components
import ArrowDown from "../../components/ArrowDown/ArrowDown"

// mui components
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

function Landing(props) {
  const {
    id,
    arrowColor,
    fontColor1,
    fontColor2,
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
          <Typography variant="h1" sx={{ color: fontColor1 }}>
            Carlos Salguera
          </Typography>
          <Typography variant="h5" sx={{ color: fontColor2, py: 1 }}>
            FULL STACK DEVELOPER
          </Typography>
          <Typography sx={{ color: fontColor1, px: 10, py: 1 }}>
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
