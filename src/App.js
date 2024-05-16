import "./App.css";
import YouTubeCard from "./Components/YouTubeCard";

function App() {
  return (
    <div>
      {/*======================
    youtube header section
    =========================
    */}
      <header
        style={{
          display: "flex",
        }}
      >
        <img
          style={{
            borderRadius: "50%",
            gap: "20px",
          }}
          src="https://yt3.googleusercontent.com/OoVuuL6C86aY1WQVxMouogyZcvhsMty_0C9k1KTQi303O-SlyivduPeozs9SvApxj6nwjq9EpA=s176-c-k-c0x00ffffff-no-rj"
          alt="Ashok IT"
        ></img>
        <div>
          <h2>Ashok IT</h2>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
            type="none"
          >
            <li>. @ashokit</li>
            <li>‧ 80.7K subscribers</li>
            <li>‧ 1.1K videos</li>
          </ul>
          <div>
            <a href="https://www.ashokitech.com">About Ashok IT :</a>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <button
              style={{
                border: "none",
                padding: "8px 20px",
                backgroundColor: "black",
                borderRadius: "20px",
                color: "white",
                marginRight: "10px",
                fontWeight: "550",
              }}
            >
              Subscribed{" "}
            </button>

            <button
              style={{
                border: "2px solid grey",
                padding: "8px 20px",
                backgroundColor: "white",
                borderRadius: "20px",
                fontWeight: "550",
              }}
            >
              Join
            </button>
          </div>
        </div>
      </header>
      <hr />
      <section>
        {/*youtube Video Card 1*/}
        <h3>Popular Videos</h3>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <YouTubeCard
            imgLink="https://i.ytimg.com/vi/Ri-URt8gPCk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwlnuhoE6zjAAmneD7IYXaelGVLQ"
            altText="Remove Dublicate Character"
            title=" Java Program To Remove Duplicate Characters In String | Ashok IT"
            paraText="145K views 3 years ago"
          ></YouTubeCard>
          <YouTubeCard
            imgLink="https://i.ytimg.com/vi/aAxtUJrpMWQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvVRlZH033cDH-K9dXbNRV8E0f9Q"
            altText="Devops"
            title="DevOps Interview For Experience : First Round Selected"
            paraText="145K views 3 years ago1134K views1 year ago"
          ></YouTubeCard>

          <YouTubeCard
            imgLink="https://i.ytimg.com/vi/2HZ77GR-o84/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMc2yIj4stH5cz84tFraB8tVGOWA"
            altText="Devops"
            title="Java Program To Reverse Given String | Ashok IT"
            paraText="109K views 3 years ago"
          ></YouTubeCard>
          <YouTubeCard
            imgLink="https://i.ytimg.com/an_webp/qJ8gUp0O25k/mqdefault_6s.webp?du=3000&sqp=CK-XlbIG&rs=AOn4CLD341HAySuY4ISGQATQZQQ9SscCyA"
            altText="CICD"
            title="DevOps Project Setup By Mr. Ashok | CI CD Pipeline @ashokit"
            paraText="109K views 3 years ago98K views 1 year ago"
          ></YouTubeCard>
        </div>

        <h3>Interview Preparation Guide @ashokit</h3>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <YouTubeCard
            imgLink="https://i.ytimg.com/vi/72tbMvbXAq4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoq_g8wHL0KIjQkzttaR6nx9skYg"
            altText="Java Developer"
            title="Java Developers Roles and Responsibilities in JOB | Interview
            Questions"
            paraText="25K views 1 years ago"
          ></YouTubeCard>
          <YouTubeCard
            imgLink="https://i.ytimg.com/vi/lxxFkSZsdaM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdmoay4aLfWTEfH0M_d2zQ27orow"
            altText="Devops"
            title="DevOps Engineer Roles and Responsibilities @ashokit"
            paraText="25K views 1 years ago6k views 1 year ago"
          ></YouTubeCard>
          <YouTubeCard
            imgLink="https://i.ytimg.com/an_webp/xvSO8cIOmlE/mqdefault_6s.webp?du=3000&sqp=CNGflbIG&rs=AOn4CLBwic97GMdqdS9U6Ek7wJ8-ajXhYw"
            altText="My Self"
            title="How to explain self introduction in interviews @ashokit"
            paraText="15K views 1 years ago"
          ></YouTubeCard>
          <YouTubeCard
            imgLink="https://i.ytimg.com/vi/I8gb_ScUs9U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-YwTnH0LZ5hOcOReMmVye4xDKEA"
            altText="Java"
            title=" Top 80 Java Interview Questions & Answers For Experienced People"
            paraText="80K views 1 year ago"
          ></YouTubeCard>
        </div>
      </section>
    </div>
  );
}

export default App;
