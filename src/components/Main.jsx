import style from "./Main.module.css";

export default function Main() {
    return (
    <main>
      <div className={`py-40 text-center ${style.bgBlack}`}>
        <h1>Content goes here</h1>
      </div>
      
      <div className={`py-40 text-center ${style.bgBlue}`}>
        <ul>
          <li>
            <img src="" alt="" />
            <h5>Digital comics</h5>
          </li>
           <li>
            <img src="" alt="" />
            <h5>DC merchandise</h5>
          </li>
           <li>
            <img src="" alt="" />
            <h5>Subscriptions</h5>
          </li>
           <li>
            <img src="" alt="" />
            <h5>Comic shop locator</h5>
          </li>
           <li>
            <img src="" alt="" />
            <h5>DC power visa</h5>
          </li>
        </ul>
      </div>
    </main>
  );
}