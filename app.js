function actualizarSalidaOk() {
  $("iframe")
    .contents()
    .find("html")
    .html(
      "<style>" +
        $("#cssPanel").val() +
        " </style> <body>" +
        $("#htmlPanel").val() +
        "<script>" +
        document
          .getElementById("outputPanel")
          .contentWindow.eval($("#javascriptPanel").val())
    );
}

$(".boton").hover(
  function () {
    $(this).addClass("botonMarcado");
  },
  function () {
    $(this).removeClass("botonMarcado");
  }
);

$(".boton").click(function () {
  $(this).toggleClass("botonActivo");
  var divId = $(this).attr("id") + "Div";
  $("#" + divId).toggleClass("oculto");
});

actualizarSalidaOk();

$("textarea").on("change keyup paste", function () {
  actualizarSalidaOk();
});
