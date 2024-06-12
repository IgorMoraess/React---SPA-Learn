import React from "react";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";
import BotaoPrincipal from "components/layout/BotaoPrincipal";

function Post({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem da capa"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
}

export default Post;
