import styles from "../profile/profile.module.css";
import "../../index.css";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card";
import { useState } from "react";

const ProfilePage = () => {

    const [text,setText] = useState("");
    const [displayText, setDisplayText] = useState("");
    const [count,setCount] = useState(0);

    const changeText = (e) =>{

        setText(displayText);
        setDisplayText("");
    }

    return <> 
        <Navbar/>
        <div className={styles.ProfilePage}>

            <div className={styles.heroSection}>

                <div className={styles.heroText}>
                    
                    <div className="otherText">
                    
                        <pre style={{fontSize:'2rem'}}>
                            Hi there! this is
                            <h2 className='highlightText' style={{fontSize:'2rem'}}>RishiKesh K</h2>
                                i'm pursuing my b.sc cs degree in <br/>
                                <span style={{color:'rgb(228,196,6)'}}>GAC Nandanam</span>

                        </pre>
                    
                    </div>
                    
                    <div className={styles.btnSection}>
                    
                            <a href="#fav-activities" > 

                                <button className={styles.aboutMeBtn}>

                                    About-me
            
                                </button>

                            </a>

                             <a href="#profile" > 

                                <button className={styles.portfolioBtn}>

                                    Profile
            
                                </button>

                            </a>
                    </div>
                
                </div>

                <div className={styles.heroImg}>
                
                    <img src="./profile.jpeg" className={styles.heroImg}/>
                
                </div>

            </div> 
            
            <div className={styles.favActivitiesSec} id="fav-activities">
                
                <h3 style={{fontSize:'2rem'}}>
                
                    Fav <span style={{color:'#141414'}}>activities</span>
                    
                </h3>

                <div className={styles.cards}>
                    
                    <Card/>

                </div>

            </div>

            <div className={styles.dashboardSection} id="profile">
                
               <h3 style={{fontSize:'2rem'}}>
                
                    Profile
                    
                </h3>
                
                <div className={styles.dashboard}>
                    
                    <div className={styles.displayText}>
        
                        <div className={styles.inputBox}>
                            
                            <label>
                                Type Smth:
                            </label>

                            <input type="text" className={styles.inputField}
                            placeholder="Type Here" onChange={(e)=> setDisplayText(e.target.value)} value={displayText}/>

                            <button onClick={changeText} className={styles.displayTextBtn}>
                                Change
                            </button>

                        </div>

                        <h1 className={styles.text}>
                            {text}
                        </h1>
                    
                    </div>

                    <div className={styles.likeBtnSection}>
    
                            <i className={`${styles.likeBtn} bi bi-heart-fill`}
                            onClick={()=>setCount(count+1)}>
                                
                            </i>

                            <p>
                                {count}
                            </p>

                    </div>

                </div>


            </div>
            
           
        </div>
    </>
}

export default ProfilePage;