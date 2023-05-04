// mui components
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProjectCard = (props) => {
  const {
    project,
    fontColor2,
  } = props

  return (
    <Card sx={{ maxWidth: 345, mx: '2vw', mb: 4 }} variant='outlined'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={project.image}
          alt={project.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link
            href={project.repositoryLink}
            underline='hover'
            target='_blank'
            rel='noreferrer'
            color={fontColor2}
          >
            GitHub
          </Link>
        </Button>
        <Button size="small" color="primary">
          <Link
            href={project.deploymentLink}
            underline='hover'
            target='_blank'
            rel='noreferrer'
            color={fontColor2}
          >
            Live App
          </Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard