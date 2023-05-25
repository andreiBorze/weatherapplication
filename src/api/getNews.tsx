export const getNews = async (
  search: string,
  country: string,
  sortBy: string,
  selectedMethod: string,
  page: number,
  pageSize: number
) => {
  let method = "";
  const searchSubject = search || "volvo";
  const baseUrl = "https://newsapi.org/v2/";
  const globalOp = "everything?q=";
  const topOp = "top-headlines?country=";
  const apiKey = process.env.REACT_APP_REACT_NEWS_API_KEY ?? "default-api-key";

  switch (selectedMethod) {
    case "Top News":
      method = topOp + country;
      break;
    case "Global News":
      method = globalOp + searchSubject;
      break;
    default:
      method = globalOp;
      break;
  }

  try {
    const date = getFormattedDateXMonthsAgo();
    const headers: HeadersInit = {
     "X-Api-Key": apiKey,
    };

    const response = await fetch(
       `${baseUrl}${method}&sortBy=${sortBy}&from=${date}&page=${page}&pageSize=${pageSize}`,
      //`http://localhost:3002/newsapi.org/v2/everything`,
      {
        method: "GET",
        headers,
        redirect: "follow",
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }
};

const getFormattedDateXMonthsAgo = (monthsAgo = 1) => {
  if (!Number.isInteger(monthsAgo) || monthsAgo < 0) {
    throw new Error("Invalid input. Please provide a non-negative integer.");
  }

  const today = new Date();
  const xMonthsAgo = new Date(
    today.getFullYear(),
    today.getMonth() - monthsAgo,
    today.getDate() + 10
  );

  if (isNaN(xMonthsAgo.getTime())) {
    throw new Error(
      `Invalid date. Could not calculate ${monthsAgo} months ago.`
    );
  }

  return xMonthsAgo.toISOString().slice(0, 10);
};
//Andrei