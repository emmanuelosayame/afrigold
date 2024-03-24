


import React, { useState, useEffect } from 'react';
import styles from './FaqForm.module.css';
import { motion } from "framer-motion";

const FaqForm = ({ faq, onAddFAQ, onCancelAddFAQ, onUpdateFAQ }) => {
  const [question, setQuestion] = useState('');  // Initialize with an empty string
  const [answer, setAnswer] = useState('');  // Initialize with an empty string
  

  useEffect(() => {
    if (faq) {
      setQuestion(faq.question);
      setAnswer(faq.answer);
    }
  }, [faq]);

  const handleAdd = () => {
    if (question && answer) {
      onAddFAQ({ question, answer });
      setQuestion('');
      setAnswer('');
    }
  };

  const handleUpdate = () => {
    if (question && answer) {
      onUpdateFAQ({ ...faq, question, answer });
      //setQuestion('');
      //setAnswer('');
    }
  };

  const handleCancel = () => {
  
    onCancelAddFAQ();
    setQuestion('');
    setAnswer('');
  };
 


  return (
    <div>
      <p className={styles["formTitle"]}>{faq ? 'Edit FAQ' : 'Create FAQ'}</p>
      <form>
      
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
        <label className={styles["form-input"]}>
          Question:
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className={styles["input-form"]}
          />
        </label>
        <br />
        <label className={styles["form-input"]}>
          Answer:
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={styles["textarea-form"]}
          />
        </label>
        <br />
        <div className={styles["form-buttons"]}>
          {faq ? (
            <button type="button" onClick={handleUpdate} className={styles["update"]}>
              Update FAQ
            </button>
          ) : (
            <button type="button" onClick={handleAdd} className={styles["add"]}>
              Add FAQ
            </button>
          )}
          <button type="button" onClick={handleCancel} className={styles["cancel"]}>
            Cancel
          </button>
        </div>

         </motion.div>
        
      </form>
    </div>
  );
};

export default FaqForm;
