// import * as React from 'react';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import ProTip from '../src/ProTip';
// import Link from '../src/Link';
// import Copyright from '../src/Copyright';
// import Social from "./Social.svg";
// import Svg1 from '../images/svg1.svg';
// import Button from '@material-ui/core/Button';
// import { motion } from "framer-motion";






// export default function Index() {
//   return (

     
//     <Container maxWidth="md">
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h2" component="h1"  gutterBottom>
//           Welcome to MyFolks!

//         </Typography>
//         {/* <div className="column is-15 is-offset-4">
//             <motion.h2
//               className="title has-text-weight-bold is-1 is-size-4-mobile is-spaced"
//               layoutId="title"
//             >
//               <div> Welcome to Philotis!</div>
//             </motion.h2>
//           </div> */}

//         <div className="para">
//           <p> Want to rekindle your past contacts and revive that spark in your social life again ?</p>
//         </div>
//         <div className="so">
//         <Typography variant="h2" component="h1"  gutterBottom>

//         <Social />
       
//         </Typography>
//         </div>
        
        
        
// {/*         
       
//         <Link href="/about" color="secondary">

//           Go to the about page
//         </Link> */}

// <div className="right" style={{ width: '100%' }}>
//       <Box display="flex" justifyContent="flex-end" m={1} p={1}  bgcolor="background.paper">
//         <Box p={1}>

//         <span className="right">
//         <Button right="0px" align="top" variant="contained"  size="large"  size="40px" marginright="0" component={Link} noLinkStyle href="/test">
//          GO Next  <i className="fas fa-arrow-right fa-1x"></i>
//         </Button>
 
//       </span>
          
//         </Box>
       
//       </Box>
     
     
//     </div>
//         {/* <div className="right">
       

//         <span className="right">
//         <Button right="0px" align="top" variant="contained" size="medium"  size="20px" marginright="0" component={Link} noLinkStyle href="/test">
//           Next
//         </Button>
 
//       </span>
//         </div> */}
//         {/* <ProTip /> */}
      
//       </Box>
//       {/* <style jsx>{master}</style> */}
//     </Container>
    
//   );
//   // <style jsx>{`
// 	// 	  h1 {
// 	// 	    font-size: 3rem;
//   //       color: #ffffff;
// 	// 	  }
// 	// 	`}</style>
// }





import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Social from "./Social.svg";
// import Svg1 from '../images/svg1.svg';
import Button from '@material-ui/core/Button';
import Svg4 from "./images/svg4.svg";





export default function Index() {
  return (

     
    <Container maxWidth="lg">
      <Box sx={{ my: 10 }}>
        <div class="main">
          <div class="text">
              <div class="text1">
              <Typography variant="h1" component="h1" 
              //gutterBottom
              >
                Welcome to Philotes!

              </Typography>
              </div>
              <div className="para">
                <p> <i>Want to rekindle your past contacts and revive that spark in your social life again ?</i></p>
              </div>
          </div>
          
          <div className="so">
                    <Svg4 />
          </div>
        
        </div>



<div className="right" style={{ width: '100%' }}>
      <Box display="flex" justifyContent="flex-end" m={1} p={1}  bgcolor="background.paper">
        <Box p={1}>

        <span className="right">
        <Button right="0px" align="top" variant="contained"  size="large"  size="40px" marginright="0" component={Link} noLinkStyle href="/test">
         GO Next  <i className="fas fa-arrow-right fa-1x"></i>
        </Button>
 
      </span>
          
        </Box>
       
      </Box>
     
     
    </div>
        {/* <div className="right">
       

        <span className="right">
        <Button right="0px" align="top" variant="contained" size="medium"  size="20px" marginright="0" component={Link} noLinkStyle href="/test">
          Next
        </Button>
 
      </span>
        </div> */}
      </Box>
      {/* <style jsx>{master}</style> */}
    </Container>
    
  );
  
}

