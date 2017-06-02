$(document).ready(function(){
  $.getJSON("blacklist.json", function(data){
    var blacklisters = data.blacklist;
    $.each(blacklisters, function(index,el){
      alert(el.name);
    });
  });
});
