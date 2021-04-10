import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Svg2 from '../images/svg2.svg';

export default function Features() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" className="heading2" gutterBottom>
          <div>Features</div>
        </Typography><Typography variant="h4" className="heading2" gutterBottom>
          <div>provided</div>
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <div className="svg2">
        <Svg2/>
        </div>
      </Box>
    </Container>
  );
}
