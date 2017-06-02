$(document).ready(function(){
  $.ajaxSetup({async:false});
  console.log("Getting JSON");
  $.getJSON("blacklist.json", function(data){
    console.log("[DONE] Getting JSON");
    $.each(data, function(index,el){
      console.log(el.name);
    });
  });
});
