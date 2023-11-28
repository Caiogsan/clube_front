export const itemsData = async () => {
  try {
    const response = await fetch("http://localhost:8080/clube/", {
      method: "GET",
      mode: "cors",
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log(`Something happened: ${response.statusText}`);
      throw new Error();
    }
  } catch (error) {
    console.log(`Something happened: ${error}`);
    throw error;
  }
};
