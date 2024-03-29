import Day, { DayPopover } from '@components/pageComponents/calendar/Day';
import { getWeekInterval } from '@lib/utils/luxon';
import { DateTime } from 'luxon';
import { useContext, useEffect, useState } from 'react';
import { AgendaContext } from '../Agenda/lib/context';
import { scheduleStructure } from '@lib/utils/schedule';
import { UserDataContext } from '@lib/context';
import useLessons from './lib/hooks/useLessons';
import LessonCell from '../LessonCell';
import ActionDialog from '@components/elements/modals/ActionDialog';
import { Info } from 'phosphor-react';
import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import SecondaryButton from '@components/elements/buttons/SecondaryButton';
import Link from 'next/link';
import { CircularProgress } from '@mui/material';
import { yearInfo } from '@lib/constants/calendar/yearInfo';

type Props = {};

const AgendaSchedule = ({}: Props) => {
    const { selectedDate, setSelectedDate } = useContext(AgendaContext);
    const { userDetails, loading } = useContext(UserDataContext);

    const classes = userDetails?.classes;

    const weekDates = getWeekInterval(selectedDate)
        .splitBy({ days: 1 })
        .slice(0, -1);

    const lessonsObject = useLessons(classes, weekDates);

    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const [dayInfo, setDayInfo] = useState<
        (CompleteDayInfo & { dayDate: DateTime }) | null
    >(null);
    const [selectedClass, setSelectedClass] = useState<ClassObject | null>(
        null
    );
    const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);
    const [classDialogOpen, setClassDialogOpen] = useState(false);

    useEffect(() => {
        if (!loading && !classes) setEnrollDialogOpen(true);
    }, [loading, classes]);

    return (
        <div className="relative">
            {loading && (
                <div className="absolute top-0 left-0 w-full h-full grid place-items-center">
                    <CircularProgress />
                </div>
            )}
            <table
                className="bg-slate-100 dark:bg-slate-800 border-slate-100 dark:border-slate-800 text-xs flex-grow w-full min-w-[55rem] min-h-[56rem]"
                cellSpacing={0}
                cellPadding={2}
            >
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700/50 text-center">
                    <tr className="shadow">
                        <td className="w-[calc(100%/47)]" />
                        <td className="font-bold w-[calc(100%*2/47)] text-sm text-slate-700 dark:text-slate-300">
                            Início
                        </td>
                        <td className="font-bold w-[calc(100%*2/47)] text-sm text-slate-700 dark:text-slate-300">
                            Térm.
                        </td>
                        {weekDates.map(({ start }) => (
                            <td
                                key={start.weekdayShort}
                                className="text-sm w-[calc(100%*7/47)] h-24"
                            >
                                <div className="text-slate-600 dark:text-slate-300 font-medium mb-1">
                                    {start
                                        .setLocale('pt-BR')
                                        .weekdayShort.slice(0, -1)
                                        .toUpperCase()}
                                </div>
                                <Day
                                    dayDate={start}
                                    dayInfo={
                                        yearInfo.months[start.month - 1].weeks[
                                            Math.ceil(start.day / 7) - 1
                                        ][start.weekday]
                                    }
                                    extraDayInfo={
                                        yearInfo.months[start.month - 1]
                                            .extraInfo.parsed[start.day]
                                    }
                                    onShowPopover={(e, completeDayInfo) => {
                                        setDayInfo(completeDayInfo);
                                        setAnchorEl(e.currentTarget);
                                    }}
                                    onHidePopover={() => {
                                        setAnchorEl(null);
                                    }}
                                    monthDate={start}
                                    onSelectDate={(date) =>
                                        setSelectedDate?.(date)
                                    }
                                    selectedDate={selectedDate}
                                    classes={{
                                        root: 'h-14 w-14 !rounded-full mx-auto',
                                        highlight: '!rounded-full',
                                        label: 'flex justify-center items-center h-full text-xl !mr-0',
                                        dot: 'hidden',
                                        labelWrapper:
                                            '!rounded-full top-0.5 left-0.5 w-[calc(100%-4px)] h-[calc(100%-4px)]'
                                    }}
                                />
                            </td>
                        ))}
                    </tr>
                    {Object.entries(scheduleStructure).map(
                        ([timeCode, { start, end, days }]) => (
                            <tr
                                key={timeCode}
                                className="divide-x divide-slate-300 dark:divide-slate-700"
                            >
                                <td className="font-semibold text-slate-800 dark:text-slate-100">
                                    {timeCode}
                                </td>
                                <th className="font-medium text-slate-600 dark:text-slate-400">
                                    {start}
                                </th>
                                <th className="font-medium text-slate-600 dark:text-slate-400">
                                    {end}
                                </th>
                                {Object.keys(days).map((dayCode) => {
                                    const lesson =
                                        lessonsObject?.[dayCode][timeCode];
                                    const isHoliday =
                                        !lesson?.type &&
                                        !lesson?.index &&
                                        !lesson?.numberOfLessonsOrWeight;

                                    return (
                                        <td key={dayCode} className="relative">
                                            {lesson && !isHoliday && (
                                                <LessonCell lesson={lesson} />
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        )
                    )}
                </tbody>
            </table>
            <DayPopover
                anchorEl={anchorEl}
                open={anchorEl !== null && dayInfo !== null}
                sx={{
                    pointerEvents: 'none'
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                disableRestoreFocus
                dayInfo={dayInfo}
            />
            <ActionDialog
                open={enrollDialogOpen}
                onClose={() => setEnrollDialogOpen(false)}
                colorName="blue"
                Icon={Info}
                title={'Escolha suas Matérias'}
                subtitle={'Para vê-las na sua Agenda'}
            >
                <Link href="/enroll" passHref>
                    <a>
                        <PrimaryButton>Escolher Matérias</PrimaryButton>
                    </a>
                </Link>
                <SecondaryButton onClick={() => setEnrollDialogOpen(false)}>
                    Cancelar
                </SecondaryButton>
            </ActionDialog>
        </div>
    );
};

export default AgendaSchedule;
