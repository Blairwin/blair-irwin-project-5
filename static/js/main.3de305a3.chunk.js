(this["webpackJsonpblair-irwin-project-5"]=this["webpackJsonpblair-irwin-project-5"]||[]).push([[0],{18:function(e,t,a){e.exports=a(40)},23:function(e,t,a){},24:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),i=a.n(r),o=(a(23),a(16)),s=a(12),c=a(13),m=a(15),u=a(14),d=a(17),h=(a(24),a(8)),p=a.n(h);p.a.initializeApp({apiKey:"AIzaSyAH0VBW0AFgnFDMiYv0JI70Sl_PRoWkack",authDomain:"blair-irwin-project-5.firebaseapp.com",databaseURL:"https://blair-irwin-project-5.firebaseio.com",projectId:"blair-irwin-project-5",storageBucket:"blair-irwin-project-5.appspot.com",messagingSenderId:"643418644752",appId:"1:643418644752:web:705d598f3d9d18b82e0595"});var E=p.a,g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).handleDateChange=function(t){e.setState({date:t.target.value})},e.handleTimeChange=function(t){e.setState({time:t.target.value})},e.handlePetNameChange=function(t){e.setState({petName:t.target.value})},e.handleMedicationChange=function(t){e.setState({medication:t.target.value})},e.handleDosageChange=function(t){e.setState({dosage:t.target.value})},e.handleNotesChange=function(t){e.setState({notes:t.target.value})},e.handleClick=function(t){t.preventDefault(),E.database().ref().push(e.state),e.setState({date:"",time:"",petName:"",medication:"",dosage:"",notes:""})},e.state={doses:[],date:"",time:"",petName:"",medication:"",dosage:"",notes:""},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var l in a){var r=Object(o.a)({key:l},a[l]);n.push(r)}e.setState({doses:n})}))}},{key:"removeDose",value:function(e){E.database().ref().child(e).remove()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"mainWrapper"},l.a.createElement("div",{className:"flexContainer"},l.a.createElement("header",{className:"h1Flex"},l.a.createElement("i",{className:"fa fa-paw"}),l.a.createElement("h1",null,"Pet Meds Log")),l.a.createElement("main",null,l.a.createElement("p",{className:"centered"},"Enter the information below to save it to your pet's medication log"),l.a.createElement("form",{action:"submit"},l.a.createElement("div",{className:"inputFlexParent"},l.a.createElement("label",{htmlFor:"date"},l.a.createElement("strong",null,"Enter the date:")),l.a.createElement("input",{type:"date",id:"date",onChange:this.handleDateChange,value:this.state.date})),l.a.createElement("div",{className:"inputFlexParent"},l.a.createElement("label",{htmlFor:"time"},l.a.createElement("strong",null,"Enter the time:")),l.a.createElement("input",{type:"time",id:"time",onChange:this.handleTimeChange,value:this.state.time})),l.a.createElement("div",{className:"inputFlexParent"},l.a.createElement("label",{htmlFor:"petName"},l.a.createElement("strong",null,"Pet's name:")),l.a.createElement("input",{type:"text",id:"petName",onChange:this.handlePetNameChange,value:this.state.petName})),l.a.createElement("div",{className:"inputFlexParent"},l.a.createElement("label",{htmlFor:"medication"},l.a.createElement("strong",null,"Medication:")),l.a.createElement("input",{type:"text",id:"medication",onChange:this.handleMedicationChange,value:this.state.medication})),l.a.createElement("div",{className:"inputFlexParent"},l.a.createElement("label",{htmlFor:"dosage"},l.a.createElement("strong",null,"Dosage:")),l.a.createElement("input",{type:"text",id:"dosage",onChange:this.handleDosageChange,value:this.state.dosage})),l.a.createElement("div",{className:"inputFlexParent"},l.a.createElement("label",{htmlFor:"notes"},l.a.createElement("strong",null,"Notes:")),l.a.createElement("input",{type:"text",id:"notes",onChange:this.handleNotesChange,value:this.state.notes})),l.a.createElement("button",{onClick:this.handleClick,type:"submit"},l.a.createElement("i",{className:"fa fa-paw"}),"Add Dose Above")),l.a.createElement("ul",null,this.state.doses.map((function(t){return l.a.createElement("div",null,l.a.createElement("li",{key:t.key},l.a.createElement("p",null,l.a.createElement("strong",null,"Date:")," ",t.date),l.a.createElement("p",null,l.a.createElement("strong",null,"Time:")," ",t.time),l.a.createElement("p",null,l.a.createElement("strong",null,"Name:")," ",t.petName),l.a.createElement("p",null,l.a.createElement("strong",null,"Medication:")," ",t.medication),l.a.createElement("p",null,l.a.createElement("strong",null,"Dosage:")," ",t.dosage),l.a.createElement("p",null,l.a.createElement("strong",null,"Notes:")," ",t.notes),l.a.createElement("button",{onClick:function(){return e.removeDose(t.key)}},"Remove Dose Above")))})))))),l.a.createElement("div",{className:"footerWrapper"},l.a.createElement("footer",null,l.a.createElement("p",null,"\xa9 ",l.a.createElement("a",{href:"http://blaircodes.com"},"Blair Irwin")," March 2020, with thanks to"," ",l.a.createElement("a",{href:"https://firebase.google.com/"},"firebase ",l.a.createElement("i",{className:"fa fa-paw"}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);i.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.3de305a3.chunk.js.map