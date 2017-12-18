$(function()
{
  console.log('my-note app.js');

  var $btn_new = $('.btn-newnote');
  var $btn_save = $('.btn-savenote');
  var $btn_about = $('.btn-about');
  var $ta_memo = $('#memo')[0];

  $btn_new.click(function()
  {
    alert("new button click");
  });

  $btn_save.click(function()
  {
    alert("save button click");
  });

  $btn_about.click(function()
  {
    alert("about button click");
  });

});
