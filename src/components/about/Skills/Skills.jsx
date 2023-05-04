// data
import { skills } from "../../../data/skills"

// components
import Skill from "../Skill/Skill"

// mui components
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Skills = (props) => {
  const {
    fontColor1,
  } = props

  return (
    <>
      <Typography variant="h4" sx={{ color: fontColor1, pt: '5vh' }}>
        Skills
      </Typography>
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ color: fontColor1, mt: 2 }}>
            Frontend
          </Typography>
          <Box
            sx={{
              minWidth: '300px',
              pt: '2vh',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              mx: '1vw',
              px: 2,
            }}
          >
            {skills.map(tech => (
              tech.frontend.map(skill => (
                <Skill
                  key={skill.name}
                  skill={skill}
                />
              ))
            ))}
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ color: fontColor1, mt: 2 }}>
            Backend
          </Typography>
          <Box
            sx={{
              minWidth: '300px',
              pt: '2vh',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              mx: '1vw',
              px: 2,
            }}
          >
            {skills.map(tech => (
              tech.backend.map(skill => (
                <Skill
                  key={skill.name}
                  skill={skill}
                />
              ))
            ))}
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ color: fontColor1, mt: 2 }}>
            Other
          </Typography>
          <Box
            sx={{
              minWidth: '300px',
              pt: '2vh',
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              mx: '1vw',
              px: 2,
            }}
          >
            {skills.map(tech => (
              tech.other.map(skill => (
                <Skill
                  key={skill.name}
                  skill={skill}
                />
              ))
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Skills