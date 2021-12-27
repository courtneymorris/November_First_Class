import React from "react";

export default function() {
    let abilityScore = 0
    abilityScore = Math.floor(Math.random() * (18 - 8) + 8) 
    return Number(abilityScore)
}
