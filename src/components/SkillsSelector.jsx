import { useState } from "react";

export default function SkillsSelector({ initialSkills, onSave }) {
  
  const [skills, setSkills] = useState(initialSkills ? initialSkills.split("\n") : []);
  
  const removeSkill = (skill) => {
    setSkills(skills.filter(s => s !== skill));
  };
  
  const handleSave = () => {
    const result = skills.join("\n"); // Ahora no es necesario envolver con ``
    onSave(result); // Llamamos a onSave y pasamos los skills
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <div className="p-4 max-w-md w-full h-[500px] overflow-auto bg-white shadow-md rounded-lg">
        <ul>
            {skills.map((skill) => (
            <li key={skill} className="flex justify-between items-center p-2 border-b">
                <span>{skill}</span>
                <button onClick={() => removeSkill(skill)} className="text-red-500">✖</button>
            </li>
            ))}
        </ul>
        <button onClick={handleSave} className="mt-4 w-full bg-blue-500 text-white p-2 rounded">Save</button>
      </div>
    </div>
  );
}
