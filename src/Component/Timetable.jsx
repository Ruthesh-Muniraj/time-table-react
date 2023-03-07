import { Divider, List } from "antd";
import React from "react";
import { colors, courses } from "../constant/data";
import { AppContext } from "../App";

const Timetable = ({ selectedSemester }) => {
  const appContext = React.useContext(AppContext);
  const subjects = {};
  const staff = [];
  
  
  selectedSemester.length &&
  selectedSemester[1].courses.map((course) => {
      let index ;
      appContext.contextValue.map((staff, idx) => {
        const ind = staff.subject.map((p) => p === course);
        if (ind.includes(true)) {
          index = idx;
        }
        return null;
      }
      );
      if (index !== undefined)
      {
        staff.push({
          name: appContext.contextValue[index].name,
          subject: courses[course].name,
        });
      } else {
        staff.push({
          name: 'Not Assigned',
          subject: courses[course].name,
        });
      }
      return null;
    });

  selectedSemester.length &&
    selectedSemester[1].courses.map((course) => {
      switch (courses[course].slot) {
        case "A":
          subjects.A = courses[course].nick;
          break;
        case "B":
          subjects.B = courses[course].nick;
          break;
        case "C":
          subjects.C = courses[course].nick;
          break;
        case "D":
          subjects.D = courses[course].nick;
          break;
        case "E":
          subjects.E = courses[course].nick;
          break;
        case "F":
          subjects.F = courses[course].nick;
          break;
        case "G":
          subjects.G = courses[course].nick;
          break;
        case "H":
          subjects.H = courses[course].nick;
          break;
        case "I":
          subjects.I = courses[course].nick;
          break;
        default:
          console.log("Invalid course");
      }
      return null;
    });

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
              <td
                style={{ background: subjects["A"] ? colors["A"] : "#ffffff" }}
              >
                {subjects["A"] || "A"}
              </td>
              <td
                style={{ background: subjects["B"] ? colors["B"] : "#ffffff" }}
              >
                {subjects["B"] || "B"}
              </td>
              <td
                style={{ background: subjects["C"] ? colors["C"] : "#ffffff" }}
              >
                {subjects["C"] || "C"}
              </td>
              <td
                style={{ background: subjects["D"] ? colors["D"] : "#ffffff" }}
              >
                {subjects["D"] || "D"}
              </td>
              <td
                className="lunch"
                rowSpan={5}
                style={{ border: 0, transform: "rotate(270deg)" }}
              >
                Lunch Break
              </td>
              <td
                style={{ background: subjects["G"] ? colors["G"] : "#ffffff" }}
              >
                {subjects["G"] || "G"}
              </td>
              <td
                style={{ background: subjects["H"] ? colors["H"] : "#ffffff" }}
              >
                {subjects["H"] || "H"}
              </td>
              <td
                style={{ background: subjects["I"] ? colors["I"] : "#ffffff" }}
              >
                {subjects["I"] || "I"}
              </td>
              <td
                style={{ background: subjects["E"] ? colors["E"] : "#ffffff" }}
              >
                {subjects["E"] || "E"}
              </td>
            </tr>

            <tr>
              <th scope="row">Tuesday</th>
              <td
                style={{ background: subjects["F"] ? colors["F"] : "#ffffff" }}
              >
                {subjects["F"] || "F"}
              </td>
              <td
                style={{ background: subjects["A"] ? colors["A"] : "#ffffff" }}
              >
                {subjects["A"] || "A"}
              </td>
              <td
                style={{ background: subjects["B"] ? colors["B"] : "#ffffff" }}
              >
                {subjects["B"] || "B"}
              </td>
              <td
                style={{ background: subjects["C"] ? colors["C"] : "#ffffff" }}
              >
                {subjects["C"] || "C"}
              </td>
              <td
                style={{ background: subjects["D"] ? colors["D"] : "#ffffff" }}
              >
                {subjects["D"] || "D"}
              </td>
              <td
                style={{ background: subjects["I"] ? colors["I"] : "#ffffff" }}
              >
                {subjects["I"] || "I"}
              </td>
              <td
                style={{ background: subjects["G"] ? colors["G"] : "#ffffff" }}
              >
                {subjects["G"] || "G"}
              </td>
              <td
                style={{ background: subjects["H"] ? colors["H"] : "#ffffff" }}
              >
                {subjects["H"] || "H"}
              </td>
            </tr>

            <tr>
              <th scope="row">Wednesday</th>
              <td
                style={{ background: subjects["E"] ? colors["E"] : "#ffffff" }}
              >
                {subjects["E"] || "E"}
              </td>
              <td
                style={{ background: subjects["F"] ? colors["F"] : "#ffffff" }}
              >
                {subjects["F"] || "F"}
              </td>
              <td
                style={{ background: subjects["A"] ? colors["A"] : "#ffffff" }}
              >
                {subjects["A"] || "A"}
              </td>
              <td
                style={{ background: subjects["B"] ? colors["B"] : "#ffffff" }}
              >
                {subjects["B"] || "B"}
              </td>
              <td
                style={{ background: subjects["C"] ? colors["C"] : "#ffffff" }}
              >
                {subjects["C"] || "C"}
              </td>
              <td
                style={{ background: subjects["D"] ? colors["D"] : "#ffffff" }}
              >
                {subjects["D"] || "D"}
              </td>
              <td
                style={{ background: subjects["G"] ? colors["G"] : "#ffffff" }}
              >
                {subjects["G"] || "G"}
              </td>
              <td
                style={{ background: subjects["H"] ? colors["H"] : "#ffffff" }}
              >
                {subjects["H"] || "H"}
              </td>
            </tr>

            <tr>
              <th scope="row">Thursday</th>
              <td
                style={{ background: subjects["D"] ? colors["D"] : "#ffffff" }}
              >
                {subjects["D"] || "D"}
              </td>
              <td
                style={{ background: subjects["E"] ? colors["E"] : "#ffffff" }}
              >
                {subjects["E"] || "E"}
              </td>
              <td
                style={{ background: subjects["F"] ? colors["F"] : "#ffffff" }}
              >
                {subjects["F"] || "F"}
              </td>
              <td
                style={{ background: subjects["A"] ? colors["A"] : "#ffffff" }}
              >
                {subjects["A"] || "A"}
              </td>
              <td
                style={{ background: subjects["B"] ? colors["B"] : "#ffffff" }}
              >
                {subjects["B"] || "B"}
              </td>
              <td
                style={{ background: subjects["C"] ? colors["C"] : "#ffffff" }}
              >
                {subjects["C"] || "C"}
              </td>
              <td
                style={{ background: subjects["D"] ? colors["D"] : "#ffffff" }}
              >
                {subjects["D"] || "D"}
              </td>
              <td
                style={{ background: subjects["I"] ? colors["I"] : "#ffffff" }}
              >
                {subjects["I"] || "I"}
              </td>
            </tr>

            <tr>
              <th scope="row">Friday</th>
              <td
                style={{ background: subjects["C"] ? colors["C"] : "#ffffff" }}
              >
                {subjects["C"] || "C"}
              </td>
              <td
                style={{ background: subjects["D"] ? colors["D"] : "#ffffff" }}
              >
                {subjects["D"] || "D"}
              </td>
              <td
                style={{ background: subjects["E"] ? colors["E"] : "#ffffff" }}
              >
                {subjects["E"] || "E"}
              </td>
              <td
                style={{ background: subjects["F"] ? colors["F"] : "#ffffff" }}
              >
                {subjects["F"] || "F"}
              </td>
              <td
                style={{ background: subjects["I"] ? colors["I"] : "#ffffff" }}
              >
                {subjects["I"] || "I"}
              </td>
              <td
                style={{ background: subjects["H"] ? colors["H"] : "#ffffff" }}
              >
                {subjects["H"] || "H"}
              </td>
              <td
                style={{ background: subjects["G"] ? colors["G"] : "#ffffff" }}
              >
                {subjects["G"] || "G"}
              </td>
              <td
                style={{ background: subjects["A"] ? colors["A"] : "#ffffff" }}
              >
                {subjects["A"] || "A"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br/>
      {selectedSemester.length ? (
        <div>
          <List
            size="small"
            bordered
            header={<h3>Table Legand</h3>}
            dataSource={staff}
            renderItem={(item) => (
              <List.Item>
                <span style={{ fontWeight: 500 }}>{item.name}:</span>{" "}
                {item.subject}
              </List.Item>
            )}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Timetable;
