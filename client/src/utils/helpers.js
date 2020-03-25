import React from 'react';
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

  let changedDate = moment
    .tz(date, currentTimeZone)
    .add(1, 'd')
    .format('DD/MM/YYYY');

  return changedDate;
}
export function createDropdown (options) {
  return options.map(opt => {
    return(
      <option value={opt.value}>{opt.label}</option>
    )
  })
}