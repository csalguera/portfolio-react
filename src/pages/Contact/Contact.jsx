// npm modules
import { useState } from "react";

// components
import EmailForm from "../../components/contact/EmailForm/EmailForm";
import Icons from "../../components/contact/Icons/Icons";
import SuccessAlert from "../../components/contact/SuccessAlert/SuccessAlert";

// mui components
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Contact() {
  const [emailAlert, setEmailAlert] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  return (
    <main id="contact" className="page-component-container">
      <Typography variant="h2">Contact</Typography>

      <Typography
        sx={{
          mt: 2,
          px: 2,
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        I'm currently open to software development opportunities ahead of my{" "}
        <b>May 2027 graduation</b>. If you'd like to connect or discuss an
        opportunity, feel free to reach out.
      </Typography>

      <img
        src="https://i.imgur.com/Rd1RywH.jpg"
        alt=""
        style={{
          width: "min(250px, 70vw)",
          height: "min(250px, 70vw)",
          objectFit: "cover",
          borderRadius: "50%",
          marginTop: "5vh",
        }}
      />

      <EmailForm setEmailAlert={setEmailAlert} setBackdrop={setBackdrop} />
      <Icons />

      <SuccessAlert emailAlert={emailAlert} setEmailAlert={setEmailAlert} />

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </main>
  );
}

export default Contact;
