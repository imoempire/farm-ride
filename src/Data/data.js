export const rideData =[
    {street:"32 Olivia Rd",area:"Klipfontein 83-Ir,Boksburg",id:"0"},
    {street:"Hughes Industrial Park",area:"Hughes,Boksburg",id:"1"},
    {street:"32 Olivia Road",area:" East Rand,Ekurhuleni,Gauteng,1459",id:"2"},
    {street:"Total Boksburg",area:"35 Atlas Rd,Anderbolt,Boksburg",id:"3"},
    {street:"179 8th Ave",area:"Bezuidenhout Valley,Johannesburg",id:"4"},
];

import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export const extra = [ 
    {title:'Sell For Me', id: 1, icon: FontAwesome5 , name: 'comment-dollar' },
    {title:'Fund Me', id: 2, icon: MaterialCommunityIcons, name: 'cash-refund'},
    {title:'Export Advice', id: 3, icon: MaterialIcons, name: 'supervisor-account'},
    {title:'Hire Tools & Labor', id: 4, icon: FontAwesome5, name: 'hire-a-helper'},
]

export const history = [ 
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
