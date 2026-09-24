import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import s from './HeroGraphic.module.css';

// Material Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StorageIcon from '@mui/icons-material/Storage';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CodeIcon from '@mui/icons-material/Code';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';

/* ============================================================
   DATA CONSTANTS
   ============================================================ */

const HERO = {
  eyebrow: 'Health Intelligence',
  headline: ['Make each', 'heart-health decision', 'legible.'],
  body: 'A focused workspace for evaluating cardiovascular disease risk with a transparent machine-learning model and a clear patient workflow.',
  primaryCta: 'Start an evaluation',
  primaryTo: '/predict',
  secondaryCta: 'Explore the method',
  secondaryTo: '/about',
};

const STATS = [
  { value: '70K+', label: 'training records' },
  { value: '11', label: 'patient inputs' },
  { value: '2', label: 'risk classes' },
];

const FEATURES = [
  {
    eyebrow: 'Data Foundation',
    title: 'Patient health patterns',
    body: 'Demographic, vital-sign, and lifestyle data are brought together in one consistent evaluation.',
    icon: 'database',
  },
  {
    eyebrow: 'Risk Clarity',
    title: 'Risk Clarity',
    body: 'See the modeled disease-risk probability alongside the final classification.',
    icon: 'activity',
  },
  {
    eyebrow: 'Built for Speed',
    title: 'From inputs to signal',
    body: 'A concise form and real-time model endpoint keep each review moving without unnecessary steps.',
    icon: 'code',
  },
];

const FLOW = {
  eyebrow: 'Evaluation Flow',
  headline: ['Structured inputs.', 'Measurable confidence.'],
  description: 'Every decision starts with the same clear path, making the model easier to use and the output easier to explain.',
  callout: 'Model responses are returned with clear probability context.',
};

const STEPS = [
  { num: '01', title: 'Capture context', body: 'Record age, vitals, cholesterol, glucose, and lifestyle details.' },
  { num: '02', title: 'Encode features', body: 'Normalize the patient data into model-ready numerical features.' },
  { num: '03', title: 'Review risk', body: 'Use the predicted class and probability to inform the next conversation with the patient.' },
];

const FOOTER = { left: 'CardioRisk AI', right: 'Cardiovascular risk model' };

/* ============================================================
   ANIMATION VARIANTS
   ============================================================ */

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      staggerChildren: 0.15,
      ease: "easeOut"
    } 
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

/* ============================================================
   COMPONENTS
   ============================================================ */

function FeatureIcon({ name }) {
  if (name === 'database') return <StorageIcon sx={{ fontSize: 32 }} />;
  if (name === 'activity') return <ShowChartIcon sx={{ fontSize: 32 }} />;
  if (name === 'code') return <CodeIcon sx={{ fontSize: 32 }} />;
  return null;
}

