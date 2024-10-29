import { useState } from 'react';
import { toast } from 'react-toastify';
import useContacts from "../hooks/useContacts";
import ContactFormModal from './ContactFormModal';
export default function AllContacts() {

  const { contacts, loading, error, createContact, updateContact, deleteContact } = useContacts();
  const [modalConfig, setModalConfig] = useState({
    show: false,
    title: '',
    contact: null,
    buttonText: '',
  });

  // Open the modal for editing a contact
  const handleEditClick = (contact) => {
    setModalConfig({
      show: true,
      title: 'Edit Contact Information',
      contact,
      buttonText: 'Update',
    });
  };

  // Open the modal for adding a new contact
  const handleAddClick = () => {
    setModalConfig({
      show: true,
      title: 'Add New Contact',
      contact: null,
      buttonText: 'Create',
    });
  };

  // Close the modal
  const handleCloseModal = () => {
    setModalConfig({
      ...modalConfig,
      show: false,
    });
  };

  // Handle contact deletion
  const handleDeleteClick = async (contactId) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await deleteContact(contactId);
        toast.success("Contact deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete contact:", error);
        // alert("An error occurred while trying to delete the contact.");
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error fetching contacts: {error.message}</p>;

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="text-end mb-3">
          <button className="btn btn-success" onClick={handleAddClick}>
            + Add
          </button>
        </div>
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
                  <button onClick={() => handleDeleteClick(contact.id)} className="btn btn-danger btn-sm mx-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ContactFormModal
        show={modalConfig?.show}
        title={modalConfig?.title}
        contact={modalConfig?.contact}
        buttonText={modalConfig?.buttonText}
        onClose={handleCloseModal}
        onCreate={createContact}
        onUpdate={updateContact}
      />
    </>
  )
}
