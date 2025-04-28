import React, { useState } from 'react';

function ProjectsPage() {
    const [projects, setProjects] = useState([
        { id: 1, name: 'Backyard Cleanup', hourlyRate: 50, flateRate: 400 },
        { id: 2, name: 'Garden Installation', hourlyRate: 60, flateRate: 800 },
    ]);

    return (
        <div>
            <h2>Projects</h2>
            <form>
                <input
                    type="text"
                    placeholder="Project Name"
                />
                <input
                    type="number"
                    placeholder="Hourly Rate"
                />
                <input
                    type="number"
                    placeholder="Flat Rate"
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