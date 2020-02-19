export function timeConverter(time) {
  const changedTime = new Date(`1988-01-01T${time}Z`).toLocaleTimeString({},{timeZone: 'UTC', hour12: true, hour:'numeric', minute:'numeric'}
  );
  return changedTime
}

export function dateConverter(date) {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
  const changedDate = new Date(date).toLocaleDateString('en-GB', options);
  return changedDate;
}

