// Select HTML elements using document.getElementById()
const messageInput = document.getElementById('messageInput');
const charCount = document.getElementById('charCount');
const remainingCount = document.getElementById('remainingCount');
const warningMessage = document.getElementById('warningMessage');

// Define the maximum character limit
const maxLimit = 100;

// Set the textarea's maxLength property to prevent typing past 100 characters
messageInput.maxLength = maxLimit;

// Function to update character counts and UI state
const updateCharacterCount = () => {
    // Get current length of typed text
    const currentLength = messageInput.value.length;
    
    // Calculate remaining characters
    const remaining = maxLimit - currentLength;

    // Update the counter text on the webpage
    charCount.textContent = `${currentLength} / ${maxLimit} characters`;
    remainingCount.textContent = `${remaining} characters remaining`;

    // Check if maximum limit is reached
    if (currentLength >= maxLimit) {
        // Add red border class to textarea
        messageInput.classList.add('limit-reached');
        // Show warning message
        warningMessage.classList.remove('hidden');
    } else {
        // Remove red border class from textarea
        messageInput.classList.remove('limit-reached');
        // Hide warning message
        warningMessage.classList.add('hidden');
    }
};

// Listen for input event on the textarea
messageInput.addEventListener('input', updateCharacterCount);
