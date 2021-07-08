import { useState } from "react";

interface Dog {
  message: string;
  success: string;
}

function App() {
  const [dog, setDog] = useState<Dog>();
  const [DogArr, setDogArr] = useState<Dog[]> ([])

  const handleGetDog = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    );
    const jsonBody: Dog = await response.json();
    setDog(jsonBody);
    
    if (typeof dog !== 'undefined'){
      setDogArr([...DogArr,jsonBody])
  }
  };

  // const handleGetJoke = () => {
  //   fetch("https://official-joke-api.appspot.com/jokes/general/random")
  //     .then((response) => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // };

  if (dog) {
    return (
      <div>
        <h1>Dog app</h1>
        <details>
        <img src={dog.message} alt=""/>
          <p>{dog.success}</p>
        </details>
        <hr />
        <button onClick={handleGetDog}>Get another joke</button>
        <p>Dogs: {}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          Dog from an API!
        </p>
        <button onClick={handleGetDog}>Get joke</button>
      </div>
    );
  }
}

export default App;
