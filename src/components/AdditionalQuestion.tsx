import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import {  Select, Button } from "antd";
import {
  CloseCircleOutlined,
  EditOutlined 

} from "@ant-design/icons";
import Addquestion from "./Addquestion";
import { inputFieldType } from "../types/inputFieldType";
import Editquestion from "./Editquestion";

import Plus from "../assets/plus.svg"



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
  {
    id: uuidv4(),
    type: "fileupload",
    question: "",
    maxChoice: 0,
    choices: [""],
    disqualify: false,
    other: false,
  },
  {
    id: uuidv4(),
    type: "number",
    question: "",
    maxChoice: 0,
    choices: [""],
    disqualify: false,
    other: false,
  },
  {
    id: uuidv4(),
    type: "date",
    question: "",
    maxChoice: 0,
    choices: [""],
    disqualify: false,
    other: false,
  },
];

const AdditionalQuestion = () => {
  const [questionType, setQuestionType] = useState<string>("paragraph");
  const [openQuestion, setOpenQuestion] = useState<boolean>(false);
  const [inputFields, setInputFields] =  useState<inputFieldType[]>(initialInputFields);

  const [newInputField, setNewInputField] = useState<inputFieldType | null>(null);
  const [savedInputFields, setSavedInputFields] = useState<inputFieldType[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  

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
        <h2 className="font-medium"> Additional Question</h2>
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
                
                { value: "fileupload", label: "File upload" },
                { value: "number", label: "Number" },
                { value: "date", label: "Date" },
           
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

export default AdditionalQuestion;
