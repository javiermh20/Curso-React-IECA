import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "Curso React TalentoTech" },
    {
      name: "description",
      content: "Curso React TalentoTech",
    },
  ];
};

export const loader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return json({ posts });
};

export default function Index() {
  const { posts } = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Talento Tech React</h1>
      <Link to="/second">Second page</Link>
      <Link to="/posts/new">New post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
