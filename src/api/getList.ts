const url = "https://jsonplaceholder.typicode.com/todos/1";
export async function getItems() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Произошла ошибка, код ошибки ", error);
  } finally {
    console.log("this is finally method...");
  }
}
