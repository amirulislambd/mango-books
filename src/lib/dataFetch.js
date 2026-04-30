export async function getData (){
 const res = await fetch('https://mango-books-server.onrender.com/books_data')
 const data = await res.json()
 return data
}