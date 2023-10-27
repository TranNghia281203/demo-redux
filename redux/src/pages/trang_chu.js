import FormAddTask from '../components/form_add_task';
import ListTasks from '../components/list_tasks';

function TrangChu(props) {
  return (
    <>
    <div className="wrapper">
      <FormAddTask />
      <ListTasks />
      </div>
    </>

  );
}

export default TrangChu;