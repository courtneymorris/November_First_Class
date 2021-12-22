import React, { Component } from "react";
import Temporal from "temporal";
import moment from "moment";


export default class Charlie extends Component {
    constructor() {
        super();
    }
    render() {
        return(
        <div className="charlie-wrapper">
            <div className="character-data">
                <div>
                    <h4>Player Name</h4>
                    <input type="text" id="PlayerName" label="Player Name:" />
                </div>
                <div>
                    <h4>Character Name</h4>
                    <input type="text" id="CharacterName" />
                </div>
                <div>
                    <h4>Character Level</h4>
                    <input type="text" id="CharacterLevel" />
                </div>
                <div>
                    <h4>Gender</h4>
                    <input type="text" id="Gender" />
                </div>
                <div>
                    <h4>Race</h4>
                    <input type="text" id="Race" />
                </div>
                <div>
                    <h4>Age</h4>
                    <input type="text" id="Age" />
                </div>
                <div>
                    <h4>Height</h4>                
                    <input type="text" id="Height" />
                </div>
                <div>
                    <h4>Weight</h4>                
                    <input type="text" id="Weight" />
                </div>
                <div>
                    <h4>Hair Color/Description</h4>
                    <input type="text" id="HairColor" />
                </div>
                <div>
                    <h4>Eye Color/Description</h4>                
                    <input type="text" id="EyeColor" />
                </div>
                <div>
                    <h4>Skin Color/Description</h4>                
                    <input type="text" id="SinkColor" />
                </div>
                <div>
                    <h4>Class(es)</h4>                
                    <input type="text" id="Class" />
                </div>
                <div>
                    <h4>Level(s)</h4>                
                    <input type="text" id="Level" />
                </div>
                <div>
                    <h4>Alignment</h4>            
                    <input type="text" id="Alignment" />
                </div>
                <div>
                    <h4>Diety/Cause</h4>                
                    <input type="text" id="Diety/Cause" />
                </div>
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