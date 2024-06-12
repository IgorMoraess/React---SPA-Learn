import React from 'react'
import styles from "./About.module.css";
import PostModelo from 'components/Post/PostModelo'
import fotoCapa from 'assets/img/sobre_mim_capa.png'
import fotoSobreMim from 'assets/img/sobre_mim_foto.png'


const About = () => {
  return (
        <PostModelo
        fotoCapa={fotoCapa}
        titulo={"Sobre mim"}
        >
          <h3 className={styles.subtitulo}>
            Olá,eu sou o Igor
          </h3>
          <img className={styles.fotoSobreMim} src={fotoSobreMim} alt="Minha foto Sorrindo" 
          />
          <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi repellat, ea in quae eius porro temporibus, voluptas at ipsum beatae illo atque? Sapiente et, saepe voluptatum consequuntur consequatur suscipit unde!
          </p>
          <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi repellat, ea in quae eius porro temporibus, voluptas at ipsum beatae illo atque? Sapiente et, saepe voluptatum consequuntur consequatur suscipit unde!
          </p>
          <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi repellat, ea in quae eius porro temporibus, voluptas at ipsum beatae illo atque? Sapiente et, saepe voluptatum consequuntur consequatur suscipit unde!
          </p>
          <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi repellat, ea in quae eius porro temporibus, voluptas at ipsum beatae illo atque? Sapiente et, saepe voluptatum consequuntur consequatur suscipit unde!
          </p>
          <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi repellat, ea in quae eius porro temporibus, voluptas at ipsum beatae illo atque? Sapiente et, saepe voluptatum consequuntur consequatur suscipit unde!
          </p>
          <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi repellat, ea in quae eius porro temporibus, voluptas at ipsum beatae illo atque? Sapiente et, saepe voluptatum consequuntur consequatur suscipit unde!
          </p>
        </PostModelo>
  )
}

export default About