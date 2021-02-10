import React,{useState} from 'react'
import Card from '../card/Card'
import EditList from '../editList/EditList'
import './List.css'
import { useEffect } from 'react';

export default function List(props) {
    const {titleList,onAddList,moveFromTo,moveCard}=props;
    const [cards, setCards] = useState([]);
    //{}
    const [edit,setEdit]=useState(-1);
    const [card,setCard]=useState(0); //visited in card
    const [title,setTitle]=useState(1);
    const [head,setHead]=useState("");
    const [move,setMove]=useState();
    
    useEffect(() => {
        
        moveFromTo.map((data)=>{
            if(data.from===head && data.to!==head){
                let tempCards=[...cards];
                let ind=tempCards.indexOf(data.value);
                if(ind>-1)
                tempCards.splice(ind,1);
                setCards(tempCards);
            }
            else if(data.to===head && data.from!==head){
                let tempCards=[...cards];
                console.log(data.value);
                tempCards.push(data.value);
                setCards(tempCards);
                setCard(1);
            }
        })
    }, [moveFromTo])
    
    
    const addCard=()=>{
        
        let tempCards=[...cards];
        tempCards.push({
            name:"default",
            description:"null",
            label:"red",
            time:'Sept 1',
            attachment:'',
            cover:"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        });
        setCards(tempCards);
        setCard(0);
    }
    
    const editCard=(index)=>{
        console.log('in edit',index);
        setEdit(index);
    }
    
    const editChanges=(tempCards,index)=>{
        setEdit(-1);
        setCard(1);
        let temp=[...cards];
        console.log(temp);
        temp[index]=tempCards;
        console.log('after change:',temp)
        setCards(temp);
    } 
    const addTitle=()=>{
        setTitle(prev=>1-prev);
       onAddList(head);
    }
    const onHeadChange=(event)=>{             ///change title
        let tempHead=event.target.value;
        setHead(tempHead);
    }

    const onDelete=(index)=>{
        //delete the specific item from array
        
        //delete 
        const tempCards=[...cards];
        if (index > -1) {
            tempCards.splice(index, 1);
          }
          setCards(tempCards);
    }

    const handleChange=(event,index)=>{
        console.log(event.target.value);
        moveCard(head,event.target.value,cards[index]);
        setMove(event.target.value);
 }

    return (
        <div className="list" >
            {title===1?<div className="listTitle"><input type="text" value={head} onChange={onHeadChange} placeholder="Add Title"></input><div className="listHead" onClick={addTitle}>+</div></div >:<div className="listHead" onClick={addTitle}>{head}</div>}
            {edit!==-1?<EditList data={cards[edit]} onSubmit={editChanges} index={edit}/>:
                <div >{cards.map((data,index)=>{return <div><Card 
                    onEdit={()=>editCard(index)}
                    key={index} 
                    name={data.name} 
                    description={data.description}
                    label={data.label}
                    time={data.time}
                    attachment={data.attachment}
                    cover={data.cover}
                    cardVisited={card}
                    del={onDelete}
                    index={index}
                />
                <div className="moveCard">
                Move Card 
                <span><select value={move} onChange={(event)=>handleChange(event,index)}>
                 {titleList.map((data)=><option value={data}>{data}</option>)
                }
                </select></span>
                </div>
                </div>} ) 
                }
                <div className="listAddCard" onClick={addCard}> + Add another card </div>
               </div>
            }
        </div>
    )
}