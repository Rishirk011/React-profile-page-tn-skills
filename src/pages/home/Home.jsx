import styles from "../home/home.module.css";

const Home = () =>{
    
    const lists =['one','two']

     return<>
        <h1>home page</h1>
        <h2>h2 tag</h2>
        <img src='logo512.png' alt="alt text" 
        width={'200px'} height={'200px'}/>

        <div>
            <label htmlFor="gender" 
            id="male">
                gender
            </label>
            <input type="radio" id="gender"/>
            male
            <label htmlFor="" id="female"></label>
            <input type="radio" id="female"/>
            female
        </div>
        
        <p>
            paragraph
        </p>


        <ul>
            {lists.map((list)=>(
                <li key={list}>{list}</li>
            ))}
        </ul>

        <button
        >
            click me
        </button>

        <select name="choice" id="">
            <option value="choice">one</option>
            <option value="choice">two</option>
        </select>

        <div className={styles.card}>
            <h1>card</h1>
            <p>body of the card</p>
        </div>



    </>
}

export default Home;