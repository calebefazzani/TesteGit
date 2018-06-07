angular.module("conversor", []);
	angular.module("conversor").controller("ConversorCtrl", function($scope){
		$scope.decBin = function(){
			var numero;
			var cxtext;
			/*Decimal para outros*/
			if(document.getElementById("bin").value == "" && document.getElementById("oct").value == "" && document.getElementById("hex").value == ""){
				if(document.getElementById("dec").value == ""){
					numero = 0;
				}else{
					$scope.dec = $scope.decimal;
					numero = parseInt($scope.dec);
				}
				var binario = numero;
				var hexdec = numero;
				var octal = numero;
				var vetorBin = new Array();
				var vetorOct = new Array();
				var vetorHex = new Array();
				var i = 0;
				var bin = "";
				var oct = "";
				var hex = "";
				while(binario >=2){
					vetorBin[i] = binario %2;
					binario = Math.floor(binario/2);
					i++;
				}
				i = 0;
				vetorBin[vetorBin.length] = binario;
				for(var i = vetorBin.length -1; i>=0; i--){
					bin += vetorBin[i];
				}
				i = 0;
				while(octal >=8){
					vetorOct[i] = octal %8;
					octal = Math.floor(octal/8);
					i++;
				}
				i=0;
				vetorOct[vetorOct.length] = octal;
				for(var i = vetorOct.length -1; i>=0; i--){
					oct += vetorOct[i];
				}
				i = 0;
				while(hexdec >=16){
					vetorHex[i] = hexdec %16;
					hexdec = Math.floor(hexdec/16);
					switch(vetorHex[i]){
						case 10:
							vetorHex[i] = "A";
							break;
						case 11:
							vetorHex[i] = "B";
							break;
						case 12:
							vetorHex[i] = "C";
							break;
						case 13:
							vetorHex[i] = "D";
							break;
						case 14:
							vetorHex[i] = "E";
							break;
						case 15:
							vetorHex[i] = "F";
							break;
					}
					i++;
				}
				i = 0;
				switch(hexdec){
					case 15: vetorHex[vetorHex.length] = "F"; break;
					case 14: vetorHex[vetorHex.length] = "E"; break;
					case 13: vetorHex[vetorHex.length] = "D"; break;
					case 12: vetorHex[vetorHex.length] = "C"; break;
					case 11: vetorHex[vetorHex.length] = "B"; break;
					case 10: vetorHex[vetorHex.length] = "A"; break;
					default: vetorHex[vetorHex.length] = hexdec; break;
				}
				for(var i = vetorHex.length -1; i>=0; i--){
					hex += vetorHex[i];
				}
				/*Binario para decimal*/
			}else if(document.getElementById("dec").value == "" && document.getElementById("oct").value == "" && document.getElementById("hex").value == ""){
				if(document.getElementById("bin").value == ""){
					cxtext = 0;
				}else{
					cxtext = $scope.binario;
				}
				var tamanho = cxtext.length-1;
				var numero = 0;
				for(var i = 0; i<= tamanho; i++){
					var valor = cxtext.charAt(i);
					numero+= parseInt(valor) * Math.pow(2, tamanho-i);
				}
				var bin = $scope.binario;
				var hexdec = numero;
				var octal = numero;
				var vetorOct = new Array();
				var vetorHex = new Array();
				var i = 0;
				var oct = "";
				var hex = "";
				while(octal >=8){
					vetorOct[i] = octal %8;
					octal = Math.floor(octal/8);
					i++;
				}
				i=0;
				vetorOct[vetorOct.length] = octal;
				for(var i = vetorOct.length -1; i>=0; i--){
					oct += vetorOct[i];
				}
				i = 0;
				while(hexdec >=16){
					vetorHex[i] = hexdec %16;
					hexdec = Math.floor(hexdec/16);
					switch(vetorHex[i]){
						case 10:
							vetorHex[i] = "A";
							break;
						case 11:
							vetorHex[i] = "B";
							break;
						case 12:
							vetorHex[i] = "C";
							break;
						case 13:
							vetorHex[i] = "D";
							break;
						case 14:
							vetorHex[i] = "E";
							break;
						case 15:
							vetorHex[i] = "F";
							break;
					}
					i++;
				}
				i = 0;
				switch(hexdec){
					case 15: vetorHex[vetorHex.length] = "F"; break;
					case 14: vetorHex[vetorHex.length] = "E"; break;
					case 13: vetorHex[vetorHex.length] = "D"; break;
					case 12: vetorHex[vetorHex.length] = "C"; break;
					case 11: vetorHex[vetorHex.length] = "B"; break;
					case 10: vetorHex[vetorHex.length] = "A"; break;
					default: vetorHex[vetorHex.length] = hexdec; break;
				}
				for(var i = vetorHex.length -1; i>=0; i--){
					hex += vetorHex[i];
				}
			/*Octal para decimal*/
			}else if(document.getElementById("dec").value == "" && document.getElementById("bin").value == "" && document.getElementById("hex").value == ""){
				if(document.getElementById("oct").value == ""){
					cxtext = 0;
				}else{
					cxtext = $scope.octal;
				}
				var tamanho = cxtext.length-1;
				var numero = 0;
				for(var i = 0; i<= tamanho; i++){
					var valor = cxtext.charAt(i);
					numero+= parseInt(valor) * Math.pow(8, tamanho-i);
				}
				var binario = numero;
				var hexdec = numero;
				var oct = $scope.octal;
				var vetorBin = new Array();
				var vetorHex = new Array();
				var i = 0;
				var bin = "";
				var hex = "";
				while(binario >=2){
					vetorBin[i] = binario %2;
					binario = Math.floor(binario/2);
					i++;
				}
				i = 0;
				vetorBin[vetorBin.length] = binario;
				for(var i = vetorBin.length -1; i>=0; i--){
					bin += vetorBin[i];
				}
				i = 0;
				while(hexdec >=16){
					vetorHex[i] = hexdec %16;
					hexdec = Math.floor(hexdec/16);
					switch(vetorHex[i]){
						case 10:
							vetorHex[i] = "A";
							break;
						case 11:
							vetorHex[i] = "B";
							break;
						case 12:
							vetorHex[i] = "C";
							break;
						case 13:
							vetorHex[i] = "D";
							break;
						case 14:
							vetorHex[i] = "E";
							break;
						case 15:
							vetorHex[i] = "F";
							break;
					}
					i++;
				}
				i = 0;
				switch(hexdec){
					case 15: vetorHex[vetorHex.length] = "F"; break;
					case 14: vetorHex[vetorHex.length] = "E"; break;
					case 13: vetorHex[vetorHex.length] = "D"; break;
					case 12: vetorHex[vetorHex.length] = "C"; break;
					case 11: vetorHex[vetorHex.length] = "B"; break;
					case 10: vetorHex[vetorHex.length] = "A"; break;
					default: vetorHex[vetorHex.length] = hexdec; break;
				}
				for(var i = vetorHex.length -1; i>=0; i--){
					hex += vetorHex[i];
				}
				/*Hexadecimal para decimal*/
			}else if(document.getElementById("dec").value == "" && document.getElementById("bin").value == "" && document.getElementById("oct").value == ""){
				if(document.getElementById("hex").value == ""){
					cxtext = 0;
				}else{
					cxtext = $scope.hexadecimal;
				}
				var tamanho = cxtext.length-1;
				var numero = 0;
				for(var i = 0; i<= tamanho; i++){
					var valor = cxtext.charAt(i);
					switch(valor){
						case "A":case"a": valor = 10;break;
						case "B":case"b": valor = 11;break;
						case "C":case"c": valor = 12;break;
						case "D":case"d": valor = 13;break;
						case "E":case"e": valor = 14;break;
						case "F":case"f": valor = 15;break;
					}
					numero+= parseInt(valor) * Math.pow(16, tamanho-i);
				}
				var binario = numero;
				var octal = numero;
				var vetorBin = new Array();
				var vetorOct = new Array();
				var i = 0;
				var bin = "";
				var oct = "";
				var hex = $scope.hexadecimal;
				while(binario >=2){
					vetorBin[i] = binario %2;
					binario = Math.floor(binario/2);
					i++;
				}
				i = 0;
				vetorBin[vetorBin.length] = binario;
				for(var i = vetorBin.length -1; i>=0; i--){
					bin += vetorBin[i];
				}
				i = 0;
				while(octal >=8){
					vetorOct[i] = octal %8;
					octal = Math.floor(octal/8);
					i++;
				}
				i=0;
				vetorOct[vetorOct.length] = octal;
				for(var i = vetorOct.length -1; i>=0; i--){
					oct += vetorOct[i];
				}

			}
			
			$scope.dec = numero;
			$scope.bin = bin;
			$scope.hex = hex;
			$scope.oct = oct;
			
		}
	});