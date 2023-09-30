
import Nav from "../components/Nav"
import Uploadfiles from "../components/Uploadfiles"
import PersonalInfo from "../components/PersonalInfo"
import { PersonalInformation, Profileinfo } from "../types/inputFieldType"
import Profile from "../components/Profile"
import AdditionalQuestion from "../components/AdditionalQuestion"
const Home = () => {
  const initialProfile : Profileinfo= {
    education: {
      internalUse: false,
      show: false,
    },
    experience: {
      internalUse: false,
      show: false,
    },
    resume: {
      internalUse: false,
      show: false,
    },
    profileQuestions:[]
  
  }
 
  const initialPersonalInformation: PersonalInformation = {
    firstName: {
      internalUse: false,
      show: false,
    },
    lastName: {
      internalUse: false,
      show: false,
    },
    emailId: {
      internalUse: false,
      show: false,
    },
    phoneNumber: {
      internalUse: false,
      show: false,
    },
    nationality: {
      internalUse: false,
      show: false,
    },
    currentResidence: {
      internalUse: false,
      show: false,
    },
    idNumber: {
      internalUse: false,
      show: false,
    },
    dateOfBirth: {
      internalUse: false,
      show: false,
    },
    gender: {
      internalUse: false,
      show: false,
    },
    personalQuestions: [],
  };


  return (
    <>
    <div className="flex flex-col gap-4 justify-between">
  <Nav />
<Uploadfiles />
<PersonalInfo personalInformation={initialPersonalInformation} />      
<Profile  profilevalue={initialProfile} />    
<AdditionalQuestion/> 
  </div>
    </>
  )
}

export default Home