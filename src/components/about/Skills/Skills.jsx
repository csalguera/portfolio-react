// data
import { skills } from "../../../data/skills"

// npm modules
import { useEffect, useState } from "react"

// components
import Skill from "../Skill/Skill"

// mui components
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Skills = (props) => {
  const {
    fontColor1,
    fontColor2,
  } = props

  const [value, setValue] = useState('one');
  const [tabs, setTabs] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=> {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setTabs(false)
      } else if (window.innerWidth <= 899) {
        setTabs(true)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)

  }, [])

  return (
    <>
      <Typography variant="h4" sx={{ color: fontColor1, pt: '5vh' }}>
        Skills
      </Typography>

      <Box sx={{ pt: 4, display: {sm: 'block', md: 'none'} }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="one"
            label="frontend"
            wrapped
            sx={{ color: fontColor1 }}
            />
          <Tab
            value="two"
            label="backend"
            wrapped
            sx={{ color: fontColor1 }}
            />
          <Tab
            value="three"
            label="other"
            wrapped
            sx={{ color: fontColor1 }}
          />
        </Tabs>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {(tabs && value === 'one') || !tabs
          ?
          <Box>
            <Typography variant="h6" sx={{ color: fontColor1, mt: 2, display: { xs: 'none', md: 'block' } }}>
              Frontend
            </Typography>
            <Box
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              sx={{
                minWidth: '300px',
                pt: '2vh',
                mx: '1vw',
                px: 2,
                display: { md: 'none' }
              }}
            >
              {skills.map(tech => (
                tech.frontend.map(skill => (
                  <Skill
                    key={skill.name}
                    skill={skill}
                    fontColor2={fontColor2}
                  />
                ))
              ))}
            </Box>
          </Box>
          :
          ''
        }
        {(tabs && value === 'two') || !tabs
          ?
          <Box>
            <Typography variant="h6" sx={{ color: fontColor1, mt: 2, display: { xs: 'none', md: 'block' } }}>
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
                alignItems: 'center',
                mx: '1vw',
                px: 2,
              }}
            >
              {skills.map(tech => (
                tech.backend.map(skill => (
                  <Skill
                    key={skill.name}
                    skill={skill}
                    fontColor2={fontColor2}
                  />
                ))
              ))}
            </Box>
          </Box>
          :
          ''
        }
        {(tabs && value === 'three') || !tabs
          ?
          <Box>
            <Typography variant="h6" sx={{ color: fontColor1, mt: 2, display: { xs: 'none', md: 'block' } }}>
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
                alignItems: 'center',
                mx: '1vw',
                px: 2,
              }}
            >
              {skills.map(tech => (
                tech.other.map(skill => (
                  <Skill
                    key={skill.name}
                    skill={skill}
                    fontColor2={fontColor2}
                  />
                ))
              ))}
            </Box>
          </Box>
          :
          ''
        }
      </Box>
    </>
  )
}

export default Skills