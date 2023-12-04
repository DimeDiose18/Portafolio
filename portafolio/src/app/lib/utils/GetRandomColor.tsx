let previusColor: string | null = null;

const getRandomColor = (colors: string[]): string => {
    let randomIndex = Math.floor(Math.random() * colors.length);

    while (colors[randomIndex] === previusColor) {
      randomIndex = Math.floor(Math.random() * colors.length);
    }

    previusColor = colors[randomIndex];
    
    return colors[randomIndex];
  };


  export { getRandomColor }