import React from "react";
import { Button } from "../Kcf/funclist";
import styles from "../Kcf/KcfApp.module.css";
import { Link } from "react-router-dom";
const KcfApp = () => {
    return(
        <div>
            <img className ={styles.start_img} alt = "startimg" src ={process.env.PUBLIC_URL + "/camera1280.jpg"} width = '300px'/>
            <h1>who was i</h1>
            <Link to="/UploadPage">
            
                <Button label={"닮은꼴 찾기"} styleClass ={styles.start_btn} onClick = {() => {}}/>
            </Link>
            
        </div>

    )
}

export default KcfApp

