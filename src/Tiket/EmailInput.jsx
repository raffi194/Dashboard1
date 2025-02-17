import React from 'react';

const EmailInput = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

/**
 * Handles the blur event on the input field.
 * If the input value is empty, it sets the isFocused state to false.
 */

  const handleBlur = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };

  return (
    <div className="relative mt-5 w-full max-w-xs">
      <input
        type="email"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`peer w-full border-b-2 bg-transparent py-2 text-lg text-[--putih] placeholder-transparent focus:outline-none focus:border-[--ijo] transition duration-300 ease-in-out ${
          isFocused ? 'border-[--ijo]' : 'border-[--hitam]'
        }`}
        placeholder=" "
        required
      />
      <label className={`absolute left-0 top-2 text-[--hitam] transition-all duration-300 ease-in-out transform ${isFocused || value ? 'scale-75 -translate-y-4 text-[--putih]' : ''}`}>
        Email Address
      </label>
      <div className={`absolute left-0 bottom-0 h-1 w-full bg-[--ijo] transform scale-x-0 transition-transform duration-300 ease-in-out ${isFocused ? 'scale-x-100' : ''}`}></div>
    </div>
  );
};

export default EmailInput;