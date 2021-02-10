import React,{useState} from 'react'
import './EditList.css'

export default function EditList(props) {
    const {data,onSubmit,index}=props;
    
    const [changedData, setChangedData] = useState(data);
    const editData=()=>{

        onSubmit(changedData,index)
    }

    const editName=(event)=>{
        let tempData={...changedData};
        tempData.name=event.target.value;
        setChangedData(tempData);
    }

    const editLabel=(event)=>{
        let tempData={...changedData};
        tempData.label=event.target.value;
        setChangedData(tempData);
    }
    
    const editTime=(event)=>{
        let tempData={...changedData};
        tempData.time=event.target.value;
        setChangedData(tempData);
    }
    
    const editDescription=(event)=>{
        let tempData={...changedData};
        tempData.description=event.target.value;
        setChangedData(tempData);
    }
    
    const editCover=(event)=>{
        let tempData={...changedData};
        tempData.cover=event.target.value;
        setChangedData(tempData);
    }
    return (
        <div className="modal" >

          <div><div className="one">Edit Name</div><div className="editBox"><input value={changedData.name} onChange={editName}></input></div></div>
          <div><div className="one">Edit description</div><div className="editBox"><textarea placeholder="description of tasks" value={changedData.description} onChange={editDescription}></textarea></div></div>
          <div><div className="one">Edit label</div><div className="editBox"><input value={changedData.label} onChange={editLabel} type="color"></input></div></div>
          <div><div className="one">Edit Date time</div><div className="editBox"><input type="datetime-local" value={changedData.time} onChange={editTime}></input></div></div>
          <div><div className="one">Edit Cover</div><div className="editBox"><input placeholder="Enter the link of cover image" value={changedData.cover} onChange={editCover}></input></div></div>
          
          <button onClick={()=>editData(changedData,index)} style={{margin: '5px'}}>Edit changes</button>              
        </div>
        
    )
}
