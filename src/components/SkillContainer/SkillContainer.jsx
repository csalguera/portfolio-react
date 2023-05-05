// components
import Skill from "../about/Skill/Skill"

// mui components
import Box from "@mui/material/Box"

const SkillContainer = (props) => {
  const {
    tabs,
    value,
    tech,
  } = props

  return (
    <>
      {(tabs && value === 'one') || !tabs
        ?
        <Box
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          sx={{
            minWidth: '300px',
            pt: 4,
            mx: '1vw',
            px: 2,
            display: { md: 'none' }
          }}
        >
          {tech[0].map(skill => (
            <Skill
              key={skill.name}
              skill={skill}
            />
          ))}
        </Box>
        :
        ''
      }
    </>
  )
}

export default SkillContainer