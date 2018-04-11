
// import * as Rx from 'rxjs/Rx'
Rx=require('rxjs/Rx')


let aDatos = [1,2,3,4,5,6]

const observable = Rx.Observable
.from(aDatos)
.map( x => x*x)
.filter(x => x >15 )



/* const observador = Rx.Observer.create(
    function onNext(x) { console.log('Next: ' + x); }, 
	function onError(err) { console.log('Error: ' + err); }, 
	function onCompleted() { console.log('Completed'); } 
) */

//observable.subscribe(observador)

observable.subscribe(
    function onNext(x) { console.log('Next: ' + x); }, 
	function onError(err) { console.log('Error: ' + err); }, 
	function onCompleted() { console.log('Completed'); } 
)

aDatos.push(7)

observable.subscribe(
    function onNext(x) { console.log('Siguiente: ' + x); }, 
	function onError(err) { console.log('Error: ' + err); }, 
	function onCompleted() { console.log('Se acabo'); } 
)