
class Init {

    constructor() {
        this.activeElement = document.activeElement;
        this.activeElementValue = this.activeElementValue.value;
        document.addEventListener('keydown', this.getKeysPressed);
        console.log(this.activeElement);
    }

    getKeysPressed() {
        const randomNumber = 0;
        if(event.altKey && event.key === 'a') {
             randomNumber = new Pesel(this.activeElementValue);
        } else if(event.altKey && event.key === 'b') {
             randomNumber = new Nip(this.activeElementValue);
        } else if(event.altKey && event.key === 'c') {F
             randomNumber = new Nrb(this.activeElementValue);
        } else if(event.altKey && event.key === 'd') {
             randomNumber = new IdNumber(this.activeElementValue);
        }
        
        activeElement.value = randomNumber.generate();
    }   
}

class Pesel {
    gender = 'random';
    age = 'random';
    
    constructor(activeElementValue) {
        if(activeElementValue.substring(0,1) === "!" || activeElementValue.substring(0,1) === "@" ) {
            this.gender = activeElementValue.substring(0,1);
        }
           const regex = /^(1[89]|[2-9]\d)$/;

           if(activeElementValue.substring(0,2).match(regex)) {
            this.age = activeElementValue.substring(0,2);

        }  else if(activeElementValue.substring(1,3).match(regex)) {
            this.age = activeElementValue.substring(1,3);
        }
    }

    generate() {
        
        const peselDate = generateDate();
        const peselNumber = generateNumber();
        const peselGender = generateGender();
        const peselControl = generateControl(peselDate,peselNumber,peselGender);
        return `${peselDate} + ${peselNumber} + ${peselGender} + ${peselControl}`;
    }

    generateDate() {

    if(this.age === 'random') {
        this.age = Math.floor((Math.random * 100) + 18);
    }
       const minDate = (new Date() - new Date.SetFullYear(this.age));
       const maxDate = (new Date() - new Date.SetFullYear(this.age + 1));

       const RandomDate = Math.floor((Math.random() * maxDate) + minDate);

       const peselYear = RandomDate.GetFullYear.Substring(3,4);
       const peselMonth = RandomDate.GetFullMonth.Substring(5,6);
       if(RandomDate.GetFullYear.Substring(0,1) === '10') {
           peselMonth += 1;
       } else {
           peselMonth += 21;
       }
       const peselDay = RandomDate.GetFullMonth.Substring(7,8);

       return `${peselYear}${peselMonth}${peselDay}`
    }

    generateNumber() {
        const randomNumber = Math.floor((Math.random() * 999));
        if(randomNumber < 10) {
            randomNumber = '00' + randomNumber.toString;
        } else if (randomNumber < 100) {
            randomNumber = '0' + randomNumber.toString;
        } else {
            randomNumber = randomNumber.toString();
        }
        return randomNumber;
    } 

    generateGender() {
        const genderNumber;
        if (this.gender === '!') {
            genderNumber = (Math.floor(Math.random() * 4) * 2 + 1);
        } else if(this.gender === '@') {
            genderNumber = (Math.floor(Math.random() * 4) * 2);
        } else { 
            genderNumber = Math.floor((Math.random() * 10));
        }
        return genderNumber.toString();
    }

    generateControl(Date,Number,Gender) {
        const splitNumbers = (Date + Number + Gender).split('');
        const controlWeights = [1,3,7,9,1,3,7,9,1,3];
        const controlArray = [];

        for(i = 0; i < 10; i++) {
            const weightedNumber = splitNumbers[i] * controlWeights[i];
            if(weightedNumber >= 10) {
                controlArray.push(weightedNumber.substring(1,2));
             } else {
                controlArray.push(weightedNumber);
                }
            }

        return controlArray.reduce(prevValue,curValue,()=> {
            const sumValue = prevValue + curValue;
            if (sumValue >= 10) {
                return sumValue.substring(1,2).parseInt();
            } else {
                return sumValue
            }
        }
      )
    }
}
const a = [dfsdfds,gasdg,gasdgsdag,gsadgsdag,gasdgsdag,gasdgsdag];


Init();