

$(document).ready(function () {
    $("#contact-form").submit(function(event){
        event.preventDefault();
        //var formData = $("#contact-form").serializeArray();
        var email = $('#emailInput').val();
        var name = $('#name').val();
        var subject = $('#subject').val();
        var text = $('#textArea').val();
        console.log(email, name, subject, text);

        $.post("/form", 
        {
            userEmail: email,
            userName: name,
            userSubject: subject,
            userText: text
        },
        function (data){
            console.log(data);
        }
        );
    });
 });
        