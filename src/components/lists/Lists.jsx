import React,{useState} from 'react'
import List from '../list/List'
import './Lists.css'
import Navbar from '../navbar/Navbar'
import Board from '../board/Board'

export default function Lists() {
    
    const [number, setNumber] = useState([1]);
    const [titleList,setTitleList]=useState([]);
    const [moveFromTo,setMoveFromTo]=useState([]);
    
    
    const addList=()=>{
        const tempNumber=[...number];
        tempNumber.push(1);
        setNumber(tempNumber);
    }
    const addTitleList=(title)=>{
        const temp=[...titleList];
        temp.push(title);
        setTitleList(temp);
    }

    const moveCard=(from,to,value)=>{
        if(from!==to){
        //console.log('ho gya',from,to,value);
        let moveFromToTemp=[...moveFromTo];
        moveFromToTemp.push({from,to,value})
        setMoveFromTo(moveFromToTemp);
        }
    }

    

    return (
        <div>
        <Navbar/>
        <Board/>
        
        
        <div className="addLists"> 
        
         {
             number.map((data,index)=>{
              return <List titleList={titleList} onAddList={addTitleList} moveFromTo={moveFromTo} moveCard={moveCard} key={index}/>  
             })
         }
         <div className='listBtn' onClick={addList}>
         + Add another list
         </div>  
        </div>
        </div>
    )
}
