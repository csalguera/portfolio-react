// mui components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Journey = () => {
  return (
    <Box sx={{ textAlign: "center", width: "100%", maxWidth: "800px" }}>
      <Typography variant="h4" sx={{ pt: { xs: 4, sm: "5vh" } }}>
        Journey
      </Typography>
      <Typography
        sx={{
          pt: 2,
          px: { xs: 1, sm: 8 },
          textAlign: "left",
          textIndent: "2rem",
          lineHeight: "2rem",
        }}
      >
        My journey in software development began with General Assembly's 480+
        hour Software Engineering Immersive, which I completed in 2023. After
        completing the program, I decided to build on that foundation by
        returning to school at <b>Indiana University Indianapolis</b> in 2024 to
        pursue a degree in Computer Science. I am currently a{" "}
        <b>Computer Science senior</b> and expect to graduate in <b>May 2027</b>
        . Alongside my coursework, I continue building projects that allow me to
        strengthen my skills, explore new technologies, and apply what I learn
        beyond the classroom.
      </Typography>
    </Box>
  );
};

export default Journey;
