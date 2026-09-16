// data
import { skills } from "../../../data/skills";

// npm modules
import { useState } from "react";

// components
import SkillContainer from "../SkillContainer/SkillContainer";

// mui components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Skills = (props) => {
  const { checked } = props;
  const [value, setValue] = useState("one");
  const theme = useTheme();
  const tabs = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="h4" sx={{ pt: { xs: 4, sm: "5vh" } }}>
        Skills
      </Typography>
      <Box
        sx={{ pt: 4, maxWidth: "100%", display: { xs: "block", md: "none" } }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          textColor="primary"
          variant="scrollable"
          allowScrollButtonsMobile
        >
          <Tab
            value="one"
            label="primary stack"
            sx={{ color: checked ? "#fff" : "#000" }}
          />
          <Tab
            value="two"
            label="additional languages"
            sx={{ color: checked ? "#fff" : "#000" }}
          />
          <Tab
            value="three"
            label="cloud services"
            sx={{ color: checked ? "#fff" : "#000" }}
          />
        </Tabs>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <SkillContainer
          tabs={tabs}
          value={value}
          tabValue="one"
          tech={skills.map((tech) => tech.primaryStack)}
        />
        <SkillContainer
          tabs={tabs}
          value={value}
          tabValue="two"
          tech={skills.map((tech) => tech.languages)}
        />
        <SkillContainer
          tabs={tabs}
          value={value}
          tabValue="three"
          tech={skills.map((tech) => tech.cloud)}
        />
      </Box>
    </>
  );
};

export default Skills;
