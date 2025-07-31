// From: https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
// TODO: Improve legibility
export function timeAgo(date: Date) {
  var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  var interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + "y";
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + "mo";
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + "d";
  }

  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + "h";
  }

  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + "m";
  }

  return Math.floor(seconds) + "s";
}
