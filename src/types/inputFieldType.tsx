export interface inputFieldType {
    // Define your properties and types here
    id: string;
    type: string;
    question: string;
    maxChoice: number;
    choices: string[];
    disqualify: boolean;
    other: boolean;
  }
  export interface Profileinfo {
    education: {
      internalUse: boolean;
      show: boolean;
    };
    experience: {
      internalUse: boolean;
      show: boolean;
    };
    resume: {
      internalUse: boolean;
      show: boolean;
    };
    profileQuestions: {
      id: string;
      type: string;
      question: string;
      choices: string[];
      maxChoice: number;
      disqualify: boolean;
      other: boolean;
    }[];
  

  }
  export interface PersonalInformation {
    firstName: {
      internalUse: boolean;
      show: boolean;
    };
    lastName: {
      internalUse: boolean;
      show: boolean;
    };
    emailId: {
      internalUse: boolean;
      show: boolean;
    };
    phoneNumber: {
      internalUse: boolean;
      show: boolean;
    };
    nationality: {
      internalUse: boolean;
      show: boolean;
    };
    currentResidence: {
      internalUse: boolean;
      show: boolean;
    };
    idNumber: {
      internalUse: boolean;
      show: boolean;
    };
    dateOfBirth: {
      internalUse: boolean;
      show: boolean;
    };
    gender: {
      internalUse: boolean;
      show: boolean;
    };
    personalQuestions: {
      id: string;
      type: string;
      question: string;
      choices: string[];
      maxChoice: number;
      disqualify: boolean;
      other: boolean;
    }[];
  }
  
  