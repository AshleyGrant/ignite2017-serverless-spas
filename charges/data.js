const start = new Date(2017, 7, 1);
const end = new Date(2017, 7, 31);

function generateChargeDataPoint(previousStart) {
  const oneDayFromPreviousStart = new Date(previousStart.getTime() + 24 * 60 * 60 * 1000);
  const startDate = new Date(+previousStart + Math.random() * (oneDayFromPreviousStart - previousStart));
  const chargeLengthInSeconds = Math.random() * 21600; // random number of seconds less than 6 hours
  const endDate = new Date(startDate.getTime() + (chargeLengthInSeconds * 1000));
  const energy = (chargeLengthInSeconds * 0.00102117).toLocaleString('en', { maximumFractionDigits: 2 });

  return {
    plugIn: processDate(startDate),
    plugOut: processDate(endDate),
    energy: energy,
    chargingTime: secondsToPrettyString(chargeLengthInSeconds)
  };
}

function secondsToPrettyString(totalSeconds) {
  const hours = totalSeconds / 3600;
  const hoursAsInt = Math.floor(hours);
  const minutes = (totalSeconds - (hoursAsInt * 3600)) / 60;
  const minutesAsInt = Math.floor(minutes);
  const seconds = (totalSeconds - (hoursAsInt * 3600) - (minutesAsInt * 60));
  const secondsAsInt = Math.floor(seconds);

  const hoursString = hoursAsInt.toLocaleString('en', { minimumIntegerDigits: 2 });
  const minutesString = minutesAsInt.toLocaleString('en', { minimumIntegerDigits: 2 });
  const secondsString = secondsAsInt.toLocaleString('en', { minimumIntegerDigits: 2 });

  return `${hoursString}:${minutesString}:${secondsString}`;
}

function processDate(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let hours = date.getHours();
  let amPm = hours > 12 ? 'PM' : 'AM';
  hours = hours > 12 ? hours - 12 : hours;
  const minutes = date.getMinutes().toLocaleString('en', { minimumIntegerDigits: 2 });
  return {
    isoDate: date.toISOString(),
    prettyDate: `${hours}:${minutes} ${amPm} ${month}/${day}/2017`
  };
}

function dataGenerator(count) {
  let prevDate = start;
  const charges = [];
  for (let i = 0; i < count; i++) {
    const charge = generateChargeDataPoint(prevDate);
    charges.push(charge);
    prevDate = new Date(charge.plugOut.isoDate);
  }

  return charges;
}


const map = new Map();

map.set(1, {
  name: 'Model S',
  data: dataGenerator(10)
});

map.set(2, {
  name: 'Model 3',
  data: dataGenerator(10)
});

map.set(3, {
  name: 'Model X',
  data: dataGenerator(10)
});

module.exports = map;
