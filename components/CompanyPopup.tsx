import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Props = {
    onClose: () => void;
    onSave: (company: string) => void;
}

function CompanyPopup({ onClose, onSave }: Props) {
    const [company, setCompany] = useState('');

    useEffect(() => {
        // Prevent scrolling when popup is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (company.trim()) {
            onSave(company.trim());
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-amber-100 bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-amber-50 border border-amber-300 p-8 rounded-lg shadow-lg max-w-md w-full mx-4 flex flex-col items-center"
            >
                <h2 className="text-2xl font-bold text-emerald-800 mb-4 text-center">Welcome to My Portfolio</h2>
                <p className="text-stone-500 mb-6 text-center">Please enter your company name to personalize your experience.</p>
                
                <form onSubmit={handleSubmit} className="w-full">
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Enter company name"
                        className="w-full px-4 py-2 bg-amber-100 text-stone-500 rounded-md border border-amber-300 focus:outline-none focus:border-amber-600"
                        required
                    />
                    
                    <div className="mt-6 flex justify-center space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-stone-500 hover:text-emerald-800 transition-colors"
                        >
                            Skip
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-emerald-800 text-stone-900 rounded-md hover:bg-amber-300 transition-colors"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}

export default CompanyPopup; 