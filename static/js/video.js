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
                $('#questionModal').fadeIn();  // Show the modal with the questions
            }, 5000);  // 5000 milliseconds = 5 seconds
        }
    };
});


$('#questionForm').on('submit', function(event) {
    event.preventDefault();
    var answer1 = $('#question1').val();
    var answer2 = $('#question2').val();
    
    if(answer1==1 && answer2==2){
        $('#questionModal').fadeOut();
        $('#myVideo')[0].controls = true;

            // Optionally, play the video automatically after answering correctly
            video.play();
            
    }else{
        alert("you are fail");
    }
    $('#questionModal').fadeOut();
  
    
 
});