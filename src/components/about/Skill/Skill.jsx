// mui components
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"

const Skill = ({ skill }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 1 }}>
      {skill.devIcon
      ?
      <i className={skill.devIcon} style={{ fontSize: '30px' }} ></i>
      :
      <img src={skill.img} alt={skill.name} style={{ width: '30px', height: '30px' }} />
      }
      <Link
        sx={{ ml: 1 }}
        underline='hover'
        href={skill.docs}
        target='_blank'
        rel='noreferrer'
      >
        {skill.name}
      </Link>
    </Box>
  )
}

export default Skill