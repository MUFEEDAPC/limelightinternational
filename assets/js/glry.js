// lightbox
$("#filterable-gallery .gallery-item .bg-image").on("click", function (event) {
  event.preventDefault();

  // var link = $(this).find('img').attr('src');
  // $('.gallery img').attr('src', '');
  // $('.gallery img').attr('src', link);

  //    var bgimg =$(this).find('bg-image');
  //    $('.gallery img').attr('src', '');
  //    $('.gallery img').bgimg;
  //  find('bg-image');

  var bgimg = $(this).attr("data-src");
  $('.gallery img').attr('src', bgimg);
  console.log(bgimg);

//   $(".gallery img").attr("src", bgimg);

  $(".gallery").fadeIn("slow");

  console.log("hello");
});
// close lightbox
$(".gallery").on("click", function (event) {
  event.preventDefault();
  $(".gallery").fadeOut("slow");
});

// https://codepen.io/saintasia/pen/dzqZov
