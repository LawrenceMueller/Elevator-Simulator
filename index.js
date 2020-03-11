$(document).ready(function() {
    const button_menu = document.querySelector('.btn');
    const title = document.querySelector('.title');
    const header = document.querySelector('header');
    const instructions = document.getElementById('instructions');
    const mainContent = document.querySelector('.main-content');
    const queue_list = document.querySelector('.queue-list');

    let riders_f1_f2 = 0; // Represents all riders waiting for the elevator at floor 1 going to floor 2
    let riders_f1_f3 = 0;
    let riders_f1_f4 = 0;
    let riders_f2_f1 = 0; // Represents all riders waiting for the elevator at floor 2 going to floor 1
    let riders_f3_f1 = 0;
    let riders_f4_f1 = 0;

    let startBtn = document.getElementById('btn-start');
    let resetBtn = document.getElementById('btn-reset');

    const floor_btns = document.querySelectorAll('.e-btn');

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
                let f1_f2_inQueue = document.getElementById('f1_f2_inQueue'); // Grab the item in queue that fits our situation

                // Check if the situation is already in queue
                if (f1_f2_inQueue) {
                    // If we already have item in queue simply update the item with updated riders
                    f1_f2_inQueue.innerHTML = `From: F1 - Dest: F2 - Riders: ${riders_f1_f2}`;
                } else {
                    // If situation is not in queue, add it to queue
                    $('.queue-list').append(
                        `<p id="f1_f2_inQueue" class="queue-list-item">From: F1 - Dest: F2 - Riders: ${riders_f1_f2} </p>`
                    );
                }
                break;
            case 3:
                riders_f1_f3 = riders_f1_f3 + 1; // Update riders waiting at floor 1 with the newest rider
                let f1_f3_inQueue = document.getElementById('f1_f3_inQueue'); // Grab the item in queue that fits our situation

                // Check if the situation is already in queue
                if (f1_f3_inQueue) {
                    // If we already have item in queue simply update the item with updated riders
                    f1_f3_inQueue.innerHTML = `From: F1 - Dest: F3 - Riders: ${riders_f1_f3}`;
                } else {
                    // If situation is not in queue, add it to queue
                    $('.queue-list').append(
                        `<p id="f1_f3_inQueue" class="queue-list-item">From: F1 - Dest: F3 - Riders: ${riders_f1_f3} </p>`
                    );
                }
                break;
            case 4:
                riders_f1_f4 = riders_f1_f4 + 1; // Update riders waiting at floor 1 with the newest rider
                let f1_f4_inQueue = document.getElementById('f1_f4_inQueue'); // Grab the item in queue that fits our situation

                // Check if the situation is already in queue
                if (f1_f4_inQueue) {
                    // If we already have item in queue simply update the item with updated riders
                    f1_f4_inQueue.innerHTML = `From: F1 - Dest: F4 - Riders: ${riders_f1_f4}`;
                } else {
                    // If situation is not in queue, add it to queue
                    $('.queue-list').append(
                        `<p id="f1_f4_inQueue" class="queue-list-item">From: F1 - Dest: F4 - Riders: ${riders_f1_f4} </p>`
                    );
                }
                break;
            default:
                console.log('This should never be seen');
        }
    });

    // Called when user selects the Floor 2 button
    $('#btn-f2').click(function() {
        riders_f2_f1 = riders_f2_f1 + 1; // Update riders waiting at floor 2 with the newest rider
        let f2_f1_inQueue = document.getElementById('f2_f1_inQueue'); // Grab the item in queue that fits our situation

        // Check if the situation is already in queue
        if (f2_f1_inQueue) {
            // If we already have item in queue simply update the item with updated riders
            f2_f1_inQueue.innerHTML = `From: F2 - Dest: F1 - Riders: ${riders_f2_f1}`;
        } else {
            // If situation is not in queue, add it to queue
            $('.queue-list').append(
                `<p id="f2_f1_inQueue" class="queue-list-item">From: F2 - Dest: F1 - Riders: ${riders_f2_f1} </p>`
            );
        }
    });

    // Called when user selects the Floor 3 button
    $('#btn-f3').click(function() {
        riders_f3_f1 = riders_f3_f1 + 1; // Update riders waiting at floor 3 with the newest rider
        let f3_f1_inQueue = document.getElementById('f3_f1_inQueue'); // Grab the item in queue that fits our situation

        // Check if the situation is already in queue
        if (f3_f1_inQueue) {
            // If we already have item in queue simply update the item with updated riders
            f3_f1_inQueue.innerHTML = `From: F3 - Dest: F1 - Riders: ${riders_f3_f1}`;
        } else {
            // If situation is not in queue, add it to queue
            $('.queue-list').append(
                `<p id="f3_f1_inQueue" class="queue-list-item">From: F3 - Dest: F1 - Riders: ${riders_f3_f1} </p>`
            );
        }
    });

    // Called when user selects the Floor 4 button
    $('#btn-f4').click(function() {
        riders_f4_f1 = riders_f4_f1 + 1; // Update riders waiting at floor 4 with the newest rider
        let f4_f1_inQueue = document.getElementById('f4_f1_inQueue'); // Grab the item in queue that fits our situation

        // Check if the situation is already in queue
        if (f4_f1_inQueue) {
            // If we already have item in queue simply update the item with updated riders
            f4_f1_inQueue.innerHTML = `From: F4 - Dest: F1 - Riders: ${riders_f4_f1}`;
        } else {
            // If situation is not in queue, add it to queue
            $('.queue-list').append(
                `<p id="f4_f1_inQueue" class="queue-list-item">From: F4 - Dest: F1 - Riders: ${riders_f4_f1} </p>`
            );
        }
    });

    // Called when user selects the Start button
    $('#btn-start').click(function() {
        // Loop through floor buttons and disable them
        floor_btns.forEach(btn => {
            btn.classList.toggle('e-btn-simulate');
        });

        // Enable Reset button
        resetBtn.classList.toggle('btn-start');
        resetBtn.classList.remove('btn-reset');

        // Disable Start button
        startBtn.classList.toggle('btn-reset');
        startBtn.classList.remove('btn-start');

        // Start the Simulation
        let first_in_queue = queue_list.firstElementChild; // Grab first event in queue
        first_in_queue.classList.toggle('in-progress'); // Update UI to show user that the event is in progress

        let first_in_queue_information = first_in_queue.innerHTML.split('-'); // Parse for needed information
        let elevator_destination = Number(
            first_in_queue_information[1].charAt(8)
        ); // Grab the events destination floor
        let elevator_from = Number(first_in_queue_information[0].charAt(7)); // Grab the events origin floor

        moveElevator(elevator_from);
        sleep(200);
        moveElevator(elevator_destination);
    });

    // Called when user selects the Reset button
    $('#btn-reset').click(function() {
        // Loop through floor button and enable them
        floor_btns.forEach(btn => {
            btn.classList.remove('e-btn-simulate');
        });

        // Disable Reset button
        resetBtn.classList.toggle('btn-reset');
        resetBtn.classList.remove('btn-start');

        // Enable Start button
        startBtn.classList.toggle('btn-start');
        startBtn.classList.remove('btn-reset');

        // Clear the queue
        queue_list
            .querySelectorAll('.queue-list-item')
            .forEach(event => event.remove());

        //Reset Elevator to bottom floor
        moveElevator(1);
    });
});

