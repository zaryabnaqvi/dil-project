import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
// import {Dawlance} from '../assets/Dawlance'
import Dawlance from '../../../Assets/Dawlance.png';
import IMC from '../../../Assets/IMC.png';
import IsmailIndustry from '../../../Assets/Ismail.png';
import Accord from '../../../Assets/Accord.png';
import Isl from '../../../Assets/Isl.jpeg';


const data = [
    {
        title: 'Dawlance Arcelik Global',
        subtitle:
            'The colaboration session explored prospects for synergy that may unite academia and industry.',
            icon: Dawlance,

    },
    {
        title: 'Indus Motor Company',
        subtitle:
            'The exhange of ideas between NED-IMC was described as enriching, comprehensive and forward thinking.',
            icon: IMC,
    },
    {
        title: 'Ismail Industries',
        subtitle:
            'The primary goal of this collaboration appears to be reducing gaps between industry and academia.',
            icon: IsmailIndustry
    },
    {
        title: 'International Accord',
        subtitle:
            'The collaborative meeting explored potential collaborations in various areas including staff recruitment, training and other mutually benefical initiatives.',
            icon: Accord
    },
    {
        title: 'International Steel Limited',
        subtitle:
            'Together, NED and ISL are embarking on a journey of impactful academic-industry partnerships.',
            icon: Isl
    },

];

const BrowserSupport = () => {
    return (
        <Box p={2} mb={2}>
            <Box marginBottom={4} textAlign={'center'}>
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: 'medium',
                    }}
                    gutterBottom
                    color={'secondary'}
                >
                    industrial collaboration
                </Typography>
                <Typography fontWeight={700} variant={'h4'}>
                MEMORANDUM OF UNDERSTANDING SIGNED WITH INDUSTRIES
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {data.map((item, i) => (
                    <Grid item xs={12} md={4} key={i}>
                        <Box
                            width={1}
                            height={1}
                            data-aos={'fade-up'}
                            data-aos-delay={i * 100}
                            data-aos-offset={100}
                            data-aos-duration={600}
                        >
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                alignItems={'center'}
                            >
                                <Box
                                    component={Avatar}
                                    width={80}
                                    height={80}
                                    marginBottom={2}
                                    src={item.icon}
                                />
                                <Typography
                                    variant={'h6'}
                                    gutterBottom
                                    fontWeight={500}
                                    align={'center'}
                                >
                                    {item.title}
                                </Typography>
                                {/* <Typography align={'center'} color="text.secondary">
                                    {item.subtitle}
                                </Typography> */}
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default BrowserSupport
