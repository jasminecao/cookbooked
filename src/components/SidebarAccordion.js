import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { TriangleDownIcon } from '@primer/octicons-react'
import { Checkbox } from '@/components/Checkbox'
import { SubHeading } from '@/components/styles/Text'
import { useTimer } from '@/hooks/useTimer'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<TriangleDownIcon className="mb-0" size={27} fill='black'/>}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#FDFDFB',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row-reverse',
  marginLeft: '.5rem',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
    marginBottom: '0rem'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingTop: '0',
  marginTop: '0'
}));

export default function CustomizedAccordions({timer}) {

  const [DoughTimer, startTimer, hasStarted] = timer;
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className="flex items-center pt-0 mt-0" aria-controls="panel1d-content" id="panel1d-header">
          <span>Chill Dough</span>
        </AccordionSummary>
        <AccordionDetails className="py-0 my-0">
            {DoughTimer}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}