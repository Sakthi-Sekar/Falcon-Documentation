/*--To read first webpage--*/

$(function () {
    $.getJSON('resources/json/data.json', function (data) {
        var firstPageTemplate = $("#falcon_homepage").html();
        var firstPageText = Mustache.render(firstPageTemplate, data);
        $("#falcon-firstpage_panel").html(firstPageText);

    });

});