export const fetchData = async () => {
	try {
	  const response = await fetch('https://my-json-server.typicode.com/shashanksanket/nabhi/books/');
	  if (!response.ok) {
		throw new Error('Network response was not ok');
	  }
	  const data = await response.json();
	  return data;
	} catch (error) {
	  console.error('Error fetching data from the API:', error);
	  throw error; // Re-throw the error to handle it in the component
	}
  };