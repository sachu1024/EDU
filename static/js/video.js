$(document).ready(function() {
    // Get the video element
    var video = $('#myVideo')[0];
    
    // Flag to ensure the timeout only happens once
    var isVideoPaused = false;

    // When the video starts playing, execute the following function
    video.onplay = function() {
        if (!isVideoPaused) {
            isVideoPaused = true; // Mark that the video has started and the timeout has been set
            
            // After 5 seconds, pause the video and hide the controls (including play icon)
            setTimeout(function() {
                video.pause();  // Pause the video
                $('#myVideo')[0].controls = false;  // Hide the controls (including play icon)
                $('#mcqModal').fadeIn();  // Show the modal with the questions
            }, 5000);  // 5000 milliseconds = 5 seconds
        }
    };
});

// $(document).ready(function () {
//     $('#questionForm').on('submit', function (event) {
//         event.preventDefault();

//         // Retrieve answers for each question
//         var answer1 = $('input[name="q1"]:checked').val();
//         var answer2 = $('input[name="q2"]:checked').val();
//         var answer3 = $('input[name="q3"]:checked').val();

//         // Check if answers are correct
//         if (answer1 === 'b' && answer2 === 'a' && answer3 === 'b') {
//             // Hide the modal
//             $('#mcqModal').fadeOut();

//             // Enable video controls and play the video
//             var video = $('#myVideo')[0];
//             video.controls = true;

//             // Scroll the page down by 20% before playing the video
//             $('html, body').animate(
//                 { scrollTop: $(document).height() * 0.2 },
//                 500, // Duration of scroll animation in milliseconds
//                 function () {
//                     video.play();
//                 }
//             );
//         } else {
//             // Alert user of failure
//             alert("Oops! You failed. Please watch the video again and try. Thank you!");
//             $('#mcqModal').fadeOut();
//             // Optionally, replay the video
//             location.reload();
//         }
//     });
// });


$(document).ready(function () {
    $('#questionForm').on('submit', function (event) {
        event.preventDefault();

        // Retrieve answers for each question
        var answer1 = $('input[name="q1"]:checked').val();
        var answer2 = $('input[name="q2"]:checked').val();
        var answer3 = $('input[name="q3"]:checked').val();
        
        // Check if answers are correct
        if (answer1 === 'b' && answer2 === 'a' && answer3 === 'b') {
            // Hide the modal
            $('#mcqModal').fadeOut();

            // Enable video controls and play the video
            var video = $('#myVideo')[0];
            video.controls = true;

            // Scroll the page down by 20% before playing the video
            $('html, body').animate(
                { scrollTop: $(document).height() * 0.2 },
                500, // Duration of scroll animation in milliseconds
                function () {
                    video.play();
                }
            );
        } else {
            // Alert user of failure
            alert("Oops! You failed. Please watch the video again and try. Thank you!");
            $('#mcqModal').fadeOut();
            // Optionally, replay the video
            location.reload();
        }
    });

    // Detect fullscreen change event and adjust modal visibility
    $('#myVideo')[0].addEventListener('fullscreenchange', function () {
        var video = $('#myVideo')[0];
        if (document.fullscreenElement === video) {
            // Video is in fullscreen, hide the modal (if needed)
            $('#mcqModal').fadeOut();
        } else {
            // Exit fullscreen, show the modal again if needed
            $('#mcqModal').fadeIn();
        }
    });
});

