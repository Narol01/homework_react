
type Student = {
    firstName: string;
    lastName: string;
    grades: number[];
  };
  
  type Props = {
    students: Student[];
  };

  function Student(props:Props){

    const calculateAverageGrade = (grades: number[]) => {
        if (grades.length === 0) return 0;
        const sum = grades.reduce((acc, grade) => acc + grade, 0);
        return sum / grades.length;
      };
    return (
        <div>
          {props.students.map((student, index) => (
            <div key={index}>
              <h2>{`${student.firstName} ${student.lastName}`}</h2>
              <p>Average Grade: {calculateAverageGrade(student.grades)}</p>
            </div>
          ))}
        </div>
      );
  }

  export default Student;