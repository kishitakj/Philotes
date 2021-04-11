
  
import Image from "next/image";
import Link from "next/link";
import * as React from 'react';
import { motion } from "framer-motion";
// import StyledLink from "../components/StyledLink";
import Svg2 from '../images/svg2.svg';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function FeatureItem({ title, subtitle, icon, isLeftAligned, color }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.3,
      }}
      className={`${
        isLeftAligned ? "has-text-left-desktop" : "has-text-right-desktop"
      } mb-6`}
    >
      <div className={`icon has-text-${color || "primary"} is-large mb-2`}>
        <i className={`fas ${icon} fa-3x`} />
      </div>
      <h3 className="title has-text-weight-bold is-spaced is-5">{title}</h3>
      <p className="subtitle is-6 has-text-grey">{subtitle}</p>
    </motion.div>
  );
}

export default function Test() {
  return (
    <>
    <section className="hero section is-block is-relative is-medium">
      
      <div className="container">
        <div className="columns is-vcentered is-variable is-desktop">
         
          <div className="column is-8 is-offset-2">
            <motion.h1
              className="title has-text-weight-bold is-1 is-size-2-mobile is-spaced"
              layoutId="title"
            >
              <div>Features Provided</div>
            </motion.h1>
          </div>
        </div>
        <div className="columns is-vcentered is-variable is-4 is-desktop mt-6">
          <div className="column is-12 is-2-desktop">
            <div>
              <FeatureItem
                title="Reminders to connect"
                subtitle="Our webapp will give notifications to remind you to ping your connections"
                icon="fa-bell"
                color="danger"
              />
              <FeatureItem
                title="Organized"
                subtitle="Know who you contacted last"
                icon="fas fa-stopwatch"
              />
              <FeatureItem
                title="Tracker"
                subtitle="Track your progress"
                icon="fa-check-double"
                color="info"
              />
            </div>
          </div>
          <div className="column is-1" />
          <div className="column is-6">
            <motion.figure className="image" layoutId="image">
            <div className="svg2">
            <Svg2/>
            </div>
            </motion.figure>
          </div>
          <div className="column is-1" />
          <div className="column is-12 is-2-desktop">
            <div>
              <FeatureItem
                isLeftAligned
                title="Connect regularly"
                subtitle="Anyone can do it"
                icon="fas fa-envelope-square"
              />
              <FeatureItem
                isLeftAligned
                title="Fill in important details"
                subtitle="Details like birthdays, locations, etc for your close connections"
                icon="fa-book"
                color="danger"
              />
              <FeatureItem
                isLeftAligned
                title="Birthday Ping"
                subtitle="Message connections on their birthdays regularly"
                icon="fas fa-birthday-cake"
                color="warning"
              />
            </div>
          </div>
        </div>
        <motion.div
          className="is-spaced has-text-centered"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
            </motion.div>
            </div>
            
           
      
      
          {/* <Link href="/" passHref>
            Get Started
          </Link> */}
          <>
          <div className="right" style={{ width: '100%' }}>
      <Box display="flex" justifyContent="flex-end" m={1} p={1}  bgcolor="background.paper">
        <Box p={1}>

        <span className="right">
        <Button right="0px" align="top" variant="contained"  size="large"  size="40px" marginright="0" noLinkStyle href="/next1">
         GO Next  <i className="fas fa-arrow-right fa-1x"></i>
        </Button>
 
      </span>
          
        </Box>
       
      </Box>
     
     
    </div>
      {/* <Button right="0px" align="top" variant="contained" size="medium"  size="20px" marginright="0"  noLinkStyle href="/next1">
       
       Next
     
     </Button> */}
     </>
      
     
    </section>
    
         
            
        
       
 
    
     
    </>
    
  );
}