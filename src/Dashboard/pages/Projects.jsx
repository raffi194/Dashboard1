import React, { useState } from 'react';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState([{ id: 1, image: '', name: 'Project 1' }]);
  const [newProject, setNewProject] = useState({ image: '', name: '' });
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleAddProject = () => {
    setProjects([...projects, { id: projects.length + 1, ...newProject }]);
    setNewProject({ image: '', name: '' });
    setShowModal(false);
    setNotification({ message: 'Project added successfully!', type: 'add' });

    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
    setNotification({ message: 'Project deleted successfully!', type: 'delete' });

    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <button onClick={() => setShowModal(true)} className="bg-[--ijo] text-[--putih] p-2 rounded">Add Project</button>
      </div>

      {notification.message && (
        <div className={`mb-4 p-2 text-[--putih] text-center rounded transition-all duration-300 
          ${notification.type === 'add' ? 'bg-[--ijo]' : 'bg-[--merah]'}`}>
          {notification.message}
        </div>
      )}

      <table className="w-full border-collapse border border-[--hitam]">
        <thead>
          <tr className="bg-[--hitamkurang]">
            <th className="border border-[--hitam] p-2">No</th>
            <th className="border border-[--hitam] p-2">Gambar</th>
            <th className="border border-[--hitam] p-2">Nama Project</th>
            <th className="border border-[--hitam] p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="border border-[--hitam] p-2">{project.id}</td>
              <td className="border border-[--hitam] p-2">
                {project.image ? <img src={project.image} alt={project.name} className="w-16 h-16 object-cover" /> : '-'}
              </td>
              <td className="border border-[--hitam] p-2">{project.name}</td>
              <td className="border border-[--hitam] p-2">
                <button onClick={() => handleDeleteProject(project.id)} className="bg-[--merah] text-[--putih] p-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-[--putih] p-6 rounded shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">Add Project</h2>
            <label className="block mb-2">Gambar:</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded mb-4" 
              placeholder="Enter image URL" 
              value={newProject.image} 
              onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
            />
            <label className="block mb-2">Nama Project:</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded mb-4" 
              placeholder="Enter project name" 
              value={newProject.name} 
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            />
            <div className="flex justify-end">
              <button onClick={() => setShowModal(false)} className="bg-gray-400 text-[--putih] p-2 rounded mr-2">Cancel</button>
              <button onClick={handleAddProject} className="bg-[--ijo] text-[--putih] p-2 rounded">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
