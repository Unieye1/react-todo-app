import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { DarkMode } from "./components/DarkMode";

function App() {
  const [task, setTask] = useState("");
  const [showFinished, setShowFinished] = useState(true);

  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("taskList");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    console.log("...saving", taskList);
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const handleAdd = () => {
    setTaskList([...taskList, { id: uuidv4(), task, isCompleted: false }]);
    setTask("");
    console.log(taskList);
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleEdit = (id) => {
    let t = taskList.find((item) => item.id === id);
    setTask(t.task);
    const newTaskList = taskList.filter((item) => item.id !== id);
    setTaskList(newTaskList);
    console.log(id);
  };

  const handleDelete = (id) => {
    const newTaskList = taskList.filter((item) => item.id !== id);
    setTaskList(newTaskList);
    console.log(id);
  };
  const handleCheckbox = (e) => {
    let id = e.target.id;
    let index = taskList.findIndex((task) => task.id === id);
    let newTaskList = [...taskList];
    newTaskList[index].isCompleted = !newTaskList[index].isCompleted;
    setTaskList(newTaskList);
    console.log(newTaskList);
  };
  const toggleChange = (e) => {
    setShowFinished(!showFinished);
  };

  return (
    <>
      <div className=" bg-white dark:bg-gray-900 min-h-screen">
        <Navbar />
        <div className=" bg-violet-300 dark:bg-violet-950 dark:text-white  sm:w-1/2 w-[90%] rounded-md sm:p-4 p-8 m-8 mx-auto">
          <div className="todo text-xl font-bold text-center p-4">
            TO DO List
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAdd();
            }}
          >
            <input
              onChange={handleChange}
              value={task}
              type="text"
              placeholder="Add a new task..."
              className="border w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none "
            />
            <div className="addTask">
              <button
                type="submit"
                disabled={task.length === 0}
                className="bg-red-400 dark:bg-violet-700 cursor-pointer hover:bg-red-500 dark:hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-md my-3"
              >
                Add Task
              </button>
            </div>
          </form>
          <label className="flex items-center gap-2 bg-violet-400 dark:bg-violet-700 text-white font-bold py-2 px-4 rounded-md my-3 w-fit cursor-pointer">
            <input
              type="checkbox"
              checked={showFinished}
              onChange={toggleChange}
            />

            <span>Show Finished</span>
          </label>
          <div className="flex flex-col taskList gap-4 ">
            {taskList.map((item) => {
              return (
                (showFinished || !item.isCompleted) && (
                  <div
                    key={item.id}
                    className="flex task1 justify-between bg-violet-200 dark:bg-violet-900 rounded-md w-full "
                  >
                    <div className="text flex gap-2 mx-3 my-3">
                      <input
                        onChange={handleCheckbox}
                        type="checkbox"
                        value={item.isCompleted}
                        id={item.id}
                      />
                      <span
                        className={`text-xl flex items-center ${item.isCompleted ? "line-through" : ""}`}
                      >
                        {item.task}
                      </span>
                    </div>
                    <div className="flex btn gap-2 mx-3 h-full ">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="bg-red-400 dark:bg-violet-700 cursor-pointer hover:bg-red-500 dark:hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-md my-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        id={item.id}
                        className="bg-red-400 dark:bg-violet-700 cursor-pointer hover:bg-red-500 dark:hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-md my-3"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
