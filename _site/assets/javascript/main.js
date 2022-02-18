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
         $this.find('.btn').attr('disabled', true);

         $.post(
             'https://script.google.com/macros/s/AKfycbwhyQycN9172lWdbqRfQbRGKDGxVvDv1vkaG0i-FUX18U2nlYHndTq-0lER1R34FIQ/exec',
             data
         ).done(function (data) {
             console.log(data);
             if (data.result === "error") {
                 $("#rsvp-success").addClass("d-none");
                 $("#rsvp-error").removeClass("d-none");
                 $this.find('.btn').attr('disabled', false);
             } else {
                 $("#rsvp-error").addClass("d-none");
                 $("#rsvp-success").removeClass("d-none");
                 $this.find('.btn').attr('disabled', false);
                 $this.trigger('reset');
             }
         }).fail(function (data) {
             $("#rsvp-error").removeClass("d-none");
             $this.find('.btn').attr('disabled', false);
         });
     });
})
