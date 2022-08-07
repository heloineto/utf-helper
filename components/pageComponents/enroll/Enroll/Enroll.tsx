import { useMediaQuery, useTheme } from '@mui/material';
import EnrollDesktop from './EnrollDesktop';
import EnrollMobile from './EnrollMobile';

interface Props {}

const Enroll = (props: Props) => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('xl'));

  if (mobile) return <EnrollMobile />;

  return <EnrollDesktop />;
};

export default Enroll;
