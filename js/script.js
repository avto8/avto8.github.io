     $("#btn-callback-carousel").on("click", function(){
        $("#callback-modal").modal('show');
      });
    $("#btn-callback-carousel2").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel4").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel5").on("click", function(){
      $("#callback-modal").modal('show');
    });
    $("#btn-callback-carousel6").on("click", function(){
      $("#callback-modal").modal('show');
    });

    $(document.body).on('hide.bs.modal,hidden.bs.modal', function () {
      $('body').css('padding-right','0');
    });

  window.setInterval(function() {
    function getDateNow() {
      var n =  new Date();
      var y = n.getFullYear();
      var m = n.getMonth() + 1;
      m = m.toString().length < 2 ? '0'+m : m;
      var d = n.getDate();
      d = d.toString().length < 2 ? '0'+d : d;
      var h = n.getHours();
      h = h.toString().length < 2 ? '0'+h : h;
      var min = n.getMinutes();
      min = min.toString().length < 2 ? '0'+min : min;
      $('#inputTime').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
      $('#inputTime2').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
      $('#inputTime3').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
      $('#inputTime4').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
    };
    getDateNow();
  }, 5000);
 