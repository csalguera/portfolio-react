// data
import { skills } from "../../../data/skills"

// npm modules
import { useEffect, useState } from "react"

// components
import SkillContainer from "../../SkillContainer/SkillContainer"
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
          />
          <Tab
            value="two"
            label="backend"
          />
          <Tab
            value="three"
            label="other"
          />
        </Tabs>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
        }}
      >
        <SkillContainer
          tabs={tabs}
          value={value}
          tabValue='one'
          tech={skills.map(tech => tech.frontend)}
        />
        {(tabs && value === 'two') || !tabs
          ?
          <Box
            sx={{
              minWidth: '300px',
              pt: 4,
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
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