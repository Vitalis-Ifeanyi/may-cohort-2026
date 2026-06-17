import FutureData from '../../data/FutureData';

function Future() {
  return (
    <div style={{padding:"30px", display:"flex", flexDirection:"column", gap:"30px"}}>
      <h1 style={{textAlign:"center"}}>Future</h1>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"20px"}}>
        {FutureData.map((props, index)=>(
          <div key={index} style={{border:"1px solid black", padding:"20px", boxShadow:"0px 0px 10px gray"}}>
            <img src={props.image} alt=''/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Future;
