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
         e.preventDefault();
         var $this = $(this);
         var data = $this.serialize();
         console.log(data);
         $this.attr('disabled', true);

         $.ajax({
             type: "POST",
             crossDomain: true,
             url: 'https://script.google.com/macros/s/AKfycbyWUcWRVaXmVbxYekchxGjQnAfs-mBPfyCUOSSVI2QvhvqPvPNN7FrIcCTIM5454Am1/exec',
             data: data,
             dataType: "json"
         }).done(function (data) {
             console.log(data);
             console.log(data.result);
             if (data.result === "error") {
                 console.log(data.message)
                 $("#rsvp-success").addClass("d-none");
                 $("#rsvp-error").removeClass("d-none");
             } else {
                 $("#rsvp-error").addClass("d-none");
                 $("#rsvp-success").removeClass("d-none");
             }
         }).fail(function (data) {
             console.log(data);
             $("#rsvp-error").removeClass("d-none");
         });
     });
})
