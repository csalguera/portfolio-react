import ProjectPreview from './ProjectPreview'

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map(project =>
        <ul key={project.title}>
          <ProjectPreview project={project}/>
        </ul>
      )}
    </>
  )
}

export default ProjectList
