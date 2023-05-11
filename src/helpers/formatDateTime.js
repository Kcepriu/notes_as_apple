import format from 'date-fns/format';

export const formatDateTitleNote = date => {
  if (!date) return;
  const newDate = Number(date);

  return format(newDate, "MMM  dd, YYY 'at' hh:mm a");
};

export const formatDateNoteToday = date => {
  if (!date) return;
  const newDate = Number(date);

  return format(newDate, 'hh:mm a');
};

export const formatDateNoteNoToday = date => {
  if (!date) return;
  const newDate = Number(date);

  return format(newDate, 'M/d/YY');
};

export const formatDateNote = date => {
  if (!date) return;
  const newDate = Number(date);

  const result =
    startDay(newDate) === startDay(Date.now())
      ? formatDateNoteToday(newDate)
      : formatDateNoteNoToday(newDate);
  return result;
};

const startDay = numberDate => {
  if (!numberDate) return;
  const newDate = Number(numberDate);

  const start = new Date(newDate);
  return start.setHours(0, 0, 0, 0);
};
