console.log('my-note app.js');

$(function()
{
  try {
    $('#memo').val(localStorage.getItem('memo'));
  } catch (e) {

  } finally {

  }
  // alert(localStorage.getItem('memo'));
});

// new note
$('.btn-newnote').click(function()
{
  $('#memo').val("");
});

// save note
$('.btn-savenote').click(function()
{
  localStorage.setItem('memo', $('#memo').val());
  alert($('#memo').val() + "저장!");
});

// about
$('.btn-about').click(function()
{
});
