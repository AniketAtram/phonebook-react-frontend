import NotFound from "./components/NotFound";
import AllContacts from "./components/AllContacts";
import EditContact from "./components/EditContact";
import AddNewContact from "./components/AddNewContact";

const routes = [
  {
    path:"/", 
    element: <AllContacts/>,
  },
  {
    path:"/contact/create", 
    element: <AddNewContact/>,
  },
  {
    path:"/contact/:id/edit", 
    element: <EditContact/>,
  },
  {
    path:"*", 
    element: <NotFound/>,
  },
]

export default routes;