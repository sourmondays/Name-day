const dayName = async query => {
  const name = await fetch(
    `https://api.abalin.net/getdate?name=${query}&country=us`,
    {
      method: "GET",
      headers: {
        host: "https://api.abalin.net/"
      }
    }
  );

  if (!name.ok) {
    throw new Error(
      `Reuest was not OK. status code returned was: ${name.status}`
    );
  }
  const response = await name.json();
  return response;
};

const getDate = async (month, day) => {
  const response = await fetch(
    `https://api.abalin.net/namedays?country=us&month=${month}&day=${day}`
  );

  const date = await response.json();
  return date;
};
