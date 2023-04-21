$(document).ready(function(){
    $("#movies").load("movies.html");
    $("#movies").change(function(){
        let movie = $(this).val();
        let apiUrl = "https://api.themoviedb.org/3/movie/"
        + movie
        + "?api_key=152ba442d2e292af16e34d75b78e70c2&language=en-US";
        $.ajax( {
            url: apiUrl,
            type: "GET",
            dataType: "json",
            success: function(response){
                console.log(response);
                $.each(response, function(){
                    $("#movieinfo").html("");
                    $("#movieinfo").append(response.overview);
                    if ($("#movieinfo").attr("hidden")){
                        $("#movieinfo").show();
                    }
                    $("#movieinfo").css(
                        {
                            "border-color": "#C1E0FF",
                            "border-weight": "1px",
                            "border-style": "solid",
                            "margin-top": "1rem",
                            "width": "50%",
                            "padding": "0.5rem"
                        });
                });
            },
            error: function(xhr, error){
                $("#info").append(error.toUpperCase() + ".HTTP status: " + xhr.status);
            }
        });
    });
});