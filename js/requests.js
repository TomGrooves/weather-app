
const key = "4361ea2c64ac4866a601953e58bd2a46";


const asyncFetch = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
