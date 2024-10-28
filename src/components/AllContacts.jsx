import { useState } from 'react';
import useContacts from "../hooks/useContacts";
export default function AllContacts() {

  const { contacts, loading, error } = useContacts();
  const [currentContact, setCurrentContact] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
  });

  // Open the modal and set the contact to edit
  const handleEditClick = (contact) => {
    setCurrentContact(contact);
    const modal = new window.bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
  };

  // Handle form submission (for now, just log values)
  const handleUpdate = () => {
    console.log('Updated Contact:', currentContact);
    // Close the modal after updating
    const modal = window.bootstrap.Modal.getInstance(document.getElementById('editModal'));
    modal.hide();
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentContact({ ...currentContact, [name]: value });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching contacts: {error.message}</p>;

  return (
    <>
      <div className="container-fluid mt-4">
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
                  <button onClick={() => handleEditClick(contact)} className="btn btn-warning btn-sm">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Edit contact information</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="first_name" className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    value={currentContact?.first_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="last_name" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    value={currentContact?.last_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={currentContact?.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone_number" className="form-label">Contact Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone_number"
                    name="phone_number"
                    value={currentContact?.phone_number}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
