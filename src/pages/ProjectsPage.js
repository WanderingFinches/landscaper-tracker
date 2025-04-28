import React, { useState } from 'react';

function ProjectsPage() {
    const [projects, setProjects] = useState([
        { id: 1, name: 'Backyard Cleanup', hourlyRate: 50, flateRate: 400 },
        { id: 2, name: 'Garden Installation', hourlyRate: 60, flateRate: 800 },
    ]);

    const [newName, setNewName] = useState('');
    const [newHourlyRate, setNewHourlyRate] = useState('');
    const [newFlatRate, setNewFlatRate] = useState('');

    const handleAddProject = (e) => {
        e.preventDefault(); // Stops page refresh
    

        const newProject = {
            id: projects.length + 1,
            name: newName,
            hourlyRate: Number(newHourlyRate),
            flatRate: Number(newFlatRate),
        };

        setProjects([...projects, newProject]);

        // Clear the form after adding
        setNewName('');
        setNewHourlyRate('');
        setNewFlatRate('');
    };

    return (
        <div>
            <h2>Projects</h2>
            <form onSubmit={handleAddProject}>
                <input
                    type="text"
                    placeholder="Project Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Hourly Rate"
                    value={newHourlyRate}
                    onChange={(e) => setNewHourlyRate(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Flat Rate"
                    value={newFlatRate}
                    onChange={(e) => setNewFlatRate(e.target.value)}
                />

                <button type="submit">Add Project</button>
            </form>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        {project.name} — ${project.hourlyRate}/hr or ${project.flatRate} flat 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectsPage;