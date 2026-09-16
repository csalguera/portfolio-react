// components
import Skill from "../Skill/Skill";

// mui components
import Box from "@mui/material/Box";

const SkillContainer = (props) => {
  const { tabs, value, tabValue, tech } = props;

  return (
    <>
      {!tabs || value === tabValue ? (
        <Box
          sx={{
            minWidth: { xs: 0, sm: "300px" },
            width: { xs: "100%", sm: "auto" },
            pt: 4,
            mx: { xs: 0, sm: "1vw" },
            px: { xs: 1, sm: 2 },
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {tech[0].map((skill) => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default SkillContainer;
