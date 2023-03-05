import { Divider } from 'antd';
import React from 'react'

const Timetable = ({ selectedSemester }) => {
  return (
    <div id="preview">
      <Divider orientation="center">
        {selectedSemester.length
          ? `Generated Timetable for ${selectedSemester[0]}`
          : "Timetable Structure"}
      </Divider>
      <div id="tab">
        <table>
          <thead>
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
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
      <h2 id="h2leg" className="hidden">
        Legend
      </h2>
      <ul id="legend"></ul>
    </div>
  );
};

export default Timetable