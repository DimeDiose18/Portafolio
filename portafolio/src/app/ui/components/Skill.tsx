import React from 'react';
import { File } from '../icons/File';
import { PropSkill } from '../../lib/types/SkillsTypes';
import { ibmPlexMono } from '../fonts';

const Skill: React.FC<PropSkill> = (SkillsData) => {
  return (
    <>
        <h1 className={`${ibmPlexMono.className} z-40 tracking-tighter absolute text-blacky font-bold text-sm`}>{SkillsData.name}</h1>
        <div>
           <File /> 
        </div>
    </>
  )
}

export default Skill
