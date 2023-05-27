import { animateScroll } from 'react-scroll';
import { useScrollTrigger, Fade, Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollTop() {
  const trigger = useScrollTrigger({ disableHysteresis: true });

  return (
    <Fade in={trigger}>
      <Box
        onClick={() => animateScroll.scrollToTop()}
        role='presentation'
        sx={{ position: 'fixed', bottom: 90, right: 50 }}
      >
        <Fab size='small'>
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
}

export default ScrollTop;
