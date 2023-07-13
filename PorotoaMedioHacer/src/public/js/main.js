
		function toggleHidden4(selector) {
			element = document.querySelector(selector);
			elemento = document.getElementById('prov');
			opt = elemento.options[elemento.selectedIndex];
			valor=opt.value;
			if (!!valor) {
			element.hidden = false;
			removeOptions(document.getElementById('dist'));
			CDist(valor)
			} 
			else
			{
			  element.hidden = true;
			}
			
		  }
		  function toggleHidden5(){
			h4=document.getElementById('dist1');
			h4.hidden = true;
		  }
		function CDist(distrito) {
	 const d1 = ["Mecanico Almirante", "Mecanico Bocas del Toro", "Mecanico Changuinola", "Mecanico Chiriquí Grande"];
	 const d2 = ["Mecanico Aguadulce", "Mecanico Antón", "Mecanico La Pintada", "Mecanico Natá", "Mecanico Olá", "Mecanico Penonomé"];
	 const d3 = ["Mecanico Colón", "Mecanico Chagres", "Mecanico Donoso", "Mecanico Portobelo", "Mecanico Santa Isabel", "Mecanico Omar Torrijos Herrera"];
	 const d4 = ["Mecanico Alanje", "Mecanico Barú", "Mecanico Boquerón", "Mecanico Boquete", "Mecanico Bugaba","Mecanico David", "Mecanico Dolega", "Mecanico Gualaca", "Mecanico Remedios", "Mecanico Renacimiento","Mecanico San Félix", "Mecanico San Lorenzo", "Mecanico Tierras Altas", "Mecanico Tolé"];
	 const d5 = ["Mecanico Chepigana", "Mecanico Pinogana", "Mecanico Santa Fe"];
	 const d6 = ["Mecanico Chitré", "Mecanico Las Minas", "Mecanico Los Pozos", "Mecanico Ocú", "Mecanico Parita", "Mecanico Pesé", "Mecanico Santa María"];
	 const d7 = ["Mecanico Guararé", "Mecanico Las Tablas", "Mecanico Los Santos", "Mecanico Macaracas", "Mecanico Pedasí", "Mecanico Pocrí", "Mecanico Tonosí"];
	 const d8 = ["Mecanico Balboa", "Mecanico Chepo", "Mecanico Chimán", "Mecanico Panamá", "Mecanico San Miguelito", "Mecanico Taboga"];
	 const d9 = ["Mecanico Atalaya", "Mecanico Calobre", "Mecanico Cañazas", "Mecanico La Mesa", "Mecanico Las Palmas", "Mecanico Mariato", "Mecanico Montijo", "Mecanico Río de Jesús", "Mecanico San Francisco", "Mecanico Santa Fe", "Mecanico Santiago", "Mecanico Soná"];
	 const d10 = ["Mecanico El Porvenir"];
	 const d11 = ["Mecanico Cémaco", "Mecanico Sambú"];
	 const d12 = ["Mecanico Besikó", "Mecanico Kankintú", "Mecanico Kusapín", "Mecanico Mironó", "Mecanico Müna", "Mecanico Nole Düima", "Mecanico Ñürüm", "Mecanico Jirondai","Mecanico Santa Catalina"];
	 const d13 = ["Mecanico Arraiján", "Mecanico Capira", "Mecanico Chame", "Mecanico La Chorrera", "Mecanico San Carlos"];
	 const d14 = ["Mecanico No", "Funciono", "El", "if", "Mario Hugo"];
	 var long;
	 // Ordena el Array Alfabeticamente;)):
	 d1.sort();
	 d2.sort();
	 d3.sort();
	 d4.sort();
	 d5.sort();
	 d6.sort();
	 d7.sort();
	 d8.sort();
	 d9.sort();
	 d10.sort();
	 d11.sort();
	 d12.sort();
	 d13.sort();
	if (distrito == "Bocas del Toro"){
	  long=d1.length-1;
	  addOptions("dist", d1,long);
	}
	else if(distrito == "Coclé"){
	  long=d2.length-1;
	  addOptions("dist", d2,long);
	}else if(distrito == "Colón"){
	  long=d3.length-1;
	  addOptions("dist", d3,long);
	}else if(distrito == "Chiriquí"){
	  long=d4.length-1;
	  addOptions("dist", d4,long);
	}else if(distrito == "Darién"){
	  long=d5.length-1;
	  addOptions("dist", d5,long);
	}else if(distrito == "Herrera"){
	  long=d6.length-1;
	  addOptions("dist", d6,long);
	}else if(distrito == "Los Santos"){
	  long=d7.length-1;
	  addOptions("dist", d7,long);
	}else if(distrito == "Panamá"){
	  long=d8.length-1;
	  addOptions("dist", d8,long);
	}else if(distrito == "Veraguas"){
	  long=d9.length-1;
	  addOptions("dist", d9,long);
	}else if(distrito == "Guna Yala"){
	  long=d10.length-1;
	  addOptions("dist", d10,long);
	}else if(distrito == "Emberá-Wounaan"){
	  long=d11.length-1;
	  addOptions("dist", d11,long);
	}else if(distrito == "Ngäbe-Buglé"){
	  long=d12.length-1;
	  addOptions("dist", d12,long);
	}else if(distrito == "Panama Oeste"){
	  long=d13.length-1;
	  addOptions("dist", d13,long);
	}
	else
	{
	  long=d14.length-1;
	 addOptions("dist", d14,long);
	}
	 
	}
	
	// Rutina para agregar opciones a un <select>
	function addOptions(domElement, array,long) {
	 var select = document.getElementsByName(domElement)[0];
	 var i;
	 for (i = 0; i <= long; i++) {
	  var option = document.createElement("option");
	  option.text = array[i];
	  option.value = array[i];
	  select.add(option);
	 }
	}
	function removeOptions(selectElement) {
		var i, L = selectElement.options.length - 1;
		for(i = L; i >= 0; i--) {
		   selectElement.remove(i);
		}
	 }