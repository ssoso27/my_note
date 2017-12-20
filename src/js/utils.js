console.log('my-note utils.js');

function getValue(name)
{
  return $(name).val();
}

function saveToLocal(key, value)
{
    localStorage.setItem(key, value);
}

function downloadText(filename, value)
{
  var blob = new Blob([value], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename);
}
