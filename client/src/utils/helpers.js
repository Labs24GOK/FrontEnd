import moment from 'moment-timezone';
const currentTimeZone = moment.tz.guess();

export function timeConverter(time) {
  const changedTime = new Date(
    `1988-01-01T${time}Z`
  ).toLocaleTimeString(
    {},
    {
      timeZone: 'UTC',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric'
    }
  );
  return changedTime;
}

export function dateConverter(date) {
  // const tzAbbreviation = moment
  //   .tz(date, currentTimeZone)
  //   .format('z');

  // const options = {
  //   year: 'numeric',
  //   month: 'numeric',
  //   day: 'numeric',
  //   timeZone: tzAbbreviation
  // };

  let changedDate = moment
    .tz(date, currentTimeZone)
    .add(1, 'd')
    .format('DD/MM/YYYY');

  // const changedDate = new Date(date).toLocaleDateString(
  //   'en-GB',
  //   options
  // );
  return changedDate;
}
