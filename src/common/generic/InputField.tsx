import React, { FC } from 'react';

interface InputFieldProps {
    label?: string; // Optional label for the input
    value: string; // Controlled value of the input
    onChange: (value: string) => void; // Callback for input changes
    placeholder?: string; // Optional placeholder text
    type?: string; // Input type, e.g., 'text', 'password', etc.
    className?: string; // Optional additional CSS classes
    error?: string; // Error message for validation
    onBlur?: () => void; // Optional callback for blur event
}

const InputField: FC<InputFieldProps> = ({
                                             label,
                                             value,
                                             onChange,
                                             placeholder = '',
                                             type = 'text',
                                             className = '',
                                             error = '',
                                             onBlur,
                                         }) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            />
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default InputField;
