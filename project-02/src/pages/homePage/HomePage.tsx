import React, { Component } from 'react'
import Student from '../../components/student/Student'

type StudentDetails={
  id:String;
  name:String;
  address:String;
  subject:String[];
};

type HomeProps={
}

type HomeState={
  students:StudentDetails[];
}

export default class HomePage extends Component<HomeProps,HomeState> {
constructor(props:HomeProps){
 super(props);
 this.state={students:[
   {id:"S001",name:"nipuna",address:"galle",subject:["S1","S2","S3"]},
   {id:"S002",name:"kamal",address:"matra",subject:["S1","S2"]},
   {id:"S003",name:"namal",address:"panadure",subject:["S1"]}
  ]}
}

  render() {
    return (
      <div className='flex m-auto p-5 justify-center gap-3'>
        {/* <Student id="S012" name="kamala" address="thangalla" subject={["matha","D2"]}/> */}
        {/* <Student />
        <Student /> */}

        {this.state.students.map((stu)=>(
               <Student {...stu}/>
        ))}
      </div>
    )
  }
}
