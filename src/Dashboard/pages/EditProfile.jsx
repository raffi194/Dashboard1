import React, { useState } from 'react';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    gpa: '',
    project: '',
    experience: '',
    information: ''
  });
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi: Pastikan tidak ada input yang kosong
    if (!formData.gpa || !formData.project || !formData.experience || !formData.information) {
      setNotification({ message: 'Please fill in all fields first!', type: 'error' });
      setTimeout(() => setNotification({ message: '', type: '' }), 3000);
      return;
    }

    // Jika semua data terisi, simpan perubahan
    setNotification({ message: 'Profile updated successfully!', type: 'success' });
    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
      
      {notification.message && (
        <div className={`mb-4 p-2 text-[--putih] text-center rounded transition-all duration-300
          ${notification.type === 'success' ? 'bg-[--ijo]' : 'bg-[--merah]'}`}>
          {notification.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label className="block mb-2">GPA:</label>
        <input type="number" name="gpa" value={formData.gpa} onChange={handleChange} className="w-full p-2 border rounded mb-4" placeholder="Enter your GPA" />
        
        <label className="block mb-2">Project:</label>
        <input type="text" name="project" value={formData.project} onChange={handleChange} className="w-full p-2 border rounded mb-4" placeholder="Describe your projects" />
        
        <label className="block mb-2">Experience:</label>
        <input type="text" name="experience" value={formData.experience} onChange={handleChange} className="w-full p-2 border rounded mb-4" placeholder="Enter your experience" />
        
        <label className="block mb-2">Information:</label>
        <textarea name="information" value={formData.information} onChange={handleChange} className="w-full p-2 border rounded mb-4" placeholder="Additional information"></textarea>
        
        <button type="submit" className="bg-[--ijo] text-[--putih] p-2 rounded">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
