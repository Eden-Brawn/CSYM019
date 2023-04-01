$.ajax( {
    url: "counties.json",
    type: "GET",
    dataType: "json",
    success: function(response) {
        let sTxt = "";
        $.each(response.counties, function(index) {
            sTxt += "<tr><td>"
            + response.counties[index].name
            + "</td></tr>";
        });
        $("#countylist").append(sTxt);
    },
    error: function() {

    }
}
);