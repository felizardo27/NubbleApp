import {parseISO, differenceInSeconds, format} from 'date-fns';

function formatRelative(dataISO: string) {
  const date = parseISO(dataISO);
  const now = Date.now();

  const diffInSeconds = differenceInSeconds(now, date);

  if (diffInSeconds < 0) {
    return format(date, 'dd/MM/yyyy');
  }

  if (diffInSeconds < 60) {
    return `${diffInSeconds} s`;
  }

  const diffInMinutes = Math.round(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} m`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} h`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} d`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} sem`;
  }

  const diffInMouths = Math.floor(diffInDays / 30);
  if (diffInMouths < 12) {
    return `${diffInMouths} ${diffInMouths === 1 ? 'mês' : 'meses'}`;
  }

  return format(date, 'dd/MM/yyyy');
}

export const dateUtils = {formatRelative};
