$(document).ready(function(){
  $("#transportation_survey").submit(function(event){
    event.preventDefault();

      $("#work-responses").show();
      $("#work-responses2").show();

      $("input:checkbox[name=work-transportation]:checked").each(function(){
        var workTransportationMode = $(this).val();
        $('#work-responses').append(workTransportationMode + "<br>");
      });
      $("input:checkbox[name=work-transportation2]:checked").each(function(){
        var workTransportationMode = $(this).val();
        $('#work-responses2').append(workTransportationMode + "<br>");
      });
    $('#transportation_survey').hide();
  });
});
