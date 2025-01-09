export const compareDate = (date: Date|string) => {
    let previousDate= date as Date;
    if(typeof date === "string"){
        previousDate = new Date(date);
    }

  const newDate = new Date();
  const milli = newDate.getTime() - previousDate.getTime();

  const days = Math.floor(milli / (24 * 60 * 60 * 1000));
  const hours = Math.floor(milli / (60 * 60 * 1000)) % 24;

  const min = Math.floor(milli / (60 * 1000)) % 60;
  const sec = Math.floor(milli / 1000) % 60;

  const str =
    (days ? days + "d" : "") +
    (hours ? hours + "h" : "") +
    (min ? min + "m" : "") +
    sec +
    "s";
  return `added ${str} ago`;
};

export const transformDateText = (date?: string) => {
  if (!date) return "unknown";
  const newDate = new Date(date);
  return newDate.toDateString();
};

export const getDuration = (seconds?: number) => {
    // new Date to avoid parsing as CompareDate
    const mockDate = new Date();
    mockDate.setHours(0,0,0)
    mockDate.setSeconds(seconds ?? 0);
    return mockDate.toLocaleTimeString()

}