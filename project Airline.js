

var flights = [

{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}

]

function showToUser () {

	var username = "Toni777"

	var hello = prompt("Hi! Whats your user name?" , "Insert user name")

			if( hello === username) {

				alert("Hello user!")

		for( var i = 0;i<flights.length;i++) {

		if(flights[i].scale === true) {

			console.log(" Fly number: " + flights[i].id + ", " + "from " + flights[i].from + " to " + flights[i].to + ". Cost: " + flights[i].cost + ". " + " With scales. "); 
	} else {

		console.log(" Fly number: " + flights[i].id + ", " + "from " + flights[i].from + " to " + flights[i].to + ". Cost: " + flights[i].cost + ". " + " No scales. "); 

     }
	}
   

   var count = 0;

    flights.forEach(function(obj) {

    	return count += obj.cost
    })

    console.log("Medium cost of flights are: " + count/flights.length)

   var j = flights.length-5;


   	console.log("The last 5 flies, fly to: " )

   for(j;j < flights.length ;j++) {

   	console.log([j] -4 + " ==> " + flights[j].to)

   }
 }
}

showToUser();