function moveElevator(next_floor) {
    let windowSize = window.innerWidth;

    if (windowSize < 500) {
        switch (next_floor) {
            case 1:
                document.getElementById('elevator').style.bottom = '13%';
                break;
            case 2:
                document.getElementById('elevator').style.bottom = '37%';
                break;
            case 3:
                document.getElementById('elevator').style.bottom = '62%';
                break;
            case 4:
                document.getElementById('elevator').style.bottom = '84%';
                break;
            default:
                console.log('You should never see this');
        }
    } else if (windowSize > 499 && windowSize < 750) {
        switch (next_floor) {
            case 1:
                document.getElementById('elevator').style.bottom = '11%';
                break;
            case 2:
                document.getElementById('elevator').style.bottom = '34%';
                break;
            case 3:
                document.getElementById('elevator').style.bottom = '58%';
                break;
            case 4:
                document.getElementById('elevator').style.bottom = '80%';
                break;
            default:
                console.log('You should never see this');
        }
    } else if (windowSize > 750 && windowSize < 1000) {
        switch (next_floor) {
            case 1:
                document.getElementById('elevator').style.bottom = '13%';
                console.log('floor 1');
                break;
            case 2:
                document.getElementById('elevator').style.bottom = '34%';
                console.log('floor 2');
                break;
            case 3:
                document.getElementById('elevator').style.bottom = '55%';
                console.log('floor 3');
                break;
            case 4:
                document.getElementById('elevator').style.bottom = '79%';
                console.log('floor 4');
                break;
            default:
                console.log('You should never see this');
        }
    } else if (windowSize > 999 && windowSize < 1500) {
        switch (next_floor) {
            case 1:
                document.getElementById('elevator').style.bottom = '15%';
                break;
            case 2:
                document.getElementById('elevator').style.bottom = '36%';
                break;
            case 3:
                document.getElementById('elevator').style.bottom = '55%';
                break;
            case 4:
                document.getElementById('elevator').style.bottom = '76%';
                break;
            default:
                console.log('You should never see this');
        }
    } else if (windowSize > 1499) {
        switch (next_floor) {
            case 1:
                document.getElementById('elevator').style.bottom = '20%';
                break;
            case 2:
                document.getElementById('elevator').style.bottom = '40.5%';
                break;
            case 3:
                document.getElementById('elevator').style.bottom = '61%';
                break;
            case 4:
                document.getElementById('elevator').style.bottom = '81.5%';
                break;
            default:
                console.log('You should never see this');
        }
    } else {
        console.log('You should never see this');
    }
}

function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {}
}
