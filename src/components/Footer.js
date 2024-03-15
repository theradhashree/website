import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";

function Footer() {
  return (
    <Box className="footer">
      <a
        href="https://www.instagram.com/theradhashree/?igsh=NHJ1bjZ3azhra2R6"
        rel="noreferrer"
        target="_blank"
      >
        <InstagramIcon className="icon" />
      </a>
      <a
        href="https://twitter.com/theradhashree"
        rel="noreferrer"
        target="_blank"
      >
        <TwitterIcon className="icon" />
      </a>
      <a href="mailto:theradhashree@gmail.com" rel="noreferrer" target="_blank">
        <MailIcon className="icon" />
      </a>
    </Box>
  );
}

export default Footer;
