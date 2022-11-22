// Calculate runtime in human-understandable "hours and minutes" phrasing
export function toHoursAndMins(runtimeMins) {
  // Calculate number of whole hours in runtime
  const wholeHours = Math.floor(runtimeMins / 60);

  // Calculate modulus of minutes (number of minutes left over after full hours calculated)
  const remainderMins = runtimeMins % 60;

  // Return whole hours, with "hour" singular if only one hour, "hours" plural if more than one, plus minutes
  return (
    wholeHours +
    (wholeHours === 1 ? " hour " : " hours ") +
    remainderMins +
    " min."
  );
}
