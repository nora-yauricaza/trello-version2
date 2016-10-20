window.addEventListener("load", function(){
	var contenedor=document.getElementById("contenedor");
	var subContenedor=document.getElementById("subContenedor");
	var listaAdd = document.getElementById("listaAdd");

	listaAdd.addEventListener("click", function(){
		hiddenLista(this);
		showLista();
	});

	function hiddenLista(elemento){
		elemento.style.display="none";
	}

	function showLista(){
		var form=document.createElement("form");
		var inputList=document.createElement("input");
		var botonListSave=document.createElement("button");
		var botonListGetOut=document.createElement("button");

		inputList.setAttribute("id","inputList")
		inputList.setAttribute("placeholder","Añadir una Lista...");
		botonListSave.setAttribute("id", "botonListSave");

		botonListSave.textContent="Guardar";
		botonListSave.type="button";

		form.appendChild(inputList);
		form.appendChild(botonListSave);
		form.appendChild(botonListGetOut);
		listaAdd.parentElement.appendChild(form);

		form.classList.add("divList");
		form.setAttribute("id", "form");
		inputList.classList.add("input");
		botonListSave.classList.add("btn","btn-success");
		botonListGetOut.classList.add("icon-cross");

		inputList.focus();

		botonListSave.addEventListener("click", function(e){
			e.preventDefault();
			form.style.display="none";
			imprimirLista(inputList);
			blockLista();
		});

		botonListGetOut.addEventListener("click",salir);	
		function salir(){			
			form.style.display="none";
		}
	}

	function blockLista(){
		var block = document.createElement("div");
		contenedor.appendChild(block);
		block.appendChild(listaAdd);
		block.setAttribute("class", "block");
		listaAdd.style.display = "inline-block";
		var form = document.getElementById("form");
		form.style.display = "none";
	}

		
	function imprimirLista(inputList){
		var contenedorList=document.createElement("div")
		var nameList=document.createElement("div");
		var addTarjeta=document.createElement("a");

		addTarjeta.textContent="Añadir tarjeta...";
		nameList.innerHTML=inputList.value;

		contenedorList.setAttribute("id","contenedorList");
		addTarjeta.setAttribute("id","addTarjeta");
		contenedorList.classList.add("divList");

		contenedorList.appendChild(nameList);
		contenedorList.appendChild(addTarjeta);
		listaAdd.parentElement.appendChild(contenedorList);

		addTarjeta.addEventListener("click", function(e){
			e.preventDefault;
			addTarjeta.style.display="none";
			tarjeta(contenedorList, addTarjeta);
		});

	}

	function tarjeta(contenedorList, addTarjeta){
		var contenedorTextArea=document.createElement("form");
		var textArea=document.createElement("textarea");
		var botonTarjetaAdd=document.createElement("button");
		var botonTarjetaGetOut=document.createElement("button");
	
		contenedorTextArea.setAttribute("id","contenedorTextArea");
		botonTarjetaAdd.classList.add("btn","btn-success");
		contenedorTextArea.classList.add("divTarjeta");

		contenedorTextArea.appendChild(textArea);
		contenedorTextArea.appendChild(botonTarjetaAdd);
		contenedorTextArea.appendChild(botonTarjetaGetOut);
		contenedorList.appendChild(contenedorTextArea);

		var tarjeta = document.createElement("div");
		contenedorList.insertBefore(tarjeta, addTarjeta);

		botonTarjetaAdd.textContent="Añadir";
		botonTarjetaGetOut.classList.add("icon-cross");
		botonTarjetaAdd.addEventListener("click",function(e){
			e.preventDefault();
			contenedorTextArea.style.display = "none";
			imprimirTarjeta(textArea, tarjeta, contenedorList, addTarjeta);
		});
	}

	function imprimirTarjeta(textArea, tarjeta, contenedorList, addTarjeta){
		var nameTextArea=document.createElement("div");

		nameTextArea.innerText = textArea.value;
		nameTextArea.classList.add("white");

		tarjeta.appendChild(nameTextArea);
		addTarjeta.style.display = "inline-block";
	}
	
	// function empiezaMover(e) {
	// 	e.dataTransfer.setData("text", this.id);
	// 	this.style.opacity = "0.9";
	// 	this.style.background = null;
	// 	this.classList.add("divCardOver");
	// }

	// function MoverSobre(e) {
	// 	e.preventDefault();
	// }

	// function terminaMover(e) {
	// 	this.style.opacity = null;
	// 	this.style.background="white";
	// 	this.classList.add("animated", "swing");
	// }
	

});

