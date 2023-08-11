function formatDateToYYYYMMDD(date) {
  // Get the year, month, and day from the date object.
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  // Pad the month and day with zeros if they are less than 10.
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  // Return the date in the format YYYYMMDD.
  return year + month + day;
}

function generateLog(message) {
  const container = document.getElementById('log')
  const label = document.createElement('label')
  label.innerHTML = 'log buat di-copy-paste<br>'
  const log = document.createElement('textarea')
  log.value = `✅ ${formatDateToYYYYMMDD(new Date())} ${message}`
  label.appendChild(log)
  container.appendChild(label)
}