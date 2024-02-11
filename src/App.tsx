import Start from "./components/Start";
import File from "./components/File"
import Imagen from "./components/Imagen";
import Student from "./components/Student";

const studentsData = [
  {
    firstName: 'John',
    lastName: 'Doe',
    grades: [85, 90, 92],
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    grades: [80, 88, 87],
  },
  {
    firstName: 'Alex',
    lastName: 'Johnson',
    grades: [95, 91, 89],
  },
  {
    firstName: 'Emily',
    lastName: 'Brown',
    grades: [75, 82, 79],
  },
  {
    firstName: 'Michael',
    lastName: 'Davis',
    grades: [88, 90, 92],
  }];

function App() {
  return (
    <div>
  ok
  <p></p>
  <Start title={"start"}/>
  <File title={"header"}/>
  <Imagen title={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZbEC70qcrjs94w2ez4krvv761x_6uIxZPw&usqp=CAU"} />
  <Student students={studentsData}/>
  </div>
  );
}

export default App;
