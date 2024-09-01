import { Paper, Stack, Typography } from '@mui/material'
import SellRoundedIcon from '@mui/icons-material/SellRounded'
import StarIcon from '@mui/icons-material/Star'

export default function Tag({ tag }) {
  const isFav = tag === 'FAVS'

  return (
    <Paper
      elevation={4}
      square={false}
      sx={{ width: 'fit-content', px: 0.8, py: 0.2 }}
    >
      {isFav ? (
        <Stack
          direction="row"
          sx={{
            gap: 0.5,
            alignItems: 'center',
          }}
        >
          <StarIcon sx={{ color: 'goldenrod', fontSize: 16 }} />
          <Typography
            sx={{
              fontSize: 14,
            }}
          >
            FAVS
          </Typography>
        </Stack>
      ) : (
        <Stack
          direction="row"
          sx={{
            gap: 0.5,
            alignItems: 'center',
          }}
        >
          <SellRoundedIcon sx={{ fontSize: 14 }} />
          <Typography
            sx={{
              fontSize: 14,
            }}
          >
            {tag?.toUpperCase()}
          </Typography>
        </Stack>
      )}
    </Paper>
  )
}
