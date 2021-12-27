import React, { Component } from "react";
import Temporal from "temporal";
import moment from "moment";

import AbilityGenerator from "./ability-generator";


export default class Charlie extends Component {
    constructor() {
        super();
    }
    render() {
        return(
        <div className="charlie-wrapper">
            <div className="character-data">
                
                <div className="top-left-wrapper1">
                    <h4>______________________</h4>
                    <h4>Player Name</h4>
                    <h4>Gender</h4>
                    <h4>Height</h4>                
                    <h4>Eye Color/Description</h4>                
                    <h4>Level(s)</h4>                
                </div>
                <div className="top-left-wrapper2">
                    <h4>______________________</h4>
                    <input type="text" placeholder="Text" id="dField"  />
                    <input type="text" placeholder="Text" id="dField"  />
                    <input type="text" placeholder="Text" id="dField"  />
                    <input type="text" placeholder="Text" id="dField"  />
                    <input type="text" placeholder="Text" id="dField"  />
                </div>
                <div className="top-middle-wrapper1">
                    <h4>______________________</h4>
                    
                    <h4>Character Name</h4>
                    <h4>Race</h4>
                    <h4>Weight</h4>                
                    <h4>Skin Color/Description</h4>                
                    <h4>Alignment</h4>            
                </div>
                <div className="top-middle-wrapper2">
                    <h4 id="cData">Character Data</h4>
                    <input type="text" placeholder="Text" id="dField" />
                    <input type="text" placeholder="Text" id="dField"  />
                    <input type="text" placeholder="Text" id="dField"  />
                    <input type="text" placeholder="Text" id="dField"  />
                    <input type="text" placeholder="Text" id="dField"  />
                </div>
                <div className="top-right-wrapper1">
                    <h4>______________________</h4>
                    <h4>Character Level</h4>
                    <h4>Age</h4>
                    <h4>Hair Color/Description</h4>
                    <h4>Class(es)</h4>                
                    <h4>Diety/Cause</h4>                
                </div>
                <div className="top-right-wrapper2">
                    <h4>______________________</h4>
                    <input type="text" placeholder="Text" id="dField"  />
                    <input type="text" placeholder="Text" id="dField"  />
                    <input type="text" placeholder="Text" id="dField"  />
                    <input type="text" placeholder="Text" id="dField"  />
                    <input type="text" placeholder="Text" id="dField"  />
                </div>
                <div className="languages-div">
                    <h4>Languaes</h4>
                    <input type="text" id="languages" />
                    <input type="text" id="languages" />
                    <input type="text" id="languages" />
                    <input type="text" id="languages" />
                    <input type="text" id="languages" />
                    <input type="text" id="languages" />
                </div>
                <div className="ability-wrapper">
                    <div className="ability-labels">
                        <h4>STR</h4>
                        <h4>DEX</h4>
                        <h4>CON</h4>
                        <h4>INT</h4>
                        <h4>WIS</h4>
                        <h4>CHA</h4>
                    </div>
                    <div className="ability-scores">
                        <input type="text" name="strength" placeholder={AbilityGenerator()}/>
                        <input type="text" name="dexterity" placeholder={AbilityGenerator()} />
                        <input type="text" name="constitution" placeholder={AbilityGenerator()}/>
                        <input type="text" name="intelligence" placeholder={AbilityGenerator()}/>
                        <input type="text" name="wisdom" placeholder={AbilityGenerator()}/>
                        <input type="text" name="charisma" placeholder={AbilityGenerator()}/>
                    </div>
                    <div className="ability-modifiers">
                        <div>
                            {sTrength = document.getElementById('strength').value }
                            {console.log(sTrength)}
                        </div>
                    </div>
                </div>                
            </div>

                
        </div>
        )
    }
}