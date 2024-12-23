jQuery("#js-btn-menu").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-btn-menu").toggleClass("is-checked");
  jQuery("#js-contentArea").toggleClass("is-checked");
});
