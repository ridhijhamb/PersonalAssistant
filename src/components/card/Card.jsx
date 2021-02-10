import React,{useState,useEffect} from 'react'
import './Card.css'
export default function Card(props) {
   const {onEdit,name,description,label,time,attachment,cover,cardVisited,del,index}=props;

   const [visited,setVisited]=useState(cardVisited);
    const [cardTitle,setCardTitle]=useState(name);


   const onAddCard=()=>{
       setVisited(1);
   }
   const addCardTitle=(event)=>{
       setCardTitle(event.target.value);
   }

    return (
        // 
        <div className="box-1" >
            {
            visited===0?<div><input value={cardTitle} onChange={addCardTitle} placeholder="Enter a title for this card..." type="text"></input>
            <div className="addCardButton" onClick={onAddCard}>Add Card</div></div>:
            <div>
           
            <div onClick={onEdit} className="cardTitle">
                
               {cover==='NULL'?null:<img className="cardImg"
      src={cover}
      alt="new"
      />}
               {label==='none'?null:<div className="cardLabel" style={{backgroundColor:`${label}`}} ></div>}
                <div>{cardTitle}</div>
                {time==='NULL'?null:<div className="cardTime">{time}</div>}
                
                </div>
                <div class="moveCard" onClick={()=>del(index)}> Remove Card   X</div>
            </div>
            }
            {/*<ul>
            <li>{name}</li>
            <li>{description}</li>
            <li>{label}</li>
            <li>{time}</li>
            <li>{attachment}</li>
            <li>{cover}</li> 7 4 2 4 2 9
            </ul> 
               */}
        </div>
    )
}
