import React, { Component } from "react";
import Temporal from "temporal";
import moment from "moment";


export default class extends Component {
    constructor() {
        super();
    }
    render() {
        return(
        <div className="charlie-wrapper">
            <div className="character-data-inputs">
                <h4>Player Name</h4>
                <input type="text" id="PlayerName" label="Player Name:" />
                <h4>Character Name</h4>
                <input type="text" id="CharacterName" />
                <h4>Character Level</h4>
                <input type="text" id="CharacterLevel" />
                <h4>Gender</h4>
                <input type="text" id="Gender" />
                <h4>Race</h4>
                <input type="text" id="Race" />
                <h4>Age</h4>
                <input type="text" id="Age" />
                <h4>Height</h4>                
                <input type="text" id="Height" />
                <h4>Weight</h4>                
                <input type="text" id="Weight" />
                <h4>Hair Color/Description</h4>                
                <input type="text" id="HairColor" />
                <h4>Eye Color/Description</h4>                
                <input type="text" id="EyeColor" />
                <h4>Skin Color/Description</h4>                
                <input type="text" id="SinkColor" />
                <h4>Class(es)</h4>                
                <input type="text" id="Class" />
                <h4>Level(s)</h4>                
                <input type="text" id="Level" />
                <h4>Alignment</h4>            
                <input type="text" id="Alignment" />
                <h4>Diety/Cause</h4>                
                <input type="text" id="Diety/Cause" />
            </div>
            <div className="character-data-labels"></div>
            <div className="ability-scores">
                <h4>STR</h4>
                <h4>DEX</h4>
                <h4>CON</h4>
                <h4>INT</h4>
                <h4>WIS</h4>
                <h4>CHA</h4>
            </div>
        </div>
        )
    }
}