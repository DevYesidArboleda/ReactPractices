const MyButton = ({text}) => {
    //console.log(props)
    const handleButtonClick = (title) =>{
      return console.log("me diste click " + text)
    }

    return <button onClick={() => handleButtonClick("titlte")}>Click</button>;
  };

  export default MyButton;