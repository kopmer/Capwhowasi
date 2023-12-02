import React from "react";
import { Button } from "../Kcf/funclist";
import styles from "../Kcf/KcfApp.module.css";
import { Link } from "react-router-dom";
import "../Kcf/KcfApp.css"
const KcfApp = () => {
    return(
        
        <div className="homeContainer">
            <div className="topBox">
            </div>
            <div className="imgBox">
                <img alt = "startimg" src ={process.env.PUBLIC_URL + "/camera1280.jpg"} className="homeImg"/>
            </div>
            
            <div className="btn_container">
                <div className="btnBox">
                    <p className="topp">나랑 닮은 위인은 </p><p className="botp">누구일까?</p>
                    <Link to="/UploadPage">
                        <Button label={"닮은꼴 찾기"} styleClass ={styles.start_btn} onClick = {() => {}}/>
                    </Link>
                </div>
            </div>
            
            
            <div className="bottomBox">
            </div>
        </div>

    )
}

export default KcfApp

