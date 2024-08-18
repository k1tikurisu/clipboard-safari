const fetchButton = document.getElementById("fetch-button");
const copyButton = document.getElementById("copy-button");
const textDisplay = document.getElementById("text-display");

fetchButton.addEventListener("click", () => {
	fetch("https://pokeapi.co/api/v2/pokemon/ditto")
		.then((response) => response.text())
		.then((text) => {
			// テキストを表示
			textDisplay.textContent = text;

			// コピーボタンを表示
			copyButton.style.display = "block";
		});
});

// コピーボタンのクリックイベント
copyButton.addEventListener("click", () => {
	navigator.clipboard
		.writeText(textDisplay.innerText)
		.then(alert("クリップボードにコピーしました！"));
});
