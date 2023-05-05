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

const Skills = () => {
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
      <Typography variant="h4" sx={{  pt: '5vh' }}>
        Skills
      </Typography>

      <Box sx={{ pt: 4, display: {sm: 'block', md: 'none'} }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          textColor="inherit"
        >
          <Tab
            value="one"
            label="frontend"
            wrapped
          />
          <Tab
            value="two"
            label="backend"
            wrapped
          />
          <Tab
            value="three"
            label="other"
            wrapped
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
              pt: 4,
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
                />
              ))
            ))}
          </Box>
          :
          ''
        }
        {(tabs && value === 'two') || !tabs
          ?
          <Box
            sx={{
              minWidth: '300px',
              pt: 4,
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
                />
              ))
            ))}
          </Box>
          :
          ''
        }
        {(tabs && value === 'three') || !tabs
          ?
          <Box
            sx={{
              minWidth: '300px',
              pt: 4,
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
                />
              ))
            ))}
          </Box>
          :
          ''
        }
      </Box>
    </>
  )
}

export default Skills