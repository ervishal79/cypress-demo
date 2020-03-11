class KsCalculatorPage {
    
    get iframeElement() {
        return '#calculator-embed > iframe'
    }
    
    get currentAge(){
        return '[label="Current age"]'
    }

    get currentAgeMsg(){
        return 'This calculator has an age limit of 84 years old.'
    }

    get employmentStatus(){
        return '[label="Employment status"]'
    }

    get employmentStatusMsg(){
        return 'If you are earning a salary or wage, select ‘Employed’. Your employer contributions will be automatically calculated at a rate of 3% of your before-tax salary or wages. You can also select ‘Self-employed’ or ‘Not employed’ and then enter below (in the Voluntary contributions field), the amount and frequency of any contributions that you wish to make.'
    }
   
    get annualSalary(){
        return '[label="Salary or wages per year (before tax)"]'
    }

    get pir(){
        return '[label="Prescribed investor rate (PIR)"]'
    }

    get pirMsg(){
        return "This is your prescribed investor rate (PIR) for tax purposes. If you don't know what your PIR is, click on the ‘Find My Rate’ button."
    }

    get kiwisaverBalance(){
        return '[label="Current KiwiSaver balance"]'
    }

    get kiwisaverBalanceMsg(){
        return "If you do not have a KiwiSaver account, then leave this field blank."
    }

    get volContributions(){
        return '[label="Voluntary contributions"]'
    }

    get volContributionsMsg(){
        return "If you are 'Self-Employed' or 'Not employed', you can make direct contributions to your KiwiSaver account. If you are 'Employed', you can make voluntary contributions in addition to your regular employee contributions."
    }

    get riskProfile(){
        return '[label="Risk profile"]'
    }

    get riskProfileMsg(){
        return "The risk profile affects your potential investment returns:"
    }

    get savingGoalAtRetirement(){
        return '[label="Savings goal at retirement"]'
    }

    get savingGoalAtRetirementMsg(){
        return "Enter the amount you would like to have saved when you reach your intended retirement age. If you aren’t sure what this amount is, you can leave it blank or use the "
    }
    
    get infoIcon(){
        return 'i.icon'
    }
    
}

export default KsCalculatorPage;



