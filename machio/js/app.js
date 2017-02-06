
$(function(){
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDate();
  var mm = ("0" + m).slice(-2);
  var dd = ("0" + d).slice(-2);
	$("#demo1").text(y + "/" + mm + "/" + dd)
});

