let currentDisplay = "";
      let value = '';
      function calculator(value) {
        if (value === '+') {
            currentDisplay=currentDisplay + '+';
            document.querySelector('#display').value = currentDisplay;

        } else if(value === '-'){
            currentDisplay=currentDisplay + '-';
            document.querySelector('#display').value = currentDisplay;
        } else if(value === '*'){
            currentDisplay=currentDisplay + '*';
            document.querySelector('#display').value = currentDisplay;
        } else if(value === '/'){
            currentDisplay=currentDisplay + '/';
            document.querySelector('#display').value = currentDisplay;

        }else if(value=== '1'){
            currentDisplay=currentDisplay + '1';
            document.querySelector('#display').value = currentDisplay;
      }else if(value=== '2'){
            currentDisplay=currentDisplay + '2';
            document.querySelector('#display').value = currentDisplay;
      }else if(value=== '3'){
            currentDisplay=currentDisplay + '3';
            document.querySelector('#display').value = currentDisplay;
      }else if(value=== '4'){
            currentDisplay=currentDisplay + '4';
            document.querySelector('#display').value = currentDisplay;
        }else if(value=== '5'){
            currentDisplay=currentDisplay + '5';
            document.querySelector('#display').value = currentDisplay;
        }else if(value=== '6'){
            currentDisplay=currentDisplay + '6';
            document.querySelector('#display').value = currentDisplay;
        }else if(value=== '7'){
            currentDisplay=currentDisplay + '7';
            document.querySelector('#display').value = currentDisplay;
        }else if(value=== '8'){
            currentDisplay=currentDisplay + '8';
            document.querySelector('#display').value = currentDisplay;
        }else if(value=== '9'){
            currentDisplay=currentDisplay + '9';
            document.querySelector('#display').value = currentDisplay;
        }else if(value=== '0'){
            currentDisplay=currentDisplay + '0';
            document.querySelector('#display').value = currentDisplay;
        }else if(value=== '.'){
            currentDisplay=currentDisplay + '.';
            document.querySelector('#display').value = currentDisplay;
        }else if(value=== 'c'){
            currentDisplay='';
            document.querySelector('#display').value = currentDisplay;
        }else if(value=== '='){
         let result = eval(currentDisplay);
            document.querySelector('#display').value = result;
        }
    }
