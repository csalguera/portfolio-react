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
    <Box sx={{ textAlign: 'center', display: 'flex' }}>
      <Box
        sx={{
          pt: '2vh',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          px: 4
        }}
      >
        <Typography variant="h6" sx={{ color: fontColor1 }}>
          Frontend
        </Typography>
        {skills.map(tech => (
          tech.frontend.map(skill => (
            <Skill
              key={skill.name}
              skill={skill}
            />
          ))
        ))}
      </Box>
      <Box
        sx={{
          pt: '2vh',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          px: 4
        }}
      >
      <Typography variant="h6" sx={{ color: fontColor1 }}>
          Backend
        </Typography>
        {skills.map(tech => (
          tech.backend.map(skill => (
            <Skill
              key={skill.name}
              skill={skill}
            />
          ))
        ))}
      </Box>
      <Box
        sx={{
          pt: '2vh',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          px: 4
        }}
      >
      <Typography variant="h6" sx={{ color: fontColor1 }}>
          Other
        </Typography>
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
    </>
  )
}

export default Skills