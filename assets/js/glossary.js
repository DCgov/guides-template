  function searchGlossary (search, by) {
    $(glossary_data).each(function(index, value) {
      if (value[by].toLowerCase().indexOf(search) < 0) {
        $(".glossary-term#" + value.slug).attr("hidden-term", "true");
      } else {
        $(".glossary-term#" + value.slug).attr("hidden-term", "false");       
      }
    });
  }

  function findFirst (data, by, match) {
    for (var i = 0, len = data.length; i < len; i++) {
      if (data[i][by] === match)
          return data[i];
    }
    return null;
  }    

  $('a[define]').click(function() {
    var slug = $(this).attr("define");

    if (slug) {
      var search_object = findFirst($(glossary_data), "slug", slug)
      var search_string = search_object.term.toLowerCase();

      $(".glossary-term").attr("hidden-term", "true");
      $(".glossary-term#" + slug).attr("hidden-term", "false");       

      // searchGlossary(slug, "slug");

      $("#glossary-search").val(search_string);
      $("#glossary").toggle(display = true);      
    }
  });

  $(".glossary-toggle").click(function() {
    $("#glossary").toggle();
    $(".glossary-term").attr("hidden-term", "false")
  });

  $(".glossary-clear").click(function() {
    $("#glossary-search").val("");
  });

  $("#glossary-search").on('input', function() {
    var search_string = $("#glossary-search").val().toLowerCase();
    searchGlossary(search_string, "term");
  });

