import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

const teamList = [
  { name: 'Steve Smith', email: 'steve@st.com', role: 'Designer' },
  { name: 'James Bill', email: 'james@sk.com', role: 'Marketing Associate' },
  { name: 'Roger Golden', email: 'roger@lsd.com', role: 'Engineer' },
]

// const initialFormValues = {
//   name: 'Test',
//   email: 'Tersttest',
//   role: 'tesfes'
// }
const initialFormValues = {
  name: "",
  email: "",
  role: ""
}




function App() {

  const [team, setTeam] = useState(teamList);
  const [formValues, setFormValues] = useState(initialFormValues);
  console.log("App -> formValues", formValues)

  const onChange = evt =>{
    setFormValues(
      {...formValues, [evt.target.name]: evt.target.value}
    )
  }
  
  const onSubmit = evt=>{
    evt.preventDefault();
    const newTeam = {
      name: formValues.name,
      email: formValues.email, 
      role: formValues.role
    }
    if(!newTeam.name || !newTeam.email || !newTeam.role){
      alert('The form must be fully filled out.') 
      return 
    }
    setTeam([...team, newTeam])
    setFormValues(initialFormValues)
  }

  console.log(team)

  return (
    <>
    <header className="w-screen blue flex justify-center border bg-blue-400 h-40 items-center ">
      <h1 className="font-bold text-6xl text-white" >The Team Members</h1>
      </header>
      <div className="border-8 border-gray-300 w-5/6 h-72 rounded-lg m-auto mt-8 flex justify-center items-center">
        <label className="bold text-4xl text-center">Add Team Members
          <form onSubmit={onSubmit}>
           <div><h3 className="inline text-lg">Name: </h3> <input maxLength= "20" className=" text-lg border" name="name" onChange={onChange} value={formValues.name} type="text" placeholder="Add Name" /> </div>
           <div><h3 className="inline text-lg">Email: </h3> <input className=" text-lg border" name="email" onChange={onChange} value={formValues.email} type="email" placeholder="Add Email" /> </div>
           <div><select className="text-lg border border-gray-300" name='role' onChange={onChange} value={formValues.role}>
            <option name="role" >--select role--</option>
            <option value="Engineer"> Engineer </option>
            <option value="Designer">Designer </option>
            <option value="Back-End Software">Back-End Software </option>
            <option value="Marketing Associate">Marketing Associate </option>
          </select></div>
          <button className="text-lg border border-blue-300 border-4 p-1 mt-5 hover:bg-blue-400">Submit</button>
          </form>
        </label>

      </div>
      <div className="w-5/6 mt-8 m-auto flex">
      {team.map((item, index)=>{
        if (item.role==='Engineer'){
          return(
            <div className="w-1/6 h-36 m-3 shadow-md rounded-lg bg-green-200 hover:bg-green-100">
              <h4 className="text-4xl m-2 bold">{item.name}</h4>
              <h6 className="m-2">{item.email}</h6>
              <h6 className="m-2">{item.role}</h6>
            </div>
          )
        } else if (item.role === "Designer"){
          
            return(
              <div className="w-1/6 h-36 m-3 shadow-md rounded-lg bg-red-200 hover:bg-red-100">
                <h4 className="text-4xl m-2 bold">{item.name}</h4>
                <h6 className="m-2">{item.email}</h6>
                <h6 className="m-2">{item.role}</h6>
              </div>
            )
        } else if (item.role === "Marketing Associate"){
            return(
              <div className="w-1/6 h-36 m-3 shadow-md rounded-lg bg-purple-200 hover:bg-purple-100">
                <h4 className="text-4xl m-2 bold">{item.name}</h4>
                <h6 className="m-2">{item.email}</h6>
                <h6 className="m-2">{item.role}</h6>
              </div>
            )
        }

        return(
          <div className="w-1/6 h-36 m-3 shadow-md rounded-lg bg-yellow-200 hover:bg-yellow-100">
            <h4 className="text-4xl m-2 bold">{item.name}</h4>
            <h6 className="m-2">{item.email}</h6>
            <h6 className="m-2">{item.role}</h6>
          </div>
        )
      })}
    </div>
    </>
  );
}

export default App;
