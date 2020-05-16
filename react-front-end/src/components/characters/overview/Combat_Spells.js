import React from 'react';
import AbilityPointsAll from './AP_all';
// ROUTE 3B - THIS IS AFTER CLICKING MAIN
// QUICKVIEW > COMBAT > STATS - WEAPONS - SPELLS - DICE

export default function CombatSpells(props) {
  return (
    <div className="overview-skill-throw">
      <div className="skill-throw-internal">
        <AbilityPointsAll
          constitution={props.characterObject.constitution}
          strength={props.characterObject.strength}
          dexterity={props.characterObject.dexterity}
          charisma={props.characterObject.charisma}
          wisdom={props.characterObject.wisdom}
          intelligence={props.characterObject.intelligence}
        />
      </div>
    </div>
  );
}
