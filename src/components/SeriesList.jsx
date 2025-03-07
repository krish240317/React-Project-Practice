// import "./Netflix.css";
import styles from "./Netflix.module.css"
import styled from "styled-components";
export const SeriesList=(props)=>{

    const { img_url, name, rating, description, cast,genre,watch_url}=props.currentele; //Destructuring

  
        const Button=styled.button({
            padding:"1.2rem 2.4rem",
            border:"none",
            fontSize:"1.6rem",
            backgroundColor:`${rating>=8.5 ? "#7dcea0":"#f7dc6f"}`,
            color:"var(--bg-color)",
            cursor:"pointer"
        });

        const Rating=styled.h3`
        font-size:1.6rem;
        color:#7dcea0;
        text-transform:capitlize;
        `

    const ratingclass = rating>=8.5 ? styles.super_hit:styles.average; // here also we nedd to write classname in {} braces as this is also a class name only 


    return (
        <li className={styles.card}>
            <div>
                <img src={props.currentele.img_url} alt="QOT.jpg" width="50%" height="50%" />
            </div>
            <div className={styles["card-content"]}>
            <h2>Name:{name} </h2>
            <Rating>Rating: <span className={`${styles.rating} ${ratingclass}`}>{rating}</span> </Rating>
            <p>Summary:{description}</p>
            <p>Genre:{genre}</p>
            <p>Summary:{cast}</p>

            <a href={watch_url} target="_blank">
                <Button>
                Watch Now
                </Button>
            </a>
            </div>
        </li>
    );
}