import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Checkbox, Switch, Select, Button } from "antd";
import {
  CloseCircleOutlined,
  EditOutlined 

} from "@ant-design/icons";
import Addquestion from "./Addquestion";
import { inputFieldType } from "../types/inputFieldType";
import Editquestion from "./Editquestion";

import Plus from "../assets/plus.svg"

type PersonalInformation = {
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
};
type PersonalInfoProps = {
  personalInformation: PersonalInformation;
};


const initialInputFields: inputFieldType[] = [
  {
    id: uuidv4(),
    type: "paragraph",
    question: "",
    maxChoice: 0,
    choices: [""],
    disqualify: false,
    other: false,
  },
  {
    id: uuidv4(),
    type: "MultipleChoice",
    question: "",
    maxChoice: 0,
    choices: [""],
    disqualify: false,
    other: false,
  },
  {
    id: uuidv4(),
    type: "dropdown",
    question: "",
    maxChoice: 0,
    choices: [""],
    disqualify: false,
    other: false,
  },
  {
    id: uuidv4(),
    type: "Videoquestion",
    question: "",
    maxChoice: 0,
    choices: [],
    disqualify: false,
    other: false,
  },
  {
    id: uuidv4(),
    type: "shortanswer",
    question: "",
    maxChoice: 0,
    choices: [""],
    disqualify: false,
    other: false,
  },
  {
    id: uuidv4(),
    type: "Yes/No",
    question: "",
    maxChoice: 0,
    choices: [""],
    disqualify: false,
    other: false,
  },
];

