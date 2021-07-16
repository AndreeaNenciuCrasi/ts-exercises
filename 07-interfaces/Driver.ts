import {GolfCoach} from "./GolfCoach";
import {CricketCoach} from "./CricketCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let theCoaches: Coach[] = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for(let theCoach of theCoaches){
    console.log(theCoach.getDailyWorkout());
}