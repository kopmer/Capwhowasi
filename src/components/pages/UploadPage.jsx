import React from "react";
import styles from "../Kcf/KcfApp.module.css";
function UploadPage() {
    return (
        <div className="App">
            <form>
                <label className={styles.signup_profileImg_label} htmlFor="profileImg">프로필 이미지 추가</label>
                <input className={styles.signup_profileImg_input} type="file" accept="image/*" id="profileImg"/>
            </form>
            <h1>upload page</h1>
            
        </div>
    )
}

export default UploadPage;