import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        An Important questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsa accusantium hic consectetur facilis recusandae! Necessitatibus, qui quas? Eveniet, repellendus ad voluptate optio blanditiis nulla tenetur corrupti velit eum? Eveniet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Another Important questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsa accusantium hic consectetur facilis recusandae! Necessitatibus, qui quas? Eveniet, repellendus ad voluptate optio blanditiis nulla tenetur corrupti velit eum? Eveniet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        One More Important questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsa accusantium hic consectetur facilis recusandae! Necessitatibus, qui quas? Eveniet, repellendus ad voluptate optio blanditiis nulla tenetur corrupti velit eum? Eveniet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Interesting Important questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsa accusantium hic consectetur facilis recusandae! Necessitatibus, qui quas? Eveniet, repellendus ad voluptate optio blanditiis nulla tenetur corrupti velit eum? Eveniet.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default FAQ;