$(document).ready(function(){
  $.ajaxSetup({async:false});
  console.log("Getting JSON");
  $.getJSON("blacklist.json", function(data){
    console.log("[DONE] Getting JSON");
    var blacklisters = data.blacklist;
    console.log("[DONE] Getting Blacklisters");
    $.each(blacklisters, function(index,el){
      $("main").append("<div class='blacklister'><img src='" + el.image + "' alt='" + el.name + "'><p class='name'>" + el.name + " (#" + el.no + ")</p></div>");
    });
  });
});
