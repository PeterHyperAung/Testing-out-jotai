import Form from "./components/Form";
import Header from "./components/Header";
import FilterableTodo from "./components/FilterableTodo";
import EditModal from "./components/EditModal";

export default function App() {
  return (
    <>
      <Header />
      <Form />
      <FilterableTodo />
      <EditModal />
    </>
  );
}
