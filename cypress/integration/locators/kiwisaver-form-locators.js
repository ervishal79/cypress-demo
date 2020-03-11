
class KsFormLocators {
    
    get element1(){
        return 'div.control-well'
    }

    get element2(){
        return 'div.label'
    }
 
    get employementStatus1(){
        return 'Employed'
    }

    get employementStatus2(){
        return 'Self-employed'
    }

    get employementStatus3(){
        return 'Not employed'
    }

    get lowRiskProfile(){
        return '#radio-option-01V'
    }

    get medRiskProfile(){
        return '#radio-option-01Y'
    }

    get highRiskProfile(){
        return '#radio-option-021'
    }

    get ksContribution3percent(){
        return '#radio-option-06B'
    }

    get ksContribution4percent(){
        return '#radio-option-06E'
    }
    
    get ksContribution6percent(){
        return '#radio-option-06H'
    }
    
    get ksContribution8percent(){
        return '#radio-option-06K'
    }

    get ksContribution10percent(){
        return '#radio-option-06N'
    }

    get pirOption1(){
        return '10.5%'
    }

    get pirOption2(){
        return '17.5%'
    }

    get pirOption3(){
        return '28%'
    }

    get volContriTxtInput(){
        return 'div.control-well>input'
    }

    get volContridrpdwn(){
        return 'div.control-well>div.well-value'
    }

    get frequency1(){
        return 'one-off'
    }

    get frequency2(){
        return 'Weekly'
    }

    get frequency3(){
        return 'Fortnightly'
    }

    get frequency4(){
        return 'Monthly'
    }

    get frequency5(){
        return 'Annually'
    }

    get submitBtn(){
        return 'div.field-group-set > button > span.label'
    }

    get submitBtnText(){
        return 'View your KiwiSaver retirement projections'
    }

    get resultHeadingText(){
        return 'div.results-heading'
    }

}

export default KsFormLocators;