// npm modules
import { useState } from 'react';

// mui components
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Popover from '@mui/material/Popover';
import { useTheme } from '@emotion/react';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProjectCard = (props) => {
  const { project } = props

  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  const sm = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const md = useMediaQuery(theme.breakpoints.between('md', 'lg'))
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Card sx={{ maxWidth: 400, mx: '2vw', mb: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.title}
          onClick={handleClick}
        />
        {!xs &&
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            width={ sm ? "600" : md ? "800" : "1200" }
          />
        </Popover>
        }
        <CardContent sx={{ height: 180 }}>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', py: 1 }}>
            {project.technologies.map(technology => (
              <Typography
                key={technology}
                sx={{
                  px: 0.5, pb: 1,
                  fontSize: '12px'
                }}
                color="primary"
              >
                {technology}
              </Typography>
            ))}
          </Box>
          <Typography variant="body2" color="text.primary">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          <Link
            href={project.repositoryLink}
            underline='hover'
            target='_blank'
            rel='noreferrer'
            color="primary"
            >
            GitHub
          </Link>
        </Button>
        <Button size="small">
          <Link
            href={project.deploymentLink}
            underline='hover'
            target='_blank'
            rel='noreferrer'
            color="primary"
          >
            Live App
          </Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard