import React from 'react';
import { SkillsData } from '@/app/lib/data/Data';
import { PropSkill } from '@/app/lib/types/SkillsTypes';
import Skill from './Skill';
import { getRandomColor } from '@/app/lib/utils/GetRandomColor';



const Skills: React.FC = () => {
    const colors: string[] = ['#B6EAFF','#FD68C4','#BE87F9','#0DE2D8','#22FD81','#F5FC72','#FF9D5A','#FC5A88'];
  return (
    <>
     {SkillsData.map((skill: PropSkill) =>(
        <div key={skill.id} className='border-1 border-b-2 border-r-2 border-blacky rounded-lg p-1 w-20 h-[5.625rem] flex items-center justify-center shadow-xl' style={{ backgroundColor: getRandomColor(colors) }}>
         <Skill {...skill} />   
        </div>
     ))} 
    </>
  )
}

export default Skills

