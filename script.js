// Function to submit a question
function submitQuestion() {
    // Got values from the form
    let name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const question = document.getElementById('question').value;

    // Checked if any field is empty
    if (name === '' || email === '' || question === '') {
        // If any field is empty, showed an alert and stop
        alert('Please fill out all fields');
        return;
    }

    // Created a new question item
    const questionItem = document.createElement('li');
    // Added a class for styling
    questionItem.className = 'question-item';

    // Built HTML content for the question item using template literals
    const questionContent = `<strong>Name:</strong> ${name}<br>
                             <strong>Email:</strong> ${email}<br>
                             <strong>Question:</strong> ${question}`;

    // Set the HTML content of the question item
    questionItem.innerHTML = questionContent;

    // Got the list where questions will be displayed
    const questionsList = document.getElementById('questions-list');
    // Appended the question item to the list
    questionsList.appendChild(questionItem);

    // Cleared the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('question').value = '';
}
