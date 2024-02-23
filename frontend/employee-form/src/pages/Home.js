import React, {useState, useEffect} from 'react' //useState and useEffect are hooks which we will be using
import axios from 'axios'

function Home() {
  const[employees, setEmployees] = useState([])
  const[name, setName] = useState("")
  const[age, setAge] = useState("")
  const[department, setDepartment] = useState("")
  const[designation, setDesignation] = useState("")
  const[salary, setSalary] = useState("")
  const[address, setAddress] = useState("")
  const[newname, setNewName] = useState("")
  const[newAge, setNewAge] = useState("")
  const[newDepartment, setNewDepartment] = useState("")
  const[newDesignation, setNewDesignation] = useState("")
  const[newSalary, setNewSalary] = useState("")
  const[newAddress, setNewAddress] = useState("")


  //fetching employess
  useEffect(() => {
    fetchEmployees();
  }, [])

  const fetchEmployees = () => {
    axios
    .get('http://localhost:3001/employees')
    .then((res) => {
      setEmployees(res.data)
      console.log(res.data)
    })
  }

  //handle submissions
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post('http://localhost:3001/create', {name, age, department, designation, salary, address})
    .then(() => {
      console.log('Employee added')
      setName('')
      setAge('')
      setDepartment('')
      setDesignation('')
      setSalary('')
      setAddress('')
      fetchEmployees();
    })
    .catch((error) => {
      console.log('Unable to add employee')
    })
  }

  //updating names
  const updateName = (id) => {
    axios
    .put('http://localhost:3001/employees/name', {name : newname, id: id})
    .then(() => {
      console.log('Employee was updated')
      fetchEmployees();
    })
    .catch((error) => {
      console.log('Unable to update employee details')
    })
  }

  //updating age
  const updateAge = (id) => {
    axios
    .put('http://localhost:3001/employees/age', {age : newAge, id: id})
    .then(() => {
      console.log('Employee was updated')
      fetchEmployees();
    })
    .catch((error) => {
      console.log('Unable to update employee details')
    })
  }

  //updating department
  const updateDepartment = (id) => {
    axios
    .put('http://localhost:3001/employees/department', {department : newDepartment, id: id})
    .then(() => {
      console.log('Employee was updated')
      fetchEmployees();
    })
    .catch((error) => {
      console.log('Unable to update employee details')
    })
  }

  //updating designation
  const updateDesignation = (id) => {
    axios
    .put('http://localhost:3001/employees/designation', {designation : newDesignation, id: id})
    .then(() => {
      console.log('Employee was updated')
      fetchEmployees();
    })
    .catch((error) => {
      console.log('Unable to update employee details')
    })
  }

  //updating salary
  const updateSalary = (id) => {
    axios
    .put('http://localhost:3001/employees/salary', {salary : newSalary, id: id})
    .then(() => {
      console.log('Employee was updated')
      fetchEmployees();
    })
    .catch((error) => {
      console.log('Unable to update employee details')
    })
  }

  //updating address
  const updateAddress = (id) => {
    axios
    .put('http://localhost:3001/employees/address', {address : newAddress, id: id})
    .then(() => {
      console.log('Employee was updated')
      fetchEmployees();
    })
    .catch((error) => {
      console.log('Unable to update employee details')
    })
  }

  //make delete operations
  const handleDelete = (id) =>{
    axios
    .delete(`http://localhost:3001/employees/${id}`)
    .then(() => {
      console.log('Employee deleted')
      fetchEmployees();
    })
    .catch((error) =>{
      console.log('Unable to delete employee')
    })
  }

  return (
    <div className="w-full h-[1200px]">
        <h1 className="text-center text-zinc-300 p-5 text-3xl">EMPLOYEE FORM</h1>
        <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit}>
              {/* Employee Name Input */}
              <label className='text-white'>Employee Name</label>
              <br />
              <input className='w-[400px] h-[50px] bg-zinc-600 p-2 text-white rounded-lg border-white border'
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)} /> 
              {/* grab whatever info has been submitted and get it to the database  */}
              <br />
              <br />
              {/* Employee Age Input */}
              <label className='text-white'>Employee Age</label>
              <br />
              <input className='w-[400px] h-[50px] bg-zinc-600 p-2 text-white rounded-lg border-white border'  
              type='number'
              placeholder='Age'
              value={age}
              onChange={(e) => setAge(e.target.value)} /> 
              <br />
              <br />
              {/* Employee Department Input */}
              <label className='text-white'>Employee Department</label>
              <br />
              <input className='w-[400px] h-[50px] bg-zinc-600 p-2 text-white rounded-lg border-white border'  
              type='text'
              placeholder='Department'
              value={department}
              onChange={(e) => setDepartment(e.target.value)} /> 
              <br />
              <br />
              {/* Employee Designation Input */}
              <label className='text-white'>Employee Designation</label>
              <br />
              <input className='w-[400px] h-[50px] bg-zinc-600 p-2 text-white rounded-lg border-white border'  
              type='text'
              placeholder='Designation'
              value={designation}
              onChange={(e) => setDesignation(e.target.value)} /> 
              <br />
              <br />
              {/* Employee Salary Input */}
              <label className='text-white'>Employee Salary</label>
              <br />
              <input className='w-[400px] h-[50px] bg-zinc-600 p-2 text-white rounded-lg border-white border'  
              type='number'
              placeholder='Salary'
              value={salary}
              onChange={(e) => setSalary(e.target.value)} /> 
              <br />
              <br />
              {/* Employee Address Input */}
              <label className='text-white'>Employee Address</label>
              <br />
              <input className='w-[400px] h-[50px] bg-zinc-600 p-2 text-white rounded-lg border-white border'  
              type='text'
              placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)} /> 
              <br />
              <br />
              <button className='w-[400px] h-[50px] text-white border bg-[#1a1a1a] hover:bg-zinc-800'
              type='submit'>Sumbit Form</button>
            </form>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <div className='text-white text-center p-5 bg-[#1a1a1a]'>
          <h1 className='text-3xl'>EMPLOYEE DETAILS</h1>
          <div>
            {
              employees.map(employee =>
                <div key={employee.id}>
                  <ul className='p-4'>
                    <li><button className='translate-x-[-20px] font-bold hover:text-zinc-700 border p-1' onClick={() => handleDelete(employee.id)}>X</button>Name: {employee.name}
                    <input className='m-3 bg-zinc-600 p-1' 
                    type='text' 
                    placeholder='Update Name' 
                    onChange={(e) => setNewName(e.target.value)} /> 
                    <button className='border p-1 hover:bg-teal-900/80'
                    onClick={() => updateName(employee.id)}>Update</button></li>

                    <li>Age: {employee.age}
                    <input className='m-3 bg-zinc-600 p-1' 
                    type='number' 
                    placeholder='Update Age' 
                    onChange={(e) => setNewAge(e.target.value)} /> 
                    <button className='border p-1 hover:bg-teal-900/80'
                    onClick={() => updateAge(employee.id)}>Update</button></li>

                    <li>Department: {employee.department}
                    <input className='m-3 bg-zinc-600 p-1' 
                    type='text' 
                    placeholder='Update Department' 
                    onChange={(e) => setNewDepartment(e.target.value)} /> 
                    <button className='border p-1 hover:bg-teal-900/80'
                    onClick={() => updateDepartment(employee.id)}>Update</button></li>

                    <li>Designation: {employee.designation}
                    <input className='m-3 bg-zinc-600 p-1' 
                    type='text' 
                    placeholder='Update Designation' 
                    onChange={(e) => setNewDesignation(e.target.value)} /> 
                    <button className='border p-1 hover:bg-teal-900/80'
                    onClick={() => updateDesignation(employee.id)}>Update</button></li>

                    <li>Salary: {employee.salary}
                    <input className='m-3 bg-zinc-600 p-1' 
                    type='number' 
                    placeholder='Update Salary' 
                    onChange={(e) => setNewSalary(e.target.value)} /> 
                    <button className='border p-1 hover:bg-teal-900/80'
                    onClick={() => updateSalary(employee.id)}>Update</button></li>

                    <li>Address: {employee.address}
                    <input className='m-3 bg-zinc-600 p-1' 
                    type='text' 
                    placeholder='Update Address' 
                    onChange={(e) => setNewAddress(e.target.value)} /> 
                    <button className='border p-1 hover:bg-teal-900/80'
                    onClick={() => updateAddress(employee.id)}>Update</button></li>
                  </ul>
                </div>)
            }
          </div>
        </div>
    </div>
  )
}

export default Home