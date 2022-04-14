export const rideData =[
    {street:"Accra Market",contact:"0273456789",id:"0"},
    {street:"Kumasi Market",contact:"0547890764",id:"1"},
    {street:"Takoradi Mall",contact:"0578235728",id:"2"},
    {street:"Accra Mall",contact:"0278965387",id:"3"},
    {street:"New SuperMarket",contact:"0575687653",id:"4"},
];

import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export const extra = [ 
    {title:'Sell For Me', id: 1, icon: FontAwesome5 , name: 'comment-dollar', color: '#27E20C' },
    {title:'Fund Me', id: 2, icon: MaterialCommunityIcons, name: 'cash-refund', color: '#27E20C'},
    {title:'Export Advice', id: 3, icon: MaterialIcons, name: 'supervisor-account', color: '#27E20C'},
    {title:'Hire Tools & Labor', id: 4, icon: FontAwesome5, name: 'hire-a-helper', color: '#27E20C'},
]

export const historyList = [ 
    {pickup:'Banana Street', id: 1,  drop: 'Market', date:'2/5/2021' },
    {pickup:'Main Road', id: 2,  drop: 'Market', date:'5/5/2021'},
    {pickup:'Banana Street', id: 3,  drop: 'Market', date:'20/5/2021'},
    {pickup:'Home', id: 4, drop: 'Farm ride depot', date:'29/5/2021'},
    {pickup:'Home', id: 5, drop: 'Farm ride depot', date:'2/6/2021'},
    {pickup:'Home', id: 6, drop: 'Farm ride depot', date:'29/6/2021'},
]

 export const requestData = [{
    name:"For Me",id:0
},
{
    name:"For Someone",id:1
}

]

export const rideOptions = [{name:"Personal",icon:"account", id:"0"},
{name:"Business",icon:"briefcase", id:"1"},  
];


export const carsAround = [
    {latitude:5.756972,longitude:-0.1748633},
    {latitude:5.768299325391991,longitude:-0.18050193786621094},
    {latitude:5.765812159047456,longitude:-0.18115639686584475},
    {latitude:5.764061528988557,longitude:-0.1796972751617432},
    {latitude:5.762385615885739,longitude:-0.1776695251464844},
]
