// mui components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Goal = () => {
  return (
    <Box sx={{ textAlign: "center", width: "100%", maxWidth: "800px" }}>
      <Typography variant="h4" sx={{ pt: { xs: 4, sm: "5vh" } }}>
        Goal
      </Typography>
      <Typography sx={{ pt: 2, px: { xs: 1, sm: 8 } }}>
        <b>Computer Science senior</b> expecting to graduate in <b>May 2027</b>
      </Typography>
      <Typography sx={{ pt: 2, px: { xs: 1, sm: 8 } }}>
        Building toward a career in <b>full-stack software engineering</b> with
        a focus on React, JavaScript, TypeScript, PostgreSQL, and MongoDB
      </Typography>
      <Typography sx={{ pt: 2, px: { xs: 1, sm: 8 } }}>
        Completed a <b>480+ hour, 12-week Software Engineering Immersive</b> at
        General Assembly
      </Typography>
      <Typography sx={{ pt: 2, px: { xs: 1, sm: 8 } }}>
        Seeking a <b>full-time</b> opportunity in <b>Indianapolis, IN</b> or{" "}
        <b>Remote</b>, bringing a strong work ethic, discipline, and
        problem-solving skills
      </Typography>
    </Box>
  );
};

export default Goal;
