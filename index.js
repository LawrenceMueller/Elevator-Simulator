$(document).ready(function() {
    // Create an Immediately-invoked function expression

    const button_menu = document.querySelector('.btn');
    const title = document.querySelector('.title');
    const header = document.querySelector('header');
    const instructions = document.getElementById('instructions');
    const mainContent = document.querySelector('.main-content');

    let riders_f1_f2 = 0; // Represents all riders waiting for the elevator at floor 1 going to floor 2
    let riders_f1_f3 = 0; // Represents all riders waiting for the elevator at floor 1 going to floor 3
    let riders_f1_f4 = 0; // Represents all riders waiting for the elevator at floor 1 going to floor 4
    let riders_f2 = 0; // Represents all riders waiting for the elevator at floor 2
    let riders_f3 = 0; // Represents all riders waiting for the elevator at floor 3
    let riders_f4 = 0; // Represents all riders waiting for the elevator at floor 4

    // Called when user selects the Menu change button
    $('.btn').click(function() {
        button_menu.classList.toggle('active-btn');
        // Change the HTML for the menu button
        if (button_menu.innerHTML === '+') {
            button_menu.innerHTML = '-';
        } else {
            button_menu.innerHTML = '+';
        }
        // Toggle the various classes to make UI changes
        title.classList.toggle('active-title');
        header.classList.toggle('active-header');
        instructions.classList.toggle('instructions-active');
        mainContent.classList.toggle('main-content-active');
    });

    // Called when user selects the Floor 1 button
    $('#btn-f1').click(function() {
        let floor_destination = Math.floor(Math.random() * (5 - 2) + 2); // Generate which floor a rider is going to

        // Dependent on the Floor destination, Update or create an entry in the queue
        switch (floor_destination) {
            case 2:
                riders_f1_f2 = riders_f1_f2 + 1; // Update riders waiting at floor 1 with the newest rider
                let f2_inQueue = document.getElementById('f1_f2_queue'); // Grab the item in queue that fits our situation

                // Check if the situation is already in queue
                if (f2_inQueue) {
                    // If we already have item in queue simply update the item with updated riders
                    f2_inQueue.innerHTML = `From: F1 - Dest: F2 - Riders: ${riders_f1_f2}`;
                } else {
                    // If situation is not in queue, add it to queue
                    $('.queue-list').append(
                        `<p id="f1_f2_queue" class="queue-list-item">From: F1 - Dest: F2 - Riders: ${riders_f1_f2} </p>`
                    );
                }
                break;
            case 3:
                riders_f1_f3 = riders_f1_f3 + 1; // Update riders waiting at floor 1 with the newest rider
                let f3_inQueue = document.getElementById('f1_f3_queue'); // Grab the item in queue that fits our situation

                // Check if the situation is already in queue
                if (f3_inQueue) {
                    // If we already have item in queue simply update the item with updated riders
                    f3_inQueue.innerHTML = `From: F1 - Dest: F3 - Riders: ${riders_f1_f3}`;
                } else {
                    // If situation is not in queue, add it to queue
                    $('.queue-list').append(
                        `<p id="f1_f3_queue" class="queue-list-item">From: F1 - Dest: F3 - Riders: ${riders_f1_f3} </p>`
                    );
                }
                break;
            case 4:
                riders_f1_f4 = riders_f1_f4 + 1; // Update riders waiting at floor 1 with the newest rider
                let f4_inQueue = document.getElementById('f1_f4_queue'); // Grab the item in queue that fits our situation

                // Check if the situation is already in queue
                if (f4_inQueue) {
                    // If we already have item in queue simply update the item with updated riders
                    f4_inQueue.innerHTML = `From: F1 - Dest: F4 - Riders: ${riders_f1_f4}`;
                } else {
                    // If situation is not in queue, add it to queue
                    $('.queue-list').append(
                        `<p id="f1_f4_queue" class="queue-list-item">From: F1 - Dest: F4 - Riders: ${riders_f1_f4} </p>`
                    );
                }
                break;
            default:
                console.log('This should never be seen');
        }
    });

    // Called when user selects the Floor 2 button
    $('#btn-f2').click(function() {
        console.log('f2');
    });

    // Called when user selects the Floor 3 button
    $('#btn-f3').click(function() {
        console.log('f3');
    });

    // Called when user selects the Floor 4 button
    $('#btn-f4').click(function() {
        console.log('f4');
    });
});
