
$(document).ready(function()
{
  $("#search").append("<input type='text' id='chercher' placeholder='Rechercher dans la table'>") ;

	var x = 0;

	$("#valider").click(function()
	{
/*    console.log("tests");
*/		x = x + 1;
   		
   		var texte = $("#mytext").val();
		$("#mytext").val("");
      var btn =  "<button class ='btn btn-outline-danger'>Supprimer</button>";
    	var edit =  "<button class ='btn btn-outline-info'>Modifier</button>";
     	var ligne = "<tr><td class='id'>" + x + "</td><td class='nom'>" + texte + "</td><td class='action'>" + btn + "</td><td class='action'>" + edit + "</td></tr>";
        $("#body").append(ligne);

        $(document).on('click','.btn.btn-outline-danger', function()	
        	{
        		$(this).parents('tr').remove();
            });

        $(".btn.btn-outline-info").click(function()
        {
          // $("#mytext").val($("td.nom").text()); 
        });

    $("#chercher").on("keyup", function() {
      var value = $(this).val().toLowerCase();
    $("#body tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  
	});



});