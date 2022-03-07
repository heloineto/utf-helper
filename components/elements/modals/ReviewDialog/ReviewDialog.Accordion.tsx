import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
} from '@mui/material';
import { CaretDown } from 'phosphor-react';
import { ComponentProps, useState } from 'react';

interface Props extends AccordionProps {
  title: string;
  titleProps?: ComponentProps<'div'>;
}

const ReviewDialogAccordion = ({ title, titleProps, children }: Props) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <Accordion
      className="bg-white dark:bg-slate-900 ring-1 ring-slate-700/5 dark:ring-white/10"
      expanded={expanded}
      onChange={() => setExpanded((value) => !value)}
    >
      <AccordionSummary expandIcon={<CaretDown className="h-5 w-auto" weight="bold" />}>
        <div className="text-lg uppercase" {...titleProps}>
          {title}
        </div>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default ReviewDialogAccordion;
