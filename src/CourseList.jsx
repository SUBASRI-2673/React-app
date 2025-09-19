import { useState, useEffect } from 'react';
import Reactimage from "../data/assets/React.png";
import Course from './course';  

function CourseList() {
  const [courses, setCourses] = useState(null);

  
  useEffect(() => {
    
    fetch('http://localhost:3000/courses')  //datas ah chrome la irunthu fetch panni edukrom
    .then(response => {
      console.log(response);
    return response.json();})
    .then(data=> setCourses(data));
  },[]);


  function handleDelete(id){
    console.log(id);
      const newCourses = courses.filter((courses)=> courses.id != id) //filtering la oru kuripitta amount keezha ullathu allathu mela ullathu print pannum
    setCourses(newCourses);   //ippo nama kodukra id thavira matha yella courses variable ah mothama store aaguthu
  }

// courses.sort((a,b)=> b.price-a.price)     //solting la price order wise arrage pannum

// const lowmony = courses.filter((courses)=> courses.price<=2000)  //filtering la oru kuripitta amount keezha ullathu allathu mela ullathu print pannum

if(!courses){
  return<> </>
}
const coursesList = courses.map((course) => (
  <Course
    key={course.id}   //this line fixes the warning
    name={course.name}
    price={course.price}
    image={course.image}
    rating={course.rating}
    delete={handleDelete}  //delete function pass pannum
    id={course.id}  //id pass pannum
  />
));
  return (
    <>
      {coursesList}
    </>
  );
}

export default CourseList;

// npx json-server --watch data/dummy.json --port 3000 --static ./data