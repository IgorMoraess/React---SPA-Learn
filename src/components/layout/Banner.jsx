import React from "react";
import styles from "./Banner.module.css";
import circoColorido from 'assets/img/circulo_colorido.png'
import minhaFoto from 'assets/img/minha_foto.png'

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
            Olá Mundo
        </h1>

        <p className={styles.paragrafo}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur qui provident corporis sit. Accusamus inventore itaque doloribus illo perferendis quo? Asperiores quos enim dolor magnam corporis. Deserunt corporis culpa quos?
        </p>
      </div>
      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circoColorido} aria-hidden={true} alt="" />

        <img className={styles.minhaFoto} src={minhaFoto} alt="Minha Foto" />

      </div>
    </div>
  );
}

export default Banner;
