import { Button, Col, Divider, List, Row } from "antd";
import React from "react";
import { UndoOutlined } from "@ant-design/icons";
import { bluePrint, colors, courses } from "../constant/data";
import { AppContext } from "../App";

const Timetable = ({ selectedSemester }) => {
  const appContext = React.useContext(AppContext);
  const subjects = {};
  const staff = [];
  
  const [selectedBluePrint, setSelectedBluePrint] = React.useState(bluePrint[0]);

  const resetBluePrint = () => {
    const random = Math.floor(Math.random() * bluePrint.length);
    setSelectedBluePrint(bluePrint[random]);
  }
  React.useEffect(() => {
    resetBluePrint();
  }, [])
  
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

  const day = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
  ]

  const TableCoulmn = ({ col, ind }) => {
    if(col === 'lunch') {
      return (
        <td
          className="lunch"
          rowSpan={5}
          style={{ border: 0, transform: "rotate(270deg)" }}
        >
          Lunch Break
        </td>
      );
    } else {
      return (
        <td
          key={ind}
          style={{ background: subjects[col] ? colors[col] : "#ffffff" }}
        >
          {subjects[col] || col}
        </td>
      );
    }
  };

  return (
    <div id="preview">
      <Divider orientation="center">
        {selectedSemester.length
          ? `Generated Timetable for ${selectedSemester[0]}`
          : "Timetable Structure"}
      </Divider>
      <Row>
        <Col offset={22}>
          <Button
            type="primary"
            ghost
            icon={<UndoOutlined />}
            size="middle"
            onClick={resetBluePrint}
          >
            Refresh
          </Button>
        </Col>
      </Row>
      <br />
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
            {selectedBluePrint.map((row, index) => (
              <tr key={index}>
                <th scope="row">{day[index]}</th>
                {row.map((col, ind) => (
                  <TableCoulmn col={col} ind={ind} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
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
