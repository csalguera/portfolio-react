// mui components
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProjectCard = (props) => {
  const { project } = props

  return (
    <Card sx={{ maxWidth: 400, mx: '2vw', mb: 4 }}>
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