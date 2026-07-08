
const Cards = ()=>
{
    return(
        <section style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "2rem",
      }}>
        <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Education</h3>
        <p>
          <p>Support school programs and supplies 📚</p>
          <button>Donate Now</button>
        </p>
      </div>
      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Health cares</h3>
        <p>
          <p>Provide medicines and care for families 🏥</p>
          <button>Donate Now</button>
        </p>
      </div>
      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Food AID</h3>
        <p>
          <p>Deliver meals to those in need 🍲</p>
          <button>Donate Now</button>
        </p>
      </div>

        </section>
    );
};

export default Cards;