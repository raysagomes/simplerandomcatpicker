
function pick() {
    var numberInput = document.getElementById("number");
    var number = parseInt(numberInput.value);

    if (isNaN(number) || number <= 0 || number > 10) {
      alert("Please enter a number between 1 and 10.");
      return;
    }

    var pictures = [
      "image1.jpg",
      "image2.jpg",
      "image3.jpg",
      "image4.jg",
      "image5.jpeg",
      "image6.jpeg",
      "image7.jpeg",
      "image8.jpeg",
      "image9.jpeg",
      "image10.jpeg"
    ];

    var randomIndex = Math.floor(Math.random() * number);
    var selectedPicture = pictures[randomIndex];

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<img src='" + selectedPicture + "' alt='Random Picture'>";
  }