// mui components
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EmailIcon from '@mui/icons-material/Email';

const Icons = () => {
  return (
    <Box sx={{ pt: '5vh' }}>
      <Tooltip title="GitHub" arrow>
        <IconButton>
          <Link
            href='https://github.com/csalguera'
            target='_blank'
            rel='noreferrer'
            color="text.primary"
          >
            <GitHubIcon  fontSize='large'/>
          </Link>
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn" arrow>
        <IconButton>
          <Link
            href='https://www.linkedin.com/in/carlos-salguera/'
            target='_blank'
            rel='noreferrer'
            color="text.primary"
          >
            <LinkedInIcon  fontSize='large'/>
          </Link>
        </IconButton>
      </Tooltip>
      <Tooltip title="Email" arrow>
        <IconButton>
          <Link
            href='mailto:carlos.e.salguera@gmail.com'
            target='_blank'
            rel='noreferrer'
            color="text.primary"
          >
            <EmailIcon  fontSize='large'/>
          </Link>
        </IconButton>
      </Tooltip>
      <Tooltip title="Resume" arrow>
        <IconButton>
          <Link
            href='/carlos-salguera-resume.pdf'
            download
            color="text.primary"
          >
            <InsertDriveFileIcon  fontSize='large'/>
          </Link>
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default Icons