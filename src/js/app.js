console.log('my-note app.js');

$(function()
{
  $('#memo').val(localStorage.getItem('memo'));

  // new note
  $('.btn-newnote').click(function()
  {
    $('#memo').val("");
  });

  // save note
  $('.btn-savenote').click(function()
  {
    localStorage.setItem('memo', $('#memo').val());
  });

  // download Note
  $('.btn-downloadnote').click(function()
  {
    var blob = new Blob([$('#memo').val()], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "memo.txt");
  });

  // about
  $('.btn-about').click(function()
  {
    var display = $('.about').css("display");
    if(display=="none")  $('.about').css("display", 'block');
    else if(display=="block")  $('.about').css("display", 'none');
  });

  // full screen
  $('.btn-fullscreen').click(function()
  {
    console.log('fullscreen click');
    if (screenfull.enabled) {
      screenfull.request();
    } 
  })
});
