// PHYSICS QR LAB
// Interactive microscope calculator

const objective = document.getElementById("objective");
const eyepiece = document.getElementById("eyepiece");

const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");
const resultText = document.getElementById("resultText");

// MICROSCOPE CALCULATOR

function calculateMagnification() {
    const objectiveValue = Number(objective.value);
    const eyepieceValue = Number(eyepiece.value);

    const total = objectiveValue * eyepieceValue;

    result.textContent = total + "×";

    resultText.textContent =
        `Объект ${total} эсе чоңойтулат.`;
}

calculateBtn.addEventListener("click", calculateMagnification);

// QR CODE GENERATOR

const qrBtn = document.getElementById("qrBtn");
const qrImage = document.getElementById("qrImage");

function generateQR() {
    const websiteURL = window.location.href;

    if (
        window.location.protocol === "file:" ||
        !websiteURL.startsWith("http")
    ) {
        alert(
            "QR-код түзүү үчүн сайтты интернетке жайгаштыруу керек. " +
            "Алгач Netlify же GitHub Pages аркылуу жарыяла."
        );
        return;
    }

    const qrURL =
        "https://api.qrserver.com/v1/create-qr-code/" +
        "?size=300x300&data=" +
        encodeURIComponent(websiteURL);

    qrImage.src = qrURL;
    qrImage.alt = "Physics QR Lab сайтынын QR-коду";
}

qrBtn.addEventListener("click", generateQR);

// INITIAL CALCULATION

calculateMagnification();
