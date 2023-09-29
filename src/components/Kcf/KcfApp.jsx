import React from "react";
import { Button } from "./funclist";
import styles from "./KcfApp.module.css";
const KcfApp = () => {
    return(
        <div>
            <img className ={styles.start_img} alt = "startimg" src ={process.env.PUBLIC_URL + "/camera1280.jpg"} width = '300px'/>
            <h1>who was i</h1>
            <Button label={"닮은꼴 찾기"} className ={styles.btn}></Button>
        </div>
    )
}

export default KcfApp

