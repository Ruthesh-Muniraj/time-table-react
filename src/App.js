import React from "react";
import { courses, schools } from "./constant/data";
function App() {
  const [semesters, setSemesters] = React.useState([]);
  const [selectedSemester, setSelectedSemester] = React.useState([]);

  const clear = () => {
    setSelectedSemester([]);
  }
  React.useEffect(() => {
    const entries = Object.entries(schools);
    setSemesters(entries)
  }, []);

  return (
    <div className="App">
      <h1>Sri Ramakrishna Institute of Technology</h1>
      <h2>Time Table Generatore</h2>
      <div id="wrapper">
        <div id="controls">
          <h2>Select Semester</h2>
          <div id="school-tabs" className="buttons">
            {semesters &&
              semesters.map((semester) => {
                return (
                  <button
                    onClick={() => setSelectedSemester(semester)}
                    key={semester[0]}
                  >
                    {semester[0]}
                  </button>
                );
              })}
          </div>
          <div id="school-list" className="school">
            <h2>Subjects</h2>
            <ul>
              {selectedSemester.length
                ? selectedSemester[1]?.courses?.map((course) => {
                    return (
                      <li key={course} className="course">
                        {courses[course].name}
                      </li>
                    );
                  })
                : "Select any semester to see subjects"}
            </ul>
          </div>

          <div className="buttons">
            <div>
              <input type="checkbox" id="color" checked />
              <label for="color">Add Colors?</label>
              <br />
            </div>
            {/* <button type="button" id="gen-code">
              Generate with Codes
            </button>
            <button type="button" id="gen-nick">
              Generate with Nicknames
            </button> */}
            <button id="reset" onClick={clear}>
              Reset
            </button>
            <button type="button" id="pdf">
              Download PDF
            </button>
          </div>
        </div>
        <div id="preview">
          <h2>Generated Timetable</h2>
          <div id="tab">
            <table>
              <tr>
                <th scope="col">Day</th>
                <th scope="col">08:30</th>
                <th scope="col">09:30</th>
                <th scope="col">10:30</th>
                <th scope="col">11:30</th>
                <th scope="col">12:30</th>
                <th scope="col">13:30</th>
                <th scope="col">14:30</th>
                <th scope="col">15:30</th>
                <th scope="col">16:30</th>
              </tr>

              <tr>
                <th scope="row">Monday</th>
                <td className="A">A</td>
                <td className="B">B</td>
                <td className="C">C</td>
                <td className="D">D</td>
                <td className="lunch">Lunch Break</td>
                <td className="G">G</td>
                <td className="H">H</td>
                <td className="I">I</td>
                <td className="E">E</td>
              </tr>

              <tr>
                <th scope="row">Tuesday</th>
                <td className="F">F</td>
                <td className="A">A</td>
                <td className="B">B</td>
                <td className="C">C</td>
                <td className="lunch">Lunch Break</td>
                <td className="D">D</td>
                <td className="I">I</td>
                <td className="G">G</td>
                <td className="H">H</td>
              </tr>

              <tr>
                <th scope="row">Wednesday</th>
                <td className="E">E</td>
                <td className="F">F</td>
                <td className="A">A</td>
                <td className="B">B</td>
                <td className="lunch">Lunch Break</td>
                <td className="C">C</td>
                <td className="D">D</td>
                <td className="G">G</td>
                <td className="H">H</td>
              </tr>

              <tr>
                <th scope="row">Thursday</th>
                <td className="D">D</td>
                <td className="E">E</td>
                <td className="F">F</td>
                <td className="A">A</td>
                <td className="lunch">Lunch Break</td>
                <td className="B">B</td>
                <td className="C">C</td>
                <td className="D">D</td>
                <td className="I">I</td>
              </tr>

              <tr>
                <th scope="row">Friday</th>
                <td className="C">C</td>
                <td className="D">D</td>
                <td className="E">E</td>
                <td className="F">F</td>
                <td className="lunch">Lunch Break</td>
                <td className="I">I</td>
                <td className="H">H</td>
                <td className="G">G</td>
                <td className="A">A</td>
              </tr>
            </table>
          </div>
          <h2 id="h2leg" className="hidden">
            Legend
          </h2>
          <ul id="legend"></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
