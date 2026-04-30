export async function getData (){
 const res = await fetch('https://mango-books-server.onrender.com/books_data')
 const data = await res.json()
 return data
}
export async function getDataDetails (id){
 const res = await fetch(`https://mango-books-server.onrender.com/books_data/${id}`)
 const data = await res.json()
 return [data]
}