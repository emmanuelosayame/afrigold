// in your FAQPage.js
import { useState, useEffect } from 'react';
// import FaqList from "/admin/ui-components/FaqList";
import FaqForm from '/admin/ui-components/FaqForm';
import FaqTable from '/admin/ui-components/FaqTable';
import styles from './Faqpage.module.css';
import dynamic from 'next/dynamic';
//  import { useFAQStore } from '../../../store/store'

const FAQPage = () => {
  console.log(' useFAQStore:', useFAQStore);
  const { faqs, addFAQ, deleteFAQ, editFAQ } = useFAQStore((state) => state);

  useEffect;

  const [searchTerm, setSearchTerm] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const onCancelAddFAQ = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      <div className={styles['faq-container']}>
        <div className={styles['faq-header']}>
          <input
            type='text'
            placeholder='Search FAQs'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles['input-faq']}
          />
          <button
            type='button'
            onClick={handleToggleForm}
            className={styles['button-faq']}>
            Create FAQ
          </button>
        </div>
        {isFormVisible && (
          <FaqForm onAddFAQ={addFAQ} onCancelAddFAQ={onCancelAddFAQ} />
        )}
        <div className={styles['faq-body']}>
          <FaqTable
            faqs={filteredFAQs}
            onDeleteFAQ={deleteFAQ}
            onEditFAQ={editFAQ}
          />
        </div>
      </div>
    </>
  );
};

// export default FAQPage;

export default dynamic(() => Promise.resolve(FAQPage), { ssr: false });
