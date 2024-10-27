import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common['Accept'] = 'application/json';

const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all contacts
  const fetchContacts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/v1/users');
      setContacts(response?.data?.users);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  // Create a new contact
  const createContact = async (newContact) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/v1/users', newContact);
      setContacts([...contacts, response?.data?.users]);
      setError(null); // Clear any previous errors
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update an existing contact
  const updateContact = async (id, updatedContact) => {
    setLoading(true);
    try {
      const response = await axios.put(`/api/v1/users/${id}`, updatedContact);
      setContacts(contacts.map(contact => (contact.id === id ? response?.data?.users : contact)));
      setError(null); // Clear any previous errors
      return response.data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete a contact
  const deleteContact = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/v1/users/${id}`);
      setContacts(contacts.filter(contact => contact.id !== id));
      setError(null); // Clear any previous errors
      return true;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    contacts,
    loading,
    error,
    fetchContacts,
    createContact,
    updateContact,
    deleteContact,
  };
};

export default useContacts;
