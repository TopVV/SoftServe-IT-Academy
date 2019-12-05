function countdown(duration) {
    let sign;
    let seconds, minutes, hours;
    let secondsDivider = 1000;
    let minutesDivider = 1000 * 60;
    let hoursDivider = 1000 * 60 * 60;

    if (duration < 0) {
        sign = "-";
        duration = Math.abs(duration);
    } else {
        sign = "+"
    }

    seconds = Math.floor(duration / secondsDivider) % 60;
    minutes = Math.floor(duration / minutesDivider) % 60;
    hours = Math.floor(duration / hoursDivider);

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;

    return `${sign}${hours}:${minutes}:${seconds}`
}