import { Link } from "react-router-dom";
import phoneNumbers from '../assets/phoneNumbers';
import useContacts from "../hooks/useContacts";
export default function AllContacts() {

  const { contacts, loading, error, deleteContact } = useContacts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching contacts: {error.message}</p>;

  return (
    <>
      <div className="container-fluid mt-4">
        <h2>All Contacts</h2>
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Contact Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map(contact => (
              <tr key={contact?.id}>
                <td>{contact?.first_name}</td>
                <td>{contact?.last_name}</td>
                <td>{contact?.email}</td>
                <td>{contact?.phone_number}</td>
                <td>
                  <Link to={`/contact/${contact?.id}/edit`} className="btn btn-warning btn-sm">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
