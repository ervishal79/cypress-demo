
class KsFormLocators {
    
    get txtInputElement(){
        return 'div.control-well>input'
    }

    get dropdownElement(){
        return 'div.control-well'
    }

    get element2(){
        return 'div.label'
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

    get volContriTxtInput(){
        return 'div.control-well>input'
    }

    get volContridrpdwn(){
        return 'div.control-well>div.well-value'
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