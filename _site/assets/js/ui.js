$(document).ready(function() {

  $(".glossary-toggle").click(function() {
    $("#glossary").toggle();
    $(".glossary-term").attr("hidden-term", "false")
  });

  $(".glossary-clear").click(function() {
    $("#glossary-search").val("");
    // $(".glossary-term").attr("hidden-term", "false");
  });

  $("#glossary-search").on('input', function() {
    var search = $("#glossary-search").val().toLowerCase();

    $(glossary_data).each(function(index, value) {
      if (value["term"].toLowerCase().indexOf(search) < 0) {
        $("#" + value.slug).attr("hidden-term", "true")
      } else {
        $("#" + value.slug).attr("hidden-term", "false")        
      }
    });
  });

});

