import React from "react";

function App() {
  const myName = "Nazar";
  const welcomeText = "Ласкаво просимо до нашого сайту!";
  const imageUrl = "https://via.placeholder.com/150";
  const imageAlt = "Зображення-приклад";
  const favoriteSite = { name: "GameJolt", url: "https://gamejolt.com/" };
  const num1 = 10;
  const num2 = 25;
  const sum = num1 + num2;
  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div>
      <h1>{myName}</h1>
      <p>{welcomeText}</p>
      <img src={imageUrl} alt={imageAlt} />
      <p>
        Улюблений сайт: <a href={favoriteSite.url}>{favoriteSite.name}</a>
      </p>
      <p>Сума {num1} + {num2} = {sum}</p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;