
// Submit post on submit
$('#post-form').on('submit', function(event){
    event.preventDefault();
    var url= $('#post-form').attr('data-ajax-url');
    console.log(url); 
    // create_post();
});

// // AJAX for posting
// function create_post() {
//     console.log("create post is working!") // sanity check
//     $.ajax({
//         url : "create", // the endpoint
//         type : "POST", // http method
//         data : { the_post : $('#post-text').val() }, // data sent with the post request

//         // handle a successful response
//         success : function(json) {
//             $('#post-text').val(''); // remove the value from the input
//             console.log(json); // log the returned json to the console
//             $("#actual-post").prepend("<li><strong>"+json.text+"</strong> - <em> "+json.author+"</em> - <span> "+json.created+"</span></li>");
//             console.log("success"); // another sanity check
//         },

//         // handle a non-successful response
//         error : function(xhr,errmsg,err) {
//             $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
//                 " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
//             console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
//         }
//     });
// };