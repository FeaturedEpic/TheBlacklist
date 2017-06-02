$(document).ready(function(){
  console.log("Getting JSON");
  $.getJSON("blacklist.json", function(data){
    console.log("[DONE] Getting JSON");
    var blacklisters = data.blacklist;
    console.log("[DONE] Getting Blacklisters");
    console.log(blacklisters);
    $.each(blacklisters, function(index,el){
      console.log(el.name);
    });
  });
});
