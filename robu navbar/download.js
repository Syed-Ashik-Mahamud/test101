
var addStudents = function(){
	var students = [{"NAME":"ANTERLEEN","SCHOOL":"ASHOK VATIKA PUBLIC SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"MANIK SHARMA","SCHOOL":"ASHOK VATIKA PUBLIC SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"PRABHJEET","SCHOOL":"HOLY HEART PRESIDENCY SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"RANTEJBIR","SCHOOL":"HOLY HEART PRESIDENCY SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"NAMYA KAMBOJ","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"BHARAT ARORA","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"ASHWATH SONI","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"AMITOJ","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"AGAM","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"KARMANPREET SINGH","SCHOOL":"KHALSA INTERNATIONAL SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"JAGNPREET SINGH","SCHOOL":"KHALSA INTERNATIONAL SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"AYUSH PODDAR","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"URVASHI","SCHOOL":"POLICE DAV PUBLIC SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"MEGHA","SCHOOL":"POLICE DAV PUBLIC SCHOOL","EVENT":"CODE COMBAT"},
{"NAME":"NEEL CHACKO","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"QUICK PICK"},
{"NAME":"HRIDAY KHANNA","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL","EVENT":"QUICK PICK"},
{"NAME":"BISANPREET SINGH","SCHOOL":"DOON INTERNATIONAL SCHOOL","EVENT":"QUICK PICK"},
{"NAME":"SPARSH ARORA","SCHOOL":"DAV INTERNATIONAL SCHOOL","EVENT":"QUICK PICK"},
{"NAME":"VAANI SYAL","SCHOOL":"THE MILLENNIUM SCHOOL","EVENT":"QUICK PICK"},
{"NAME":"TANISH ARORA","SCHOOL":"HOLY HEART PRESIDENCY SCHOOL","EVENT":"QUICK PICK"},
{"NAME":"ADHIRAJ SINGH","SCHOOL":"DELHI PUBLIC SCHOOL","EVENT":"QUICK PICK"},
{"NAME":"RIYA","SCHOOL":"ASHOK VATIKA PUBLIC SCHOOL","EVENT":"QUICK PICK"},
{"NAME":"TARANPREET KAUR","SCHOOL":"SSSS MODERN HIGH SCHOOL","EVENT":"QUICK PICK"},
{"NAME":"OJASWA KAPOOR","SCHOOL":"EXCELSUM HIGH","EVENT":"QUICK PICK"},
{"NAME":"SARGUN VIRK","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"SCHOOLPRENEUR"},
{"NAME":"GURNEET KAUR","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"SCHOOLPRENEUR"},
{"NAME":"PARAMPUNEET","SCHOOL":"DOON INTERNATIONAL SCHOOL   ","EVENT":"SCHOOLPRENEUR"},
{"NAME":"KRISHNA","SCHOOL":"DOON INTERNATIONAL SCHOOL   ","EVENT":"SCHOOLPRENEUR"},
{"NAME":"NITYA KANDHARI","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"SCHOOLPRENEUR"},
{"NAME":"MANBIR","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"SCHOOLPRENEUR"},
{"NAME":"JIYA MEHRA  ","SCHOOL":"THE SENIOR STUDY CANTT.","EVENT":"SCHOOLPRENEUR"},
{"NAME":"RIVA KUMAR ARORA  ","SCHOOL":"THE SENIOR STUDY CANTT.","EVENT":"SCHOOLPRENEUR"},
{"NAME":"SEHAJDEEP SINGH ","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"SCHOOLPRENEUR"},
{"NAME":"VANYA BERRY  ","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"SCHOOLPRENEUR"},
{"NAME":"SAMAIRA JOT KAUR  ","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"SCHOOLPRENEUR"},
{"NAME":"VIDYA","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"SCHOOLPRENEUR"},
{"NAME":"PRERNA","SCHOOL":"ASHOK VATIKA PUBLIC SCHOOL","EVENT":"SCHOOLPRENEUR"},
{"NAME":"MANNATDEEP KAUR","SCHOOL":"HOLY HEART PRESIDENCY SCHOOL","EVENT":"SCHOOLPRENEUR"},
{"NAME":"JASHANPREET KAUR","SCHOOL":"HOLY HEART PRESIDENCY SCHOOL","EVENT":"SCHOOLPRENEUR"},
{"NAME":"VRIDHITA AGGARWAL  ","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"SCHOOLPRENEUR"},
{"NAME":"ISHIKA AGGARWAL","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"SCHOOLPRENEUR"},
{"NAME":"DIVYA GROVER","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"SCHOOLPRENEUR"},
{"NAME":"NAYAMAT KAMBOJ","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"JASNOOR SINGH","SCHOOL":"DAV INTERNATIONAL SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"KANANPREET BHATIA","SCHOOL":"DAV INTERNATIONAL SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"RUBAINA MEHRA","SCHOOL":"SACRED HEART SENIOR SECONDARY SCHOOL  ","EVENT":"TECHPRENEUR"},
{"NAME":"SANAA MASSEY","SCHOOL":"SACRED HEART SENIOR SECONDARY SCHOOL  ","EVENT":"TECHPRENEUR"},
{"NAME":"SANCHITA","SCHOOL":"HOLY HEART PRESIDENCY SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"HARISH SAINI","SCHOOL":"HOLY HEART PRESIDENCY SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"MEHAKNOOR SINGH","SCHOOL":"SIR GURU HARKRISHAN PUBLIC SCHOOL TARN TARAN","EVENT":"TECHPRENEUR"},
{"NAME":"GOBINDPREET SINGH","SCHOOL":"SIR GURU HARKRISHAN PUBLIC SCHOOL TARN TARAN","EVENT":"TECHPRENEUR"},
{"NAME":"JIYA","SCHOOL":"ASHOK VATIKA PUBLIC SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"VANI","SCHOOL":"ASHOK VATIKA PUBLIC SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"DHRITI","SCHOOL":"DELHI PUBLIC SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"KHUSHBOO","SCHOOL":"DELHI PUBLIC SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"MICHELLE BIBRA","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"HARLEEN GILL","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"DHAIRYA","SCHOOL":"KHALSA INTERNATIONAL SCHOOL  RANJIT AVENUE","EVENT":"TECHPRENEUR"},
{"NAME":"DIVANSHI","SCHOOL":"KHALSA INTERNATIONAL SCHOOL  RANJIT AVENUE","EVENT":"TECHPRENEUR"},
{"NAME":"DIVSARGUN KAUR","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"GURNEET","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"SATINDER KAUR","SCHOOL":"POLICE DAV PUBLIC SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"MOKSH MEHRA","SCHOOL":"POLICE DAV PUBLIC SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"DIMPLE PREET KAUR","SCHOOL":"POLICE DAV PUBLIC SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"SANVI","SCHOOL":"POLICE DAV PUBLIC SCHOOL","EVENT":"TECHPRENEUR"},
{"NAME":"KARTIK SHARMA","SCHOOL":"HOLY HEART PRESIDENCY SCHOOL","EVENT":"TECHJOURNALIST"},
{"NAME":"KHYATI","SCHOOL":"ASHOK VATIKA PUBLIC SCHOOL","EVENT":"TECHJOURNALIST"},
{"NAME":"KAWALNAIN KAUR","SCHOOL":"STALWARTS WORLD SCHOOL","EVENT":"TECHJOURNALIST"},
{"NAME":"EKNOOR KAUR","SCHOOL":"GURU HARKRISHAN PUBLIC SCHOOL","EVENT":"TECHJOURNALIST"},
{"NAME":"NIDYA KHANNA","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"TECHJOURNALIST"},
{"NAME":"AAYUSH ARORA","SCHOOL":"DAV INTERNATIONAL SCHOOL","EVENT":"TECHJOURNALIST"},
{"NAME":"PRIYANSHU SETHI","SCHOOL":"DAV INTERNATIONAL SCHOOL","EVENT":"TECHJOURNALIST"},
{"NAME":"RUDRA","SCHOOL":"DOON INTERNATIONAL SCHOOL   ","EVENT":"TECHJOURNALIST"},
{"NAME":"ARMAAN","SCHOOL":"DOON INTERNATIONAL SCHOOL   ","EVENT":"TECHJOURNALIST"},
{"NAME":"KRISHNAM MEHRA","SCHOOL":"EXCELSUM HIGH SCHOOL","EVENT":"TECHJOURNALIST"},
{"NAME":"KAAVYA KANDHARI","SCHOOL":"EXCELSUM HIGH SCHOOL","EVENT":"TECHJOURNALIST"},
{"NAME":"GURSIFAT SINGH NAGI","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"TECHJOURNALIST"},
{"NAME":"TANVEERPAL SINGH","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"TECHJOURNALIST"},
{"NAME":"AVREET KAUR","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"TECHJOURNALIST"},
{"NAME":"VRINDA ARORA","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"TECHJOURNALIST"},
{"NAME":"HRIDAY KHANNA","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"TECHJOURNALIST"},
{"NAME":"AARYAN KHANNA","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"AD MAD - I"},
{"NAME":"YUVRAJ VERMA","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"AD MAD - I"},
{"NAME":"DIVYANSHU","SCHOOL":"ASHOK VATIKA PUBLIC SCHOOL","EVENT":"AD MAD - II"},
{"NAME":"SAMRAJ BHULLAR","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"AD MAD - II"},
{"NAME":"LOVERAJ BADESHA","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"AD MAD - II"},
{"NAME":"SHUBHKARMAN SINGH","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"AD MAD - II"},
{"NAME":"BHAVNOOR SINGH","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"AD MAD - II"},
{"NAME":"PARBAT SINGH","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL  ","EVENT":"AD MAD - I"},
{"NAME":"SUKIRAT SINGH","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL   ","EVENT":"AD MAD - I"},
{"NAME":"KARANDEEP SINGH","SCHOOL":"HOLY HEART PRESIDENCY SCHOOL","EVENT":"AD MAD - II"},
{"NAME":"CHAITANYA SHARMA","SCHOOL":"HOLY HEART PRESIDENCY SCHOOL","EVENT":"AD MAD - I"},
{"NAME":"PRABSIMRAN WALIA","SCHOOL":"KHALSA INTERNATIONAL SCHOOL","EVENT":"AD MAD - II"},
{"NAME":"PURSHOTAM SINGH","SCHOOL":"KHALSA INTERNATIONAL SCHOOL","EVENT":"AD MAD - I"},
{"NAME":"NILESH SETH","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"AD MAD - I"},
{"NAME":"ANEESHA MAHAJAN","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"AD MAD - II"},
{"NAME":"HARMEEN KAUR","SCHOOL":"SIR GURU HARKRISHAN PUBLIC SCHOOL","EVENT":"AD MAD - II"},
{"NAME":"ASHMIT SINGH","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL","EVENT":"AD MAD - II"},
{"NAME":"VANSHJOT SINGH","SCHOOL":"POLICE DAV PUBLIC SCHOOL","EVENT":"AD MAD - II"},
{"NAME":"AMREEN","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL   ","EVENT":"TECH-PARLIAMENT"},
{"NAME":"HARPREET KAUR","SCHOOL":"DELHI PUBLIC SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"LAVANYA","SCHOOL":"HOLY HEART PRESIDENCY SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"UDHAY KARAN","SCHOOL":"HOLY HEART PRESIDENCY SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"KHUSHI MAHAJAN","SCHOOL":"ASHOK VATIKA PUBLIC SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"HARMANPREET","SCHOOL":"ASHOK VATIKA PUBLIC SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"RIYA","SCHOOL":"ASHOK VATIKA PUBLIC SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"VANSHIKA PIPLANI","SCHOOL":"ASHOK VATIKA PUBLIC SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"PALAK BHATIA","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL   ","EVENT":"TECH-PARLIAMENT"},
{"NAME":"MEHUL SINGH","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL   ","EVENT":"TECH-PARLIAMENT"},
{"NAME":"JAYDEEP SINGH","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL   ","EVENT":"TECH-PARLIAMENT"},
{"NAME":"VANSHIKA ARORA","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL   ","EVENT":"TECH-PARLIAMENT"},
{"NAME":"SEJAL","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL   ","EVENT":"TECH-PARLIAMENT"},
{"NAME":"VRINDA","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL   ","EVENT":"TECH-PARLIAMENT"},
{"NAME":"HARSHITA","SCHOOL":"SACRED HEART","EVENT":"TECH-PARLIAMENT"},
{"NAME":"DEEPANSHA MAHAJAN","SCHOOL":"DAV INTERNATIONAL SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"PAVNI","SCHOOL":"DAV INTERNATIONAL SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"SHIVAM MAHAJAN","SCHOOL":"DAV INTERNATIONAL SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"TISHA CHAWLA","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL   ","EVENT":"TECH-PARLIAMENT"},
{"NAME":"SANVEER","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL   ","EVENT":"DIG THE BUG"},
{"NAME":"GAURANG","SCHOOL":"ASHOK VATIKA PUBLIC SCHOOL","EVENT":"DIG THE BUG"},
{"NAME":"SWAPNIL","SCHOOL":"HOLY HEART PRESIDENCY SCHOOL","EVENT":"DIG THE BUG"},
{"NAME":"HARSHIT","SCHOOL":"CAMBRIDGE INTERNATIONAL SCHOOL   ","EVENT":"DIG THE BUG"},
{"NAME":"AMRIT KAUR","SCHOOL":"KHALSA INTERNATIONAL SCHOOL","EVENT":"DIG THE BUG"},
{"NAME":"JASMEHAR","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"DIG THE BUG"},
{"NAME":"HARDIK","SCHOOL":"POLICE DAV PUBLIC SCHOOL","EVENT":"DIG THE BUG"},
{"NAME":"ARYA PRASOON SINHA","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"NIKHIL GUPTA","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"HARSHITA SEHGAL","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"SIDDHARTH KATARIA","SCHOOL":"SPRING DALES SENIOR SCHOOL","EVENT":"TECH-PARLIAMENT"},
{"NAME":"PRIYANSHU MAINGI","SCHOOL":"SSSS MODERN HIGH SCHOOL","EVENT":"TECH-PARLIAMENT"}]	
	


	// <div class="card card-shadow text-center">
	//     <div class="card-body">
	//         <h4 class="card-title">Rob Doe</h4>
	//         <p class="card-text">UX Designer</p>
	//         <div class="dropdown-divider"></div>
	//         <p class="card-text"><small class="text-muted">Team A</small></p>
	//         <a href="#">
	//             <button type="button" class="btn btn-outline-primary">Email</button>
	//         </a>
	//     </div>
	// </div>

	var count = 0;
	var parentDiv,baseId,div0,div1,div2,div3,name,event,school,p2,link,btn;
	parentDiv = document.getElementById("certificate-deck");
	div0 = document.createElement("div");
	div0.classList.add("card-deck");
	div0.classList.add("column");
	
	while(count < students.length){

		baseId = "student_"+count;
		
		//First Card 
		div1 = document.createElement("div");
		div1.classList.add("card");
		div1.classList.add("card-shadow");
		div1.classList.add("text-center");
		div1.classList.add("col-md-3");
		div1.classList.add("col-lg-3");
		div1.classList.add("mb-3");
		div1.classList.add("mt-3");
		div1.id=baseId;
		div2 = document.createElement("div");
		div2.classList.add("card-body");
		name = document.createElement("h4");
		name.classList.add("card-title");
		name.id=baseId+"_name";
		name.innerHTML = students[count].NAME;
		event = document.createElement("p");
		event.classList.add("card-text");
		event.id=baseId+"_event";
		event.innerHTML = students[count].EVENT;
		div3 = document.createElement("div");
		div3.classList.add("dropdown-divider");
		p2 = document.createElement("p");
		p2.classList.add("card-text");
		school = document.createElement("small");
		school.classList.add("text-muted");
		school.id=baseId+"_school";
		school.innerHTML=students[count].SCHOOL
		link = document.createElement("a");
		link.href="https://www.cambridgeamritsar.com/technophilia/public/certificates/PARTICIPATION_"+(count+1)+".pdf";
		btn = document.createElement("button");
		btn.type="button";
		btn.classList.add("btn");
		btn.classList.add("btn-primary");
		btn.style.background="#df42b1";
		btn.innerHTML="DOWNLOAD";
		btn.onclick = function(id){
			window.open=link.href;
		}

		// Appending
		link.appendChild(btn);
		p2.appendChild(school);
		div2.appendChild(name);
		div2.appendChild(event);
		div2.appendChild(div3);
		div2.appendChild(p2);
		div2.appendChild(link);
		div1.appendChild(div2);
		div0.appendChild(div1);
		count++;


		if(count < students.length){
			// Second Card
			div1 = document.createElement("div");
			div1.classList.add("card");
			div1.classList.add("card-shadow");
			div1.classList.add("text-center");
			div1.classList.add("col-md-3");
			div1.classList.add("col-lg-3");
			div1.classList.add("mb-3");
			div1.classList.add("mt-3");
			div1.id=baseId;
			div2 = document.createElement("div");
			div2.classList.add("card-body");
			name = document.createElement("h4");
			name.classList.add("card-title");
			name.id=baseId+"_name";
			name.innerHTML = students[count].NAME;
			event = document.createElement("p");
			event.classList.add("card-text");
			event.id=baseId+"_event";
			event.innerHTML = students[count].EVENT;
			div3 = document.createElement("div");
			div3.classList.add("dropdown-divider");
			p2 = document.createElement("p");
			p2.classList.add("card-text");
			school = document.createElement("small");
			school.classList.add("text-muted");
			school.id=baseId+"_school";
			school.innerHTML=students[count].SCHOOL
			link = document.createElement("a");
			link.href="https://www.cambridgeamritsar.com/technophilia/public/certificates/PARTICIPATION_"+(count+1)+".pdf";
			btn = document.createElement("button");
			btn.type="button";
			btn.classList.add("btn");
			btn.classList.add("btn-primary");
			btn.style.background="#df42b1";
			btn.innerHTML="DOWNLOAD";
			btn.onclick = function(id){
				window.open=link.href;
			}

			// Appending
			link.appendChild(btn);
			p2.appendChild(school);
			div2.appendChild(name);
			div2.appendChild(event);
			div2.appendChild(div3);
			div2.appendChild(p2);
			div2.appendChild(link);
			div1.appendChild(div2);
			div0.appendChild(div1);
			count++;
		}

		if(count < students.length){
			// Third Card
			div1 = document.createElement("div");
			div1.classList.add("card");
			div1.classList.add("card-shadow");
			div1.classList.add("text-center");
			div1.classList.add("col-md-3");
			div1.classList.add("col-lg-3");
			div1.classList.add("mb-3");
			div1.classList.add("mt-3");
			div1.id=baseId;
			div2 = document.createElement("div");
			div2.classList.add("card-body");
			name = document.createElement("h4");
			name.classList.add("card-title");
			name.id=baseId+"_name";
			name.innerHTML = students[count].NAME;
			event = document.createElement("p");
			event.classList.add("card-text");
			event.id=baseId+"_event";
			event.innerHTML = students[count].EVENT;
			div3 = document.createElement("div");
			div3.classList.add("dropdown-divider");
			p2 = document.createElement("p");
			p2.classList.add("card-text");
			school = document.createElement("small");
			school.classList.add("text-muted");
			school.id=baseId+"_school";
			school.innerHTML=students[count].SCHOOL
			link = document.createElement("a");
			link.href="https://www.cambridgeamritsar.com/technophilia/public/certificates/PARTICIPATION_"+(count+1)+".pdf";
			btn = document.createElement("button");
			btn.type="button";
			btn.classList.add("btn");
			btn.classList.add("btn-primary");
			btn.style.background="#df42b1";
			btn.innerHTML="DOWNLOAD";
			btn.onclick = function(id){
				window.open=link.href;
			}

			// Appending
			link.appendChild(btn);
			p2.appendChild(school);
			div2.appendChild(name);
			div2.appendChild(event);
			div2.appendChild(div3);
			div2.appendChild(p2);
			div2.appendChild(link);
			div1.appendChild(div2);
			div0.appendChild(div1);
			count++;
		}
		
		parentDiv.appendChild(div0);
		
	}	
	
	
}