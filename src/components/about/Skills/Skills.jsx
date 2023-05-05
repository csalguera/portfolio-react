// data
import { skills } from "../../../data/skills"

// npm modules
import { useEffect, useState } from "react"

// components
import SkillContainer from "../SkillContainer/SkillContainer"

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
        <SkillContainer
          tabs={tabs}
          value={value}
          tabValue='two'
          tech={skills.map(tech => tech.backend)}
        />
        <SkillContainer
          tabs={tabs}
          value={value}
          tabValue='three'
          tech={skills.map(tech => tech.other)}
        />
      </Box>
    </>
  )
}

export default Skills