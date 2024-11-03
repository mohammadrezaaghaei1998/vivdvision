// Add event listener to each round button
document.querySelectorAll('.round-button').forEach((button) => {
    button.addEventListener('click', function() {
        const modal = document.getElementById('videoModal');
        const modalVideo = document.getElementById('modalVideo');
        
        // Get the video element from the closest grid item
        const gridItem = button.closest('.video-col');
        const videoElement = gridItem.querySelector('video');
        const videoSource = videoElement.querySelector('source').src;

        // Pause the video in the grid item
        videoElement.pause();

        // Set the modal to display
        modal.style.display = "block";
        modalVideo.src = videoSource; // Set the video source
        modalVideo.play(); // Play the video in the modal
    });
});

// Close the modal when the user clicks on <span> (x)
document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    modal.style.display = "none"; // Hide the modal
    modalVideo.pause(); // Pause the video in the modal
    modalVideo.src = ""; // Reset the video source
});

// Close the modal when the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal
        const modalVideo = document.getElementById('modalVideo');
        modalVideo.pause(); // Pause the video in the modal
        modalVideo.src = ""; // Reset the video source
    }
};









    $(document).ready(function(){
        $('.filters-button-group .button').on('click', function(){
            var filterValue = $(this).attr('data-filter');

            // Apply active class to the clicked button
            $('.filters-button-group .button').removeClass('is-checked');
            $(this).addClass('is-checked');

            if(filterValue === '*') {
                $('.grid-item').show(); // Show all items
            } else {
                $('.grid-item').hide(); // Hide all items first
                $(filterValue).show();  // Show only the selected category items
            }
        });
    });







    function openModal(imageUrl) {
        const modal = document.getElementById("imageModal");
        const modalImage = document.getElementById("modalImage");
        
        modal.style.display = "block";
        modalImage.src = imageUrl; // Set the image source to the clicked image's source
    }
    
    // Function to close the modal
    function closeModal() {
        const modal = document.getElementById("imageModal");
        modal.style.display = "none"; // Hide the modal
    }
    
    // Add event listener to close the modal when clicking outside the image
    window.onclick = function(event) {
        const modal = document.getElementById("imageModal");
        if (event.target === modal) {
            closeModal();
        }
    };





// right to left transition for galley image  

// function filterImages(category) {
//     const items = document.querySelectorAll('.grid-container div');
    
//     let delay = 0;

//     items.forEach((item, index) => {
//         item.style.transitionDelay = "0s";
//         item.classList.add('rtl-transition');
        
//         if (category === 'all' || item.classList.contains(category)) {
//             item.classList.remove('hidden');

//             item.style.transitionDelay = `${delay}s`;
//             delay += 0.09; 
//         } else {
//             item.classList.add('hidden');
//             item.style.transitionDelay = "0s"; 
//         }

//         setTimeout(() => item.classList.remove('rtl-transition'), 50);
//     });
// }



// fade out transition for galley image  
function filterImages(category) {
    const items = document.querySelectorAll('.grid-container div');
    
    let delay = 0;

    items.forEach((item, index) => {
        item.style.transitionDelay = "0s";
        item.classList.add('fade-transition');
        
        if (category === 'all' || item.classList.contains(category)) {
            item.classList.remove('hidden');

            item.style.transitionDelay = `${delay}s`;
            delay += 0.03; 
        } else {
            item.classList.add('hidden');
            item.style.transitionDelay = "0s"; 
        }

        setTimeout(() => item.classList.remove('fade-transition'), 50);
    });
}