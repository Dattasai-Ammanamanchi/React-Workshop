
import './App.css';
import {useEffect,useState} from "react";

//function square(x){
//  return  x*x
//}

//const square={x}=>x*x

function Header({name,title,contact}){
  return( 
     <div
      style={{
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "blue",
      color: "white",
      padding: "2rems",
      
    }}
    >

      <div>
        <h1>{name}</h1>
        <h2>{title}</h2>
    </div>
    <div>
      <p>Email:{contact.email}</p>
      <p>Phone:{contact.phone}</p>
      <p>website:{contact.wesite}</p>
     </div> 
    </div>
  );

}

function Section({title,children}) {
  const [expanded,setExpanded] = useState(true);
  return(
    <div style={{padding: "2rem"}}>
    <h4 onClick={() => setExpanded(!expanded)}>
    {expanded ? "V": ">"}
    <u> {title}</u>
    </h4>
    {expanded && children}
    </div>
  );
}

function Education({details})
{
  let arr=[];
  for(let detail of details){
    arr.push(
      <tr>
        <tr>{detail.name}</tr>
        <td>
          {detail.yearStart} -{detail.yearEnd} 
          </td>
          </tr>

    );
  }
  return <table width={"100%"}>{arr}</table>;
}

function Technology({name,proficieny}){
  return (
    <div
     style={{
      backgroundColor: "#cccccc",
     }}>
     <h6
    style={{
      backgroundColor:"green",
      height:"30px",
      borderRadius:"5px",
      width: proficieny,
      color: "white",

    }}

    >
      {name}
      </h6>
    </div>

  );
}

//Achivements
function Acheivements({list}){
  return (
  <ul>
    {list.map((achivement) => 
    <li>{achivement}</li>
    )}
  </ul>
  );
}


function App() {


  return (
    <div>
      <Header 
      name="A.Datta Sai"
      title="Front-End Engineering"
      contact={{
        email: "datta1793@gmail.com",
        phone: "7989841368",
        website: "www.datta5.com",

      }}
      />
     <Section title="Education">
      <Education details={[
        {name: 'Amrita School of Engineering', yearStart: '2020', yearEnd: '2024'},
        {name: 'Sri Chaitanya Junior College', yearStart: '2018', yearEnd: '2020'},
        {name: 'St. Anns School ', yearStart: '2018', yearEnd: '2020'}

      ]}
      />
     </Section>
     <Section title="Technology">
      <Technology name="Java" proficiency="80%"/>
      <Technology name="javascript" proficiency="80%"/>
      <Technology name="C++" proficiency="80%"/>
      <Technology name="PYTHON" proficiency="30%"/>
      <Technology name="CSS" proficiency="80%"/>
      <Technology name="HTML" proficiency="80%"/>

     </Section>
      <Section title="Acheivements">
        <Acheivements 
        list={[
          "Secured good rank in CTF",
          "3-star proficieny in hackerRank for cpp and python",
          "participated in Rice hackathon , a premium level hackathon",
          "2-star coder in Codechef",
          
        ]}
        />
      </Section>
     </div>
  );
}

export default App;