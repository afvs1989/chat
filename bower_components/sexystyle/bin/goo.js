$(document).ready(function(){
      $('.modal-trigger').leanModal({
            dismissible: true, 
            opacity: .5, 
            in_duration: 300, 
            out_duration: 200, 
      });
            $(".button-collapse").sideNav();
            $("div.demo").scrollTop(100);
            $('.fixed-action-btn').openFAB();
            $('.modal-trigger').leanModal();
});
