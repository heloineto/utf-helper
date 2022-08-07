import Subjects, { SubjectsSafeguard } from '@components/pageComponents/enroll/Subjects';
import { UserDataContext } from '@lib/context';
import { useContext, useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import Schedule from '@components/pageComponents/enroll/Schedule';
import { Calendar, GraduationCap } from 'phosphor-react';
import classNames from 'clsx';
import { motion } from 'framer-motion';

interface Props {}

const EnrollMobile = (props: Props) => {
  const { userDetails } = useContext(UserDataContext);

  const [showSubjects, setShowSubjects] = useState(false);
  const [animating, setAnimating] = useState(false);

  return (
    <>
      <div
        className={classNames(
          'overflow-auto absolute',
          showSubjects || animating ? 'block' : 'hidden'
        )}
        style={{ width: '100%', height: '100%' }}
      >
        {userDetails?.campus && userDetails?.course ? (
          <Subjects campus={userDetails?.campus} course={userDetails?.course} />
        ) : (
          <SubjectsSafeguard />
        )}
      </div>

      <motion.div
        className="w-full h-full overflow-auto"
        variants={{
          open: { translateY: '100%' },
          closed: { translateY: 0 },
        }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
        animate={showSubjects ? 'closed' : 'open'}
        onAnimationStart={() => setAnimating(true)}
        onAnimationEnd={() => setAnimating(false)}
      >
        <Schedule />
      </motion.div>

      <Tooltip title={`Mostrar ${showSubjects ? 'cronograma' : 'matérias'}`} arrow>
        <IconButton
          className={classNames(
            'h-14 w-14 absolute bottom-5 right-5 shadow-xl z-50 text-white',
            showSubjects
              ? 'bg-orange-500 hover:bg-orange-600'
              : 'bg-purple-500 hover:bg-purple-600'
          )}
          onClick={() => setShowSubjects((value) => !value)}
        >
          {showSubjects ? (
            <Calendar className="w-7 h-7" weight="regular" />
          ) : (
            <GraduationCap className="w-7 h-7" weight="regular" />
          )}
        </IconButton>
      </Tooltip>
    </>
  );
};

export default EnrollMobile;
