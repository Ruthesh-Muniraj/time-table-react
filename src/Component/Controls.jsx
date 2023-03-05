import { Button, Divider, List, Switch } from "antd";
import {
  UndoOutlined,
  DownloadOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { courses } from "../constant/data";

import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Controls = ({
  semesters,
  selectedSemester,
  setSelectedSemester,
  handleAddOrEdit,
  isOdd,
  setIsOdd,
}) => {
  const clear = () => {
    setSelectedSemester([]);
  };

  function printDocument() {
    const input = document.getElementById("preview");
    const width = input.clientWidth;
    const height = input.clientHeight;

    html2canvas(input, {
      width: width,
      height: height,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 6, 40, width/7, height/7);
      // pdf.output('dataurlnewwindow');
      pdf.save("timetable.pdf");
    });
  }

  return (
    <div id="controls">
      <Divider orientation="left">Select Semester</Divider>
      <div id="school-tabs" className="buttons">
        <Switch
          size="default"
          checked={isOdd}
          checkedChildren="Odd"
          unCheckedChildren="Eve"
          onChange={() => {
            setIsOdd(!isOdd);
            setSelectedSemester([]);
          }}
        />
        &nbsp;
        <Button
          type="primary"
          size="large"
          ghost
          icon={<UserAddOutlined />}
          onClick={handleAddOrEdit}
        >
          Add / Edit Staff
        </Button>
        <br />
        {semesters &&
          semesters.map((semester) => {
            const sem = semester[0].split("SEM").slice(1).join("");
            if (isOdd && sem % 2 !== 0) {
              return (
                <Button
                  type={"primary"}
                  shape="round"
                  ghost={selectedSemester === semester ? false : true}
                  onClick={() => setSelectedSemester(semester)}
                  key={semester[0]}
                >
                  {semester[0]}
                </Button>
              );
            } else if (!isOdd && sem % 2 === 0) {
              return (
                <Button
                  type={"primary"}
                  shape="round"
                  ghost={selectedSemester === semester ? false : true}
                  onClick={() => setSelectedSemester(semester)}
                  key={semester[0]}
                >
                  {semester[0]}
                </Button>
              );
            }
            return null;
          })}
      </div>
      <div id="school-list" className="school">
        <Divider orientation="left">Subjects</Divider>
        <List
          pagination={{ defaultPageSize: 6 }}
          size="small"
          bordered
          dataSource={selectedSemester[1]?.courses}
          renderItem={(course) => <List.Item>{courses[course].name}</List.Item>}
        />
      </div>
      <br />
      <br />
      <div className="buttons">
        <Button
          type={"default"}
          danger
          id="reset"
          onClick={clear}
          icon={<UndoOutlined />}
        >
          Reset
        </Button>
        <Button
          className="ant-btn-success"
          id="pdf"
          onClick={printDocument}
          icon={<DownloadOutlined />}
        >
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default Controls;
