$(document).ready(function () {
  $("#contact_form1").submit(function (event) {
    let $this = $(this);
    swal({
      title: "Sending",
      text: ".",
      icon: "info",
      button: false,
    });
    event.preventDefault();
    let town = $("#town").val();
    var url = $this.attr("action");
    var method = $this.attr("method");
    let data = $($this).serialize();
    // console.log('data: ',data);
    // console.log('event: ',event);
    // console.log('enq_name: ',event.target[0].value);
    // console.log('enq_phone: ',event.target[1].value);
    // console.log('enq_message: ',event.target[2].value);
    // console.log('enq_service: ',event.target[3].value);

    const message = `message: ${event.target[2].value} `
    // console.log('final message: ',message);

    data = `enq_name=${event.target[0].value}&enq_phone=${event.target[1].value}&enq_message=${message}&enq_email=`
    console.log('data: ',data);


    $.ajax({
      type: 'post',
      url: "https://mail-sender.vingb.com/send/c4c56623-d8e1-4345-99a4-3dddbfdec1a3",
      dataType: 'json',
      data: data,
      success: function (data) {
        console.log(data['status'])

        console.log("success");
        if (data['status']) {
          swal({
            title: "Thank you",
            text: "Your message has been successfully sent.\n We will contact you very soon!",
            icon: "success",
            button: false,
          }).then(
            function(){
                location.reload();
            }
        );

          setTimeout(function () {
            swal.close();
          }, 1000)
        } else {
          swal({
            title: "Try Again !",
            text: "something went wrong",
            icon: "warning",
            button: "OK",
          });
        }

      },
      error: function (data) {
        swal({
          title: "Try Again !",
          text: "something went wrong",
          icon: "warning",
          button: "OK",
        });

      }
    });
  });
});