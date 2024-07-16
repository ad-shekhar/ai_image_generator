let generateImageForm = document.getElementById('generate-image-form');
let formInput = document.getElementById('input-value');
let imageContainerText = document.getElementById('imageContainerText');
let imageGenerated = document.getElementById('generated-image');
let imageContainer = document.getElementById('images-visible');

async function fetchImages(category) {
    try {
        // Replace 'YOUR_ACCESS_KEY' with your Unsplash API access key
        let response = await fetch(`https://api.unsplash.com/photos/random?query=${category}&client_id=8E5Qq51FnIwk5JEjp_hWn22HnXd5YJ_q_PuPw_auETg`);
        if (!response.ok) {
            throw new Error('Unable to fetch the data');
        }
        let data = await response.json();
        imageContainerText.innerText = "Below is your generated Image:";
        imageContainer.style.display = "block";
        imageGenerated.src = data.urls.regular; // URL to the image
        console.log(data.urls.regular);
    } catch (error) {
        console.error('Error fetching images:', error);
        imageContainerText.innerText = "Failed to generate image. Please try again.";
    }
}

generateImageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let enteredText = formInput.value.trim();
    if (enteredText !== "") {
        fetchImages(enteredText);
    } else {
        imageContainerText.innerText = "Input field cannot be empty!";
    }
});
