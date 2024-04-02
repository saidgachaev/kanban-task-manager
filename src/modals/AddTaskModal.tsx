
const AddTaskModal = () => {
    return (
        <div
        >
          <div className="modal">
            <h3> Task</h3>
            <label htmlFor="task-name-input">Task Name</label>
            <div className="input-container">
              <input

                id="task-name-input"
                type="text"
                placeholder="e.g. Take coffee break"
              />
    
            </div>
    
            <label htmlFor="task-name-input">Description</label>
            <div className="description-container">
              <textarea
                id="task-description-input"
                placeholder="e.g. It's always good to take a break. This 
                15 minute break will  recharge the batteries 
                a little."
              />
            </div>
    
            <label>Subtasks</label>
            <div className="modal-columns">
        
            </div>
    
            <button
             
              className="add-column-btn btn-light"
            >
              + Add New Subtask
            </button>
    
            <div className="select-column-container">
              <label className="text-M">Current Status</label>
              <select
                className="select-status text-L"
                value={status}

              >
              
              </select>
            </div>
    
            <button
    
              className="create-btn"
            >
              Create Task
            </button>
          </div>
        </div>
      );
};

export default AddTaskModal;