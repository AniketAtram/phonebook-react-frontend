import NotFound from "./components/NotFound";
import AllContacts from "./components/AllContacts";
import EditContact from "./components/EditContact";

const routes = [
  {
    path: "/",
    element: <AllContacts />,
  },
  {
    path: "/contact/:id/edit",
    element: <EditContact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export default routes;