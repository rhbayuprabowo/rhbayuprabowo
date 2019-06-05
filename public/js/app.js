$(document).ready(function () {
  $(".button-collapse").sideNav({
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens,
  });
  $('.parallax').parallax();
  animation();
  $('.scrollspy').scrollSpy({
    scrollOffset: offsetVariable
  });
  Materialize.scrollFire(options);

  $('#send').click(function () {
    var name = $('#name').val();
    var email = $('#email').val();
    var msg = $('#message').val();

    if (name !== '' && email !== '' && msg !== '') {
      // parameters: service_id, template_id, template_parameters
      emailjs.send("gmail", "mytemplate", {
        from_name: name,
        email: email,
        message_html: msg
      }).then(function (response) {
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        Materialize.toast('Email Successfully Sent', 4000)
      }, function (err) {
        console.log("FAILED. error=", err);
        Materialize.toast('Email Failed to Send', 4000)
      });

      $('#name').val("");
      $('#email').val("");
      $('#message').val("");
      $('label').removeClass("active");
      $('input').removeClass("valid");
    } else {
      Materialize.toast('Input field cannot be empty', 4000)
    }
  });
});

//All variable here
var offsetVariable = 64;
var options = [{
  selector: '#aboutme',
  offset: offsetVariable,
  callback: function (el) {
    Materialize.fadeInImage($(el));
  }
}, {
  selector: '#portofolio',
  offset: offsetVariable,
  callback: function (el) {
    Materialize.fadeInImage($(el));
  }
}, {
  selector: '#contacts',
  offset: offsetVariable
}, {
  selector: 'body',
  offset: offsetVariable,
  callback: function (el) {
    Materialize.fadeInImage($(el));
  }
}];


//All function here
function animation() {
  new TypeIt('#demo', {
    strings: ['I am a desktop developer.',
      'I am game developer',
      'I am junior web developer.',
      'I am an enthusiastic programmer.',
      'I love to create.',
      'I love to build.'
    ],
    speed: 150,
    breakLines: false,
    loop: true
  });
}