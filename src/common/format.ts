/*
 * Rounds to nearest integer and returns as a String with added thousands seperators.
 * Ex: 5842923.7 => 5,842,924
 */
export function formatThousands(number: number): string {
  return `${Math.round(number || 0)}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

/*
 * Rounds to nearest integer and returns as a String with added thousands seperators,
 * but if above 10,000 expresses as number of thousands and if above 1,000,000 expresses as number of millions (with 2 decimal places).
 * Ex: 4445.2 => 4,445
 *     78921 => 79k
 *     3444789 => 3.44m
 */
export function formatNumber(number: number): string {
  if (number > 1000000) {
    return `${(number / 1000000).toFixed(2)}m`;
  }
  if (number > 10000) {
    return `${Math.round(number / 1000)}k`;
  }
  return formatThousands(number);
}

/*
 * Formats a number as a percentage with the given precision (default 2), with 0 = 0 percent and 1 = 100 percent.
 * Ex: 0.79832 => 79.83
 */
export function formatPercentage(percentage: number, precision = 2): string {
  return ((percentage || 0) * 100).toFixed(precision);
}

/*
 * Formats a duration in seconds to be a String expressed as minutes and seconds.
 * Ex: 317.3 => 5:17
 */
export function formatDuration(duration: number): string {
  const seconds = Math.floor(duration % 60);
  return `${Math.floor(duration / 60)}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}
export function formatMilliseconds(duration: number): string {
  const sumSeconds = duration / 1000;
  const minutes = Math.floor(sumSeconds / 60);
  const seconds = sumSeconds % 60;
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds.toFixed(3)}` : seconds.toFixed(3)
  }`;
}
