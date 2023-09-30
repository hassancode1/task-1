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