const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInformation }) => {
  const [questionType, setQuestionType] = useState<string>("paragraph");
  const [openQuestion, setOpenQuestion] = useState<boolean>(false);
  const [inputFields, setInputFields] =  useState<inputFieldType[]>(initialInputFields);

  const [newInputField, setNewInputField] = useState<inputFieldType | null>(null);
  const [savedInputFields, setSavedInputFields] = useState<inputFieldType[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [updatedPersonalInformation, setUpdatedPersonalInformation] = useState<PersonalInformation>(personalInformation);

  console.log(updatedPersonalInformation)
  const handlePersonalInfo = (field: keyof PersonalInformation, checkboxType: "internalUse" | "show") => {
    const updatedInfo = { ...updatedPersonalInformation };
    updatedInfo[field][checkboxType] = !updatedInfo[field][checkboxType];
    setUpdatedPersonalInformation(updatedInfo);
  };


  const handleEdit = (index: number) => {
    setEditIndex(index);
    setOpenQuestion(false)
  };

  const handleSaveEdit = () => {
  
      setEditIndex(null);
  
  };
  const handleChange = (value: string) => {
    setQuestionType(value);
    setNewInputField((prevInputField) => ({
      ...(prevInputField as inputFieldType), 
      type: value,
    }));
  };
 
  const handleOpenAddQuestion = () => {
    setNewInputField({
      id: uuidv4(),
      type:"paragraph",
      question: "",
      maxChoice: 0,
      choices: [],
      disqualify: false,
      other: false,
    });
    setOpenQuestion(true);
    setEditIndex(null);
  };

  
 const  handleDeleteQuestion = ()=>{

setOpenQuestion(false)
setNewInputField({
  type:"paragraph",
  id: uuidv4(),
  question: "",
  maxChoice: 0,
  choices: [],
  disqualify: false,
  other: false,
});
setQuestionType('paragraph')
setInputFields(initialInputFields.map((field) => ({ ...field })));
  }

  
  
  const handleSave = () => {
    if (newInputField?.type === "" || newInputField?.question === "") return;
  
    if (newInputField) {
      setSavedInputFields([...savedInputFields, newInputField]);
  
   
  
      setQuestionType('paragraph');
      setOpenQuestion(false);
     

    }
    setInputFields(initialInputFields.map((field) => ({ ...field })));
    setNewInputField({
      id: uuidv4(),
      type: "paragraph",
      question: "",
      maxChoice: 0,
      choices: [""],
      disqualify: false,
      other: false,
    });
  };
  
  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedInputFields = [...inputFields];
    (updatedInputFields[index] as any)[field] = value;
    setInputFields(updatedInputFields);

  
    if (newInputField) {
      
      const updatedNewInputField = { ...newInputField };
      (updatedNewInputField as any)[field] = value;
      setNewInputField(updatedNewInputField);
    }
  };
  const handleCheckboxChange = (index: number, field: string, checked: boolean) => {
    const updatedInputFields = [...inputFields];
    (updatedInputFields[index] as any)[field] = checked;
    setInputFields(updatedInputFields);
    if (newInputField) {
      const updatedNewInputField = { ...newInputField };
      (updatedNewInputField as any)[field] = checked;
      setNewInputField(updatedNewInputField);
    }
  };
  

  const handleEditCheckboxChange = (field: "disqualify" | "other", checked: boolean) => {
    if (editIndex !== null) {
      const updatedFields = [...savedInputFields];
      const fieldToUpdate = { ...updatedFields[editIndex] };
  
      
      fieldToUpdate[field] = checked;
  
      updatedFields[editIndex] = fieldToUpdate;
      
      setSavedInputFields(updatedFields);
    }
  };
  
  const handleMaxChoiceChange = (index: number, value: string) => {
    const parsedValue = parseInt(value, 10);
  
 
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      const updatedInputFields = [...inputFields];
      updatedInputFields[index].maxChoice = parsedValue;
      setInputFields(updatedInputFields);
      if (newInputField) {
        const updatedNewInputField = { ...newInputField };
        updatedNewInputField.maxChoice = parsedValue;
        setNewInputField(updatedNewInputField);
      }
    }
  };
  

 const handleEditmaxchoice = (e: React.ChangeEvent<HTMLInputElement>, index:number, field:inputFieldType) => {
  const updatedField = { ...field, maxChoice: parseInt(e.target.value) };
  const updatedFields = [...savedInputFields];
  updatedFields[index] = updatedField;

  setSavedInputFields(updatedFields);

  };
  
  const handleChoiceChange = (
    inputIndex: number,
    choiceIndex: number,
    value: string
  ) => {
    const updatedInputFields = [...inputFields];
    updatedInputFields[inputIndex].choices[choiceIndex] = value;
    setInputFields(updatedInputFields);

    
    if (newInputField) {
      const updatedNewInputField = { ...newInputField };
      updatedNewInputField.choices[choiceIndex] = value;
      setNewInputField(updatedNewInputField);
    }
  };

  const addChoice = (index: number) => {
    const updatedInputFields = [...inputFields];
    updatedInputFields[index].choices.push("");
    setInputFields(updatedInputFields);

   
    if (newInputField) {
      const updatedNewInputField = { ...newInputField };
      updatedNewInputField.choices.push("");
      setNewInputField(updatedNewInputField);
    }
  };


  const handleEditQuestionChange = (e: React.ChangeEvent<HTMLInputElement>, index:number, field:inputFieldType) => {
    const updatedField = { ...field, question: e.target.value };
    const updatedFields = [...savedInputFields];
    updatedFields[index] = updatedField;

    setSavedInputFields(updatedFields);
  };


  const handleEditChoiceChange = (
    choiceIndex: number,
    e: React.ChangeEvent<HTMLInputElement>,
    field:inputFieldType,
    index:number,
    
  ) => {
    const updatedField = { ...field };
    updatedField.choices[choiceIndex] = e.target.value;
    
    const updatedFields = [...savedInputFields];
    updatedFields[index] = updatedField;

    setSavedInputFields(updatedFields);
  };
  const handleDelete = (index: number) => {
    if (index >= 0) {
      const updatedSavedInputFields = [...savedInputFields];
      updatedSavedInputFields.splice(index, 1);
      setSavedInputFields(updatedSavedInputFields);
      setEditIndex(null); 
    }
  };
 console.log(savedInputFields) 
  return (
    <div className="shadow-md rounded-lg mt-5 bg-white w-96  h-full ">
      <div className="bg-card w-full px-5 py-4 rounded-tl-lg rounded-tr-lg">
        <h2 className="font-medium"> Personal Information</h2>
      </div>
      <div className="px-3 mt-4 pb-4 pt-4">
        <div>
          <h2 className="font-medium">First Name</h2>
          <div className="border-b border-gray-300 mb-2 py-2 px-3"></div>
        </div>
        <div>
          <h2 className="font-medium">Last Name</h2>
          <div className="border-b border-gray-300 mb-2 py-2 px-3"></div>
        </div>
        <div>
          <h2 className="font-medium">Email</h2>
          <div className="border-b border-gray-300 mb-2 py-2 px-3"></div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <h2 className="font-medium">Phone </h2>
              <span className="text-sm"> (without dial code)</span>
            </div>

            <div className="flex gap-4 items-center">
              <Checkbox checked={personalInformation.phoneNumber.internalUse}
                    onChange={() => handlePersonalInfo('phoneNumber', 'internalUse')}

              >
                intenal
              </Checkbox>
              <Switch
                checked={personalInformation.phoneNumber.show}
                onChange={() => handlePersonalInfo('phoneNumber', 'show')}
                size="small"
              />
              <span className="text-sm">hide</span>
            </div>
          </div>
          <div className="border-b border-gray-300 mb-2 py-2 px-3"></div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <h2 className="font-medium">Nationality </h2>
            </div>

            <div className="flex gap-4 items-center">
              <Checkbox checked={personalInformation.nationality.internalUse}
                 onChange={() => handlePersonalInfo('nationality', 'internalUse')}
              >
                intenal
              </Checkbox>
              <Switch
                checked={personalInformation.nationality.show}
                onChange={() => handlePersonalInfo('nationality', 'show')}
                size="small"
              />
              <span className="text-sm">hide</span>
            </div>
          </div>
          <div className="border-b border-gray-300 mb-2 py-2 px-3"></div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <h2 className="font-medium">Current Residence </h2>
            </div>

            <div className="flex gap-4 items-center">
              <Checkbox
                checked={personalInformation.currentResidence.internalUse}
                onChange={() => handlePersonalInfo('currentResidence', 'internalUse')}
              >
                intenal
              </Checkbox>
              <Switch
                checked={personalInformation.currentResidence.show}
                onChange={() => handlePersonalInfo('currentResidence', 'show')}
                size="small"
              />
              <span className="text-sm">hide</span>
            </div>
          </div>
          <div className="border-b border-gray-300 mb-2 py-2 px-3"></div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <h2 className="font-medium">ID Number </h2>
            </div>

            <div className="flex gap-4 items-center">
              <Checkbox checked={personalInformation.idNumber.internalUse}
                onChange={() => handlePersonalInfo('idNumber', 'internalUse')}
              >
                intenal
              </Checkbox>
              <Switch
                checked={personalInformation.idNumber.show}
                onChange={() => handlePersonalInfo('idNumber', 'show')}
                size="small"
              />
              <span className="text-sm">hide</span>
            </div>
          </div>
          <div className="border-b border-gray-300 mb-2 py-2 px-3"></div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <h2 className="font-medium">Date Of Birth </h2>
            </div>

            <div className="flex gap-4 items-center">
              <Checkbox checked={personalInformation.dateOfBirth.internalUse}
                 onChange={() => handlePersonalInfo('dateOfBirth', 'internalUse')}
              >
                intenal
              </Checkbox>
              <Switch
                checked={personalInformation.dateOfBirth.show}
                onChange={() => handlePersonalInfo('dateOfBirth', 'show')}
                size="small"
              />
              <span className="text-sm">hide</span>
            </div>
          </div>
          <div className="border-b border-gray-300 mb-2 py-2 px-3"></div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-2 items-center">
              <h2 className="font-medium">Gender </h2>
            </div>

            <div className="flex gap-4 items-center">
              <Checkbox checked={personalInformation.gender.internalUse}
                       onChange={() => handlePersonalInfo('gender', 'internalUse')}
              >
                intenal
              </Checkbox>
              <Switch checked={personalInformation.gender.show} size="small" 
                   onChange={() => handlePersonalInfo('gender', 'show')}
              />
              <span className="text-sm">hide</span>
            </div>
          </div>
        </div>
      </div>

      <div className="my-2 px-4">
      
        {savedInputFields.length === 0 ? null:savedInputFields.map((items, index) => (
        <div key={items.id}>
        <p className="text-textColor font-bold  text-sm">{items?.type}</p>
        <div className="flex justify-between w-11/12">
          <h2 className="font-bold text-lg" >{items?.question}</h2>
          <EditOutlined style={{fontSize:"20px", cursor:"pointer"}} onClick={() => handleEdit(index)}/>
        </div>
        <div className="border-b border-gray-300 mb-2 py-2 px-3"></div>
        {editIndex === index  && <Editquestion 
        index={editIndex}  
        question={savedInputFields[editIndex].question}
        handleEditQuestionChange={handleEditQuestionChange}
         handleEditChoiceChange={handleEditChoiceChange}
         savedInputFields={savedInputFields}
         handleSaveEdit={handleSaveEdit}
         handleEditCheckboxChange={handleEditCheckboxChange}
         handleEditmaxchoice={handleEditmaxchoice}
         handleDelete={handleDelete}
          />}
      </div>
    
        ))}
        
       
      </div>
      {openQuestion ? (
        ""
      ) : (
        <div
          className="px-3 mt-4 pb-4 pt-4 flex gap-2 cursor-pointer"
          onClick={() => handleOpenAddQuestion()}
        >
        
          <img  src={Plus} alt="plus" style={{width:"21px" , height:"24px" , cursor:"pointer"}}/>
          <h2 className="font-bold">Add a question</h2>
        </div>
      )}
      {openQuestion  && (
        <div className="px-3 mt-4 pb-4 pt-4 w-full">
          <div>
            <h2 className="my-2 font-bold">Type</h2>
            <Select
              value={questionType}
              style={{ width: "100%" }}
              onChange={handleChange}
           
              options={[
                { value: "paragraph", label: "paragraph" },
                { value: "shortanswer", label: "short answer" },
                { value: "Yes/No", label: "Yes/No" },
                { value: "dropdown", label: "Dropdown" },
                { value: "MultipleChoice", label: "Multiple Choice" },
           
              ]}
            />

            {questionType && <Addquestion
             inputFields={inputFields} questionType={questionType}
             handleChoiceChange={handleChoiceChange}
             handleInputChange={handleInputChange}
             handleCheckboxChange={handleCheckboxChange}
             addChoice={addChoice}
             handleMaxChoiceChange={handleMaxChoiceChange}
          
             />}
          </div>

          <div className="px-3 mt-4 pb-4 pt-4  flex justify-between">
            <div className="flex gap-3 cursor-pointer items-center">
              <CloseCircleOutlined style={{ fontSize: "25px", color: "red" }} />
              <h2
                className="text-red-700 cursor-pointer"
                onClick={handleDeleteQuestion}
              >
                {" "}
                Delete Question
              </h2>
            </div>
            <Button type="primary" className="bg-button text-white" onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
