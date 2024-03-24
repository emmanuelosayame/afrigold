import React, { useState, useEffect } from 'react';
import styles from './FaqTable.module.css';
import FaqForm from '../FaqForm';
// import { getBusinessInfo } from '../../utils/api/api';

const FaqTable = ({ faqs, onDeleteFAQ, onEditFAQ }) => {
  const [editingFaq, setEditingFaq] = useState(null);
  const [companyName, setCompanyName] = useState('');

  useEffect(() => {
    // Fetch business info when the component mounts
    const fetchBusinessInfo = async () => {
      try {
        const businessInfo = await getBusinessInfo();
        setCompanyName(businessInfo.name);
      } catch (error) {
        console.error('Error fetching business info:', error.message);
      }
    };

    fetchBusinessInfo();
  }, []); // Empty dependency array ensures the effect runs once on mount

  const handleEdit = (faq) => {
    setEditingFaq(faq);
  };

  const handleCancelEdit = () => {
    setEditingFaq(null);
  };

  return (
    <div className={styles['tableContainer']}>
      {/* Display the company name */}
      <h2 className={styles['tableTitle']}>{companyName} FAQs</h2>

      <div className={styles['tableWrapper']}>
        <table className={styles['table']}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Question</th>
              <th>Answer</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {faqs.map((faq, index) => (
              <tr key={faq.id}>
                <td>{index + 1}</td>
                <td>{faq.question}</td>
                <td>{faq.answer}</td>
                <td>Published</td>
                <td>
                  <div className='flex'>
                    <button
                      className={styles['button-1']}
                      onClick={() => onDeleteFAQ(faq.id)}>
                      Delete
                    </button>
                    <button
                      className={styles['button-2']}
                      onClick={() => handleEdit(faq)}>
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingFaq && (
        <FaqForm
          faq={editingFaq}
          onCancelAddFAQ={handleCancelEdit}
          onUpdateFAQ={(updatedFaq) => {
            onEditFAQ(updatedFaq);
            handleCancelEdit();
          }}
        />
      )}
    </div>
  );
};

export default FaqTable;
