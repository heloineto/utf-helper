import {
  Dialog,
  DialogProps,
  Step,
  Stepper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

type Props = {
  campus: string | undefined;
  course: string | undefined;
};

const steps = [
  { label: 'Câmpus', value: 'campus' },
  { label: 'Curso', value: 'course' },
];

const CampusAndCourseDialog = ({
  campus,
  course,
  ...dialogProps
}: Props & DialogProps) => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('md'));
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Dialog fullScreen={mobile} maxWidth={'sm'} fullWidth={true} {...dialogProps}>
      <Stepper activeStep={activeStep}>
        {steps.map(({ label, value }) => (
          <Step key={value}>{label}</Step>
        ))}
      </Stepper>
    </Dialog>
  );
};

export default CampusAndCourseDialog;
