import React, { useState } from 'react';
import SignupStep1 from '../components/SignupStep1';
import SignupStep2 from '../components/SignupStep2';
import SignupStep3 from '../components/SignupStep3';

export default function Signup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(
    {
      service:false, 
      personal:false,
      userId: '',
      userPass: '',
      userPassCheck: '',
      userName: '',
      emailId: '',
      emailDomain: '',
      phoneNumber1: '010',
      phoneNumber2: '',
      zipcode: '',
      address: ''
    }
  );

  //setp2에서 발생하는 폼의 이벤트가 발생하면 부모에서 처리!!
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }


  //step1에서 체크박스 이벤트가 발생하면 부모에서 처리!!
  const handleCheck = (type, isChecked) => {
    if(type === "all"){
      setFormData({...formData, service:isChecked, personal:isChecked});
    } else {
      setFormData({...formData, [type]:!formData[type]});
    }
  }

  console.log(formData);

  const nextStep = () => {
    setStep(step + 1);
  }

  const preStep = () => {
    setStep(step - 1);
  }

    return (
      <div className='content'>
        { step === 1 && (
          <SignupStep1 next={nextStep}  
                        formData={formData}
                        handleCheck={handleCheck} />        
        ) }
        { step === 2 && (
          <SignupStep2 pre={preStep} 
                        next={nextStep}
                        formData={formData}
                        handleChange={handleChange} />        
        ) }
        { step === 3 && (
          <SignupStep3 />        
        ) }
      </div>
    );
}





