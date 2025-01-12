import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typed from 'react-typed';
import dilimg from '../../../Assets/dilimg.jpg'
import { Toaster } from 'react-hot-toast';
const Hero = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    return (
        <Grid container spacing={4}>
            <Toaster position="top-center" reverseOrder={false} /> 
            <Grid item container xs={12} md={6} alignItems={'center'}>
                <Box data-aos={isMd ? 'fade-right' : 'fade-up'} paddingLeft={isMd && 2} p={4} >
                    <Box marginBottom={2}>
                        <Typography
                            variant="h4"
                            color="text.primary"
                            sx={{ fontWeight: 700 }}
                        >
                            Your Gateway to Innovative {' '} <br />
                            {/* and {' '} */}
                            <Typography
                                color={'primary'}
                                component={'span'}
                                variant={'inherit'}
                                sx={{
                                    background: `linear-gradient(180deg, transparent 82%, ${alpha(theme.palette.secondary.main, 0.3)} 0%)`,
                                }}
                            >
                                <Typed
                                    strings={['Collaboration', 'Solutions']}
                                    // , 'Startup']}
                                    typeSpeed={100}
                                    loop={true}
                                />
                            </Typography>
                        </Typography>
                    </Box>
                    <Box marginBottom={3}>
                        <Typography variant="h6" component="p" color="text.secondary">
                        Explore our portal to access university services 
                        tailored to meet industry needs, 
                            <br />
                        Fostering collaboration and driving success. Let’s innovate together!
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }}
                        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth={isMd ? false : true}
                        >
                            Start now
                        </Button>
                        <Box
                            component={Button}
                            variant="outlined"
                            color="primary"
                            size="large"
                            marginTop={{ xs: 2, sm: 0 }}
                            marginLeft={{ sm: 2 }}
                            fullWidth={isMd ? false : true}
                        >
                            Learn more
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid
                item
                container
                alignItems={'center'}
                justifyContent={'center'}
                xs={12}
                md={6}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <Box
                    component={LazyLoadImage}
                    height={1}
                    width={1}
                    src={dilimg}
                    alt="..."
                    effect="blur"
                    boxShadow={3}
                    borderRadius={2}
                    maxWidth={600}
                    sx={{
                        filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default Hero