export default function Home() {


  return (
    <div className="page-shell">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        
        {/* HERO SECTION */}
        <Box component="section" sx={{ py: { xs: 6, md: 10 }, mb: 4 }}>
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
            
            {/* Left Column (Copy) */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div variants={itemVariants}>
                <Typography variant="subtitle2" sx={{ color: 'primary.main', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                  {HERO.eyebrow}
                </Typography>
                
                <Typography variant="h1" sx={{ mb: 3 }} className="text-glow">
                  {HERO.headline[0]}<br />
                  {HERO.headline[1]}<br />
                  <Box component="span" sx={{ color: 'primary.main' }}>{HERO.headline[2]}</Box>
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, maxWidth: 500, fontSize: '1.1rem' }}>
                  {HERO.body}
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 6, alignItems: 'center' }}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      component={Link}
                      to={HERO.primaryTo}
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                    >
                      {HERO.primaryCta}
                    </Button>
                  </motion.div>
                  <Button
                    component={Link}
                    to={HERO.secondaryTo}
                    variant="text"
                    sx={{ color: 'primary.light', textDecoration: 'underline', '&:hover': { textDecoration: 'underline' } }}
                  >
                    {HERO.secondaryCta}
                  </Button>
                </Box>

                <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                  {STATS.map((stat, i) => (
                    <Box key={stat.label} sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      {i > 0 && <Divider orientation="vertical" flexItem sx={{ borderColor: 'divider' }} />}
                      <Box>
                        <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 800 }}>{stat.value}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{stat.label}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Right Column (Hero Graphic adapted to dark mode) */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div variants={itemVariants} className="animate-float">
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 350, md: 450 },
                    borderRadius: 6,
                    background: 'linear-gradient(135deg, rgba(241,245,249,0.5) 0%, rgba(255,255,255,0.8) 100%)',
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: '0 20px 40px -12px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <div className={s.heroCardBg} />
                  <div className={s.scene}>
                    <div className={s.orbits}>
                      <div className={`${s.orbitRing} ${s.orbitRing1}`}>
                        <div className={`${s.orbitDot} ${s.orbitDotViolet}`} />
                      </div>
                      <div className={`${s.orbitRing} ${s.orbitRing2}`}>
                        <div className={`${s.orbitDot} ${s.orbitDotCyan}`} />
                      </div>
                    </div>
                    
                    <div className={s.cubeWrap}>
                      <div className={s.cube}>
                        <div className={`${s.cubeFace} ${s.cubeFront}`}><div className={s.cubeCore} /></div>
                        <div className={`${s.cubeFace} ${s.cubeBack}`} />
                        <div className={`${s.cubeFace} ${s.cubeRight}`} />
                        <div className={`${s.cubeFace} ${s.cubeLeft}`} />
                        <div className={`${s.cubeFace} ${s.cubeTop}`} />
                        <div className={`${s.cubeFace} ${s.cubeBottom}`} />
                      </div>
                    </div>

                    <div className={`${s.pill} ${s.pillTop}`}>
                      <div className={`${s.pillDot} ${s.pillTone_violet}`} />
                      Age 54
                    </div>
                    <div className={`${s.pill} ${s.pillLeft}`}>
                      <div className={`${s.pillDot} ${s.pillTone_cyan}`} />
                      BP 130/85
                    </div>
                    <div className={`${s.pill} ${s.pillRight}`}>
                      <div className={`${s.pillDot} ${s.pillTone_mint}`} />
                      Chol 210
                    </div>
                  </div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <Typography variant="h2" sx={{ display: 'none' }}>Core Features</Typography>
            <Grid container spacing={3}>
              {FEATURES.map((feature, idx) => (
                <Grid key={feature.eyebrow} size={{ xs: 12, md: 4 }}>
                  <motion.div variants={itemVariants} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ p: { xs: 3, md: 4 }, flexGrow: 1 }}>
                        <Box sx={{ 
                          width: 56, height: 56, borderRadius: 3, mb: 3, 
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          backgroundColor: 'rgba(14, 165, 233, 0.1)', color: 'primary.main' 
                        }}>
                          <FeatureIcon name={feature.icon} />
                        </Box>
                        <Typography variant="subtitle2" sx={{ mb: 1, color: 'primary.light' }}>
                          {feature.eyebrow}
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 2, color: 'text.primary', fontWeight: 700 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {feature.body}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>

        {/* FLOW SECTION */}
        <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <Grid container spacing={4} sx={{ mb: 6 }} alignItems="flex-end">
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div variants={itemVariants}>
                  <Typography variant="subtitle2" sx={{ color: 'primary.main', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                    {FLOW.eyebrow}
                  </Typography>
                  <Typography variant="h2" sx={{ color: 'text.primary' }}>
                    {FLOW.headline[0]}<br />{FLOW.headline[1]}
                  </Typography>
                </motion.div>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div variants={itemVariants}>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {FLOW.description}
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ mb: 6, borderColor: 'divider' }} />

            <Grid container spacing={4}>
              {STEPS.map((step) => (
                <Grid key={step.num} size={{ xs: 12, md: 4 }}>
                  <motion.div variants={itemVariants}>
                    <Typography variant="h4" sx={{ color: 'secondary.light', fontWeight: 800, mb: 2 }}>
                      {step.num}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {step.body}
                    </Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            <motion.div variants={itemVariants}>
              <Paper variant="outlined" sx={{ mt: 8, p: 3, display: 'flex', alignItems: 'center', gap: 2, backgroundColor: 'rgba(14, 165, 233, 0.05)', borderColor: 'rgba(14, 165, 233, 0.2)' }}>
                <ShieldOutlinedIcon sx={{ color: 'primary.main' }} />
                <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 500 }}>
                  {FLOW.callout}
                </Typography>
              </Paper>
            </motion.div>
          </motion.div>
        </Box>

        {/* FOOTER */}
        <Box component="footer" sx={{ pt: 4, pb: 2, borderTop: '1px solid', borderColor: 'divider', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {FOOTER.left} <span style={{ opacity: 0.3, margin: '0 8px' }}>|</span> {FOOTER.right}
          </Typography>
        </Box>

      </motion.div>
    </div>
  );
}
