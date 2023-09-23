/**
 * Parse Twitter date as JS Date
 * https://stackoverflow.com/questions/13132964/how-to-format-twitter-facebook-feed-date-with-javascript
 * @param {string} dateString from Twitter
 * @returns {Date} parsed
 */
export default function parseTwitterDate(dateString: string): Date {
  const b: string[] = dateString.split(/[: ]/g);
  const m: Record<string, number> = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  };

  return new Date(
    Date.UTC(
      Number(b[7]),
      m[b[1].toLowerCase()],
      Number(b[2]),
      Number(b[3]),
      Number(b[4]),
      Number(b[5])
    )
  );
}
