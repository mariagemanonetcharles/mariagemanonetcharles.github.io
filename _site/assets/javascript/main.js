// Initialize and add the map
function initMap() {
    const home = { lat: 45.23207409855136, lng: -73.31837062403082 }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: home,
    });
    const marker = new google.maps.Marker({
        position: home,
        map: map,
    });
};

/********************** RSVP **********************/

$(window).on('load', function(){
    $('#rsvp-form').on('submit', function (e) {
        var data = $(this).serialize();
        e.preventDefault();
        console.log(data);

        $.ajax({
            type: "POST",
            beforeSend: function(request) {
                request.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            url: 'https://script.google.com/macros/s/AKfycbzIvgonX4SR_oMJpVZl5C8fnou-g_MeAjfv8JzzeCo-/dev?callback=loadData',
            // url: 'https://script.google.com/macros/s/AKfycbwTIzpepaqLA44-aCnMBrVJI1dUOEhaasSY6GY4EOaoJzBToHEnmpsVgmmxBTxXv92GTg/exec?callback=loadData',
            data: data,
            dataType: "json"
        }).done(function (data) {
                console.log(data);
                if (data.result === "error") {
                    console.log(data.message)
                    $("#rsvp-success").addClass("hide");
                    $("#rsvp-error").removeClass("hide");
                } else {
                    $("#rsvp-error").addClass("hide");
                    $("#rsvp-success").removeClass("hide");
                }
            })
            .fail(function (data) {
                console.log(data);
                $("#rsvp-error").removeClass("hide");
            });
    });
})
