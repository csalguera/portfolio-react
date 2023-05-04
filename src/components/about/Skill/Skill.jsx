// mui components
import Link from "@mui/material/Link"

const Skill = ({ skill }) => {
  return (
    <>
      {skill.devIcon
      ?
      <i
        className={skill.devIcon}
        style={{
          fontSize: '50px',
        }}
      >
      </i>
      :
      <img
        src={skill.img}
        alt={skill.name}
        style={{
          width: '50px',
          height: '50px',
          objectFit: 'cover',
        }}
      />
      }
      <Link
        sx={{ pt: 1, pb: 2 }}
        underline='hover'
        href={skill.docs}
        target='_blank'
        rel='noreferrer'
      >
        {skill.name}
      </Link>
    </>
  )
}

export default Skill