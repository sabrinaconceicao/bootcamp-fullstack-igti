function leftPad(value, count = 2, char = "0") {
  const stringValue = value.toString();
  let newValue = stringValue;

  if (stringValue.length < count) {
    for (let i = 0; i < count - stringValue.length; i++) {
      newValue = char + stringValue;
    }
  }
  return newValue;
}

function getNewTimestamp() {
  const now = new Date();
  let results = "";

  results += leftPad(now.getDate());
  results += "/";
  results += leftPad(now.getMonth() + 1);
  results += "/";
  results += now.getFullYear();
  results += " ";
  results += leftPad(now.getHours());
  results += ":";
  results += leftPad(now.getMinutes());
  results += ":";
  results += leftPad(now.getSeconds());
  results += ".";
  results += leftPad(now.getMilliseconds(), 3);

  return results;
}
