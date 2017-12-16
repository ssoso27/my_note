console.log('my-note app.js');

function getDom(name)
{
  return document.getElementsByClassName(name);
}

var btn_new = getDom('btn-newnote')[0];
var btn_save = getDom('btn-savenote')[0];
var btn_about = getDom('btn-about')[0];
var ta_memo = document.getElementById('memo');

btn_new.addEventListener('click', function() {
  console.log('click new note');
  ta_memo.value = "";
});

btn_save.addEventListener('click', function()
{
  console.log('click save button');
  localStorage.setItem('strMemo', ta_memo.value);
});

window.addEventListener('load', function()
{
  ta_memo.value = localStorage.getItem('strMemo');
});
