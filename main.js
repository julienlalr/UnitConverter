var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){
	inputTypeValue = inputType.value;
	resultTypeValue = resultType.value;
	if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){
		//meter to kilometer 
        result.value = Number(input.value) * 0.001;
	}else if(inputTypeValue === "meter" && resultTypeValue==="meter"){
		//meter to meter 
        result.value = input.value
    }else if(inputTypeValue === "meter" && resultTypeValue==="decimeter"){
            //meter to decimeter
            result.value = Number(input.value) * 10;
    }else if(inputTypeValue === "meter" && resultTypeValue==="centimeter"){
            //meter to Centimeter 
            result.value = Number(input.value) * 100;
    }else if(inputTypeValue === "meter" && resultTypeValue==="millimeter"){
        //meter to millimeter
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "meter" && resultTypeValue==="micrometer"){
        //meter to micrometer
        result.value = Number(input.value) * 1000000;
    }
    else if(inputTypeValue === "meter" && resultTypeValue==="nanometer"){
        //meter to nanometer
        result.value = Number(input.value) * 1000000000;
    }else if(inputTypeValue === "meter" && resultTypeValue==="picometer"){
        //meter to picometer
        result.value = Number(input.value) * 1000000000000;
    }else if(inputTypeValue === "meter" && resultTypeValue==="femtometer"){
        //meter to femtometer
        result.value = Number(input.value) * 1000000000000000;
    }else if(inputTypeValue === "meter" && resultTypeValue==="decameter"){
        //meter to decameter
        result.value = Number(input.value) * 0.1;
    }else if(inputTypeValue === "meter" && resultTypeValue==="hectometer"){
        //meter to hectometer
        result.value = Number(input.value) * 0.01;
    }else if(inputTypeValue === "meter" && resultTypeValue==="megameter"){
        //meter to megameter
        result.value = Number(input.value) * 0.000001;
    }else if(inputTypeValue === "meter" && resultTypeValue==="gigameter"){
        //meter to gigameter
        result.value = Number(input.value) * 0.000000001;
    }else if(inputTypeValue === "meter" && resultTypeValue==="terameter"){
        //meter to terameter
        result.value = Number(input.value) * 0.000000000001;
    }




	if(inputTypeValue === "kilometer" && resultTypeValue==="meter"){
		//kilometer to meter  
		result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "kilometer" && resultTypeValue==="terameter"){
        //kilometer to terameter
        result.value = Number(input.value) * 0.000000001;
    }else if(inputTypeValue === "kilometer" && resultTypeValue==="gigameter"){
        //kilometer to gigameter
        result.value = Number(input.value) * 0.000001;
    }else if(inputTypeValue === "kilometer" && resultTypeValue==="megameter"){
        //kilometer to megameter
        result.value = Number(input.value) * 0.001;
    }else if(inputTypeValue === "kilometre" && resultTypeValue==="kilometer"){
		//kilometer to kilometer 
		result.value = input.value
    }else if(inputTypeValue === "kilometer" && resultTypeValue==="hectometer"){
        //kilometer to hectometer
        result.value = Number(input.value) * 10;
    }else if(inputTypeValue === "kilometer" && resultTypeValue==="decameter"){
        //kilometer to decameter
        result.value = Number(input.value) * 100;
    }else if(inputTypeValue === "kilometer" && resultTypeValue==="decimeter"){
        //kilometer to decimeter
        result.value = Number(input.value) * 10000;
    }else if(inputTypeValue === "kilometer" && resultTypeValue==="centimeter"){
		//kilometer to Centimeter 
		result.value = Number(input.value) * 100000;
	}else if(inputTypeValue === "kilometer" && resultTypeValue==="millimeter"){
		//kilometer to millimeter 
		result.value = Number(input.value) * 1000000;
	}else if(inputTypeValue === "kilometer" && resultTypeValue==="micrometer"){
		//kilometer to micrometer 
		result.value = Number(input.value) * 1000000000;
	}else if(inputTypeValue === "kilometer" && resultTypeValue==="nanometer"){
		//kilometer to nanometer 
		result.value = Number(input.value) * 1000000000000;
	}else if(inputTypeValue === "kilometer" && resultTypeValue==="picometer"){
		//kilometer to picometer 
		result.value = Number(input.value) * 1000000000000000;
	}else if(inputTypeValue === "kilometer" && resultTypeValue==="femtometer"){
		//kilometer to femtometer 
		result.value = Number(input.value) * 1000000000000000000;
    }
    



    if(inputTypeValue === "terameter" && resultTypeValue==="terameter"){
		//terameter to meter  
		result.value = Number(input.value) ;
    }else if(inputTypeValue === "terameter" && resultTypeValue==="gigameter"){
        //terameter to terameter
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "terameter" && resultTypeValue==="megameter"){
        //terameter to gigameter
        result.value = Number(input.value) * 1000000;
    }else if(inputTypeValue === "terameter" && resultTypeValue==="kilometer"){
        //terameter to megameter
        result.value = Number(input.value) * 1000000000;
    }else if(inputTypeValue === "terameter" && resultTypeValue==="hectometer"){
		//terameter to kilometer 
		result.value = input.value *10000000000;
    }else if(inputTypeValue === "terameter" && resultTypeValue==="decameter"){
        //terameter to hectometer
        result.value = Number(input.value) * 100000000000;
    }else if(inputTypeValue === "terameter" && resultTypeValue==="meter"){
        //terameter to decameter
        result.value = Number(input.value) * 1000000000000;
    }else if(inputTypeValue === "terameter" && resultTypeValue==="decimeter"){
        //terameter to decimeter
        result.value = Number(input.value) * 10000000000000;
    }else if(inputTypeValue === "terameter" && resultTypeValue==="centimeter"){
		//terameter to Centimeter 
		result.value = Number(input.value) * 100000000000000;
	}else if(inputTypeValue === "terameter" && resultTypeValue==="millimeter"){
		//terameter to millimeter 
		result.value = Number(input.value) * 100000000000000000;
	}else if(inputTypeValue === "terameter" && resultTypeValue==="micrometer"){
		//terameter to micrometer 
		result.value = Number(input.value) * 100000000000000000000;
	}else if(inputTypeValue === "terameter" && resultTypeValue==="nanometer"){
		//terameter to nanometer 
		result.value = Number(input.value) * 100000000000000000000000;
	}else if(inputTypeValue === "terameter" && resultTypeValue==="picometer"){
		//terameter to picometer 
		result.value = Number(input.value) * 100000000000000000000000000;
	}else if(inputTypeValue === "terameter" && resultTypeValue==="femtometer"){
		//terameter to femtometer 
		result.value = Number(input.value) * 100000000000000000000000000000;
	}
    


	if(inputTypeValue === "Centimeter" && resultTypeValue==="kilometer"){
		//Centimeter to kilometer 
		result.value = Number(input.value) * 0.00001;
	}else if(inputTypeValue === "Centimeter" && resultTypeValue==="meter"){
		//Centimeter to meter  
		result.value = Number(input.value) * 0.01;
	}else if(inputTypeValue === "Centimeter" && resultTypeValue==="Centimeter"){
		//Centimeter to Centimeter 
		result.value = input.value
    }
    
	
}

