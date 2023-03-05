import React from "react";
import { semestersData } from "./constant/data";
import "antd/dist/reset.css";
import Header from "./Component/Header";
import AddorEdit from "./Component/AddorEdit";
import Controls from "./Component/Controls";
import Timetable from "./Component/Timetable";

function App() {
  const [semesters, setSemesters] = React.useState([]);
  const [selectedSemester, setSelectedSemester] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isOdd, setIsOdd] = React.useState(true);

  React.useEffect(() => {
    const entries = Object.entries(semestersData);
    setSemesters(entries);
  }, []);

  const handleAddOrEdit = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("handeling");
  };

  return (
    <div className="App">
      <Header />
      <div id="wrapper">
        <Controls
          isOdd={isOdd}
          setIsOdd={setIsOdd}
          semesters={semesters}
          selectedSemester={selectedSemester}
          setSelectedSemester={setSelectedSemester}
          handleAddOrEdit={handleAddOrEdit}
        />
        <Timetable selectedSemester={selectedSemester} />
      </div>
      <AddorEdit
        isOpen={isModalOpen}
        isOdd={isOdd}
        semesters={semesters}
        setIsOpen={setIsModalOpen}
        handleOk={handleOk}
      />
    </div>
  );
}

export default App;
