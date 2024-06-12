import React from "react";
import "./PostAbout.css";
import styles from "./PostAbout.module.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "./PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "components/pages/NaoEncontrada";
import HomePage from "components/pages/HomePage";
import Post from "./Post";

function PostAbout() {
  const parametros = useParams();

  const postAbout = posts.find((postAbout) => {
    return postAbout.id === Number(parametros.id);
  });

  if (!postAbout) {
    return <NaoEncontrada />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);


  return (
    <Routes>
      <Route path="*" element={<HomePage />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${postAbout.id}/capa.png`}
              titulo={postAbout.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{postAbout.texto}</ReactMarkdown>
              </div>

              <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
              </h2>
              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post)=>(
                  <li key={post.id}>
                    <Post post={post}/>
                  </li>
                ))}
              </ul>

            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}

export default PostAbout;
