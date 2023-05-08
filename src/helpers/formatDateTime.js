import format from 'date-fns/format';

export const formatDateTitleNote = date => {
  return format(date, "MMM  dd, YYY 'at' hh:mm a");
};

export const formatDateNoteToday = date => {
  return format(date, 'hh:mm a');
};

export const formatDateNoteNoToday = date => {
  return format(date, 'M/d/YY');
};

export const formatDateNote = date => {
  const result =
    startDay(date) === startDay(Date.now())
      ? formatDateNoteToday(date)
      : formatDateNoteNoToday(date);
  return result;
};

const startDay = numberDate => {
  const start = new Date(numberDate);
  return start.setHours(0, 0, 0, 0);
};
