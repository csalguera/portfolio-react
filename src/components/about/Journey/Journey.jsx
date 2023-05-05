// mui components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Journey = () => {
  return (
    <Box sx={{ textAlign: 'center', maxWidth: '800px' }}>
      <Typography variant="h4" sx={{ pt: '5vh' }}>
        Journey
      </Typography>
      <Typography
        sx={{
          pt: 2,
          px: 8,
          textAlign: 'left',
          textIndent: '2rem',
          lineHeight: '2rem',
        }}
      >
        I have always been fascinated by the STEM fields since I was a kid, excelling in mathematics and physics. Contrary to my inclination, I spent my adulthood working in the food industry. Throughout 2018 until the end of 2019 I attended IvyTech to study Electrical Engineering. Due to unforeseen circumstances, I put my education on hold to focus on my career. I received multiple promotions but ultimately concluded that I was not satisfied. In November of 2022, I made the decision to pursue Software Engineering. I graduated from General Assembly in March of 2023 and now seek a full-time opportunity to showcase what I have learned.
      </Typography>
    </Box>
  )
}

export default Journey