export async function getData() {
  const res = await fetch("https://mango-books-server.onrender.com/books_data",{
    cache:'no-cache'
  });
  const data = await res.json();
  return data;
}

export async function getAllBookData() {
  const res = await fetch(
    `https://mango-books-server.onrender.com/books_data`,
    { cache: "no-cache" }
  );
  const data = await res.json();
  return data;
}

export async function getDataDetails(id) {
  const res = await fetch(
    `https://mango-books-server.onrender.com/books_data/${id}`,
  );
  const data = await res.json();
  return [data];
}

export async function getImgBbURL(photo) {
  const imageUrl = photo[0];
  const formData = new FormData();
  formData.append("image", imageUrl);

  const imgBB = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
    {
      method: "POST",
      body: formData,
    },
  );
  const imgBbURL = await imgBB.json();
  const photoURL = imgBbURL.data.display_url;
  return photoURL;
}
