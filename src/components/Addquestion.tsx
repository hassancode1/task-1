import React from 'react'

import { Input , Checkbox} from 'antd'; 
import {
    PlusOutlined,
    MenuFoldOutlined
  
  } from "@ant-design/icons";
  import { inputFieldType } from '../types/inputFieldType';
  import "../App.css"
interface AddQuestionProps {
    inputFields: inputFieldType[];
  questionType: string;
  handleInputChange: (index: number, field: string, value: string) => void;
  handleChoiceChange: (
    inputIndex: number,
    choiceIndex: number,
    value: string
  ) => void;
  addChoice: (index: number) => void;
  handleCheckboxChange: (index: number, field: string, checked: boolean) => void;
  handleMaxChoiceChange:(index:number, value:string) => void
}

const Addquestion: React.FC<AddQuestionProps> = ({
  inputFields,
  questionType,
  handleInputChange,
  handleChoiceChange,
  handleMaxChoiceChange,
  handleCheckboxChange,
  addChoice,
}) => {
  return (
<>

        {inputFields.map((field, index) => {
          if (questionType === "paragraph" && field.type === "paragraph") {
            return (
              <div key={index}>
                <h2 className="my-2 font-bold">Question</h2>
                <Input
                  placeholder="Type here"
                  style={{ width: "100%" }}
                  value={inputFields[index].question}
                  onChange={(e) =>
                    handleInputChange(index, "question", e.target.value)
                  }
                />
              </div>
            );
          } else if (
            questionType === "MultipleChoice" &&
            field.type === "MultipleChoice"
          ) {
            return (
                <>
          
                    
            <h2 className="my-2 font-bold">Question</h2>
            <Input
                  placeholder="Type here"
                  style={{ width: "100%" }}
                  value={inputFields[index].question}
                  onChange={(e) =>
                    handleInputChange(index, "question", e.target.value)
                  }
                />
            <h2 className=" font-semibold mx-10 mt-4 mb-0">Choice</h2>
            <div className="mt-3">
              

              {field.choices.map((choice, choiceIndex) => (
                  <div
                    key={choiceIndex}
                    className="flex  items-center justify-between w-10/12 gap-4 mt-4 ml-4"
                  >
                    <MenuFoldOutlined />
                    <Input
                      placeholder="Type choice..."
                      style={{
                        width: "100%",
                        margin: "0",
                        padding: "0.5rem",
                      }}
                      value={choice}
                      onChange={(e) =>
                        handleChoiceChange(index, choiceIndex, e.target.value)
                      }
                    />
                   {choiceIndex === field.choices.length - 1 && (
      <PlusOutlined
        style={{ fontWeight: "bolder", cursor: "pointer" }}
        onClick={() => addChoice(index)}
      />
    )}
                  </div>
                ))}
<div className='ml-4'>
<Checkbox style={{marginTop:"0.7rem",fontSize:"14px"}}
        checked={inputFields[index].other}
 onChange={(e) => handleCheckboxChange(index, "other", e.target.checked)}
 >
                Enable "other"  option
              </Checkbox>
<div>
<h2 className="my-2 font-bold">Max choice allowed</h2>
              <Input
                  placeholder="Enter a number of choice allowed"
                  style={{ width: "100%" }}
              
                  value={field.maxChoice}
                  onChange={(e) => handleMaxChoiceChange(index, e.target.value)}
                />
                </div>
              </div>
            </div>
          </>
            );
          }
        else if (
            questionType === "Yes/No" &&
            field.type === "Yes/No"
          ) {
            return <>
              <h2 className="my-2 font-bold">Question</h2>
            <Input
                  placeholder="Type here"
                  style={{ width: "100%" }}
                  value={inputFields[index].question}
                  onChange={(e) =>
                    handleInputChange(index, "question", e.target.value)
                  }
                />
                <Checkbox style={{marginTop:"0.7rem",fontSize:"14px"}}
                  value={inputFields[index].disqualify}
                  onChange={(e) => handleCheckboxChange(index, "disqualify", e.target.checked)}
                >
                Disqualify candidate if the answer is no
              </Checkbox>
             </>;
          }
        else if (
            questionType === "shortanswer" &&
            field.type === "shortanswer"
          ) {
            return <div key={index}>
            <h2 className="my-2 font-bold">Question</h2>
            <Input
              placeholder="Type here"
              style={{ width: "100%" }}
              value={inputFields[index].question}
              onChange={(e) =>
                handleInputChange(index, "question", e.target.value)
              }
            />
          </div>;
          }
          else if (
            questionType === "dropdown" &&
            field.type === "dropdown"
          ) {
            return        <>
          
                    
            <h2 className="my-2 font-bold">Question</h2>
            <Input
                  placeholder="Type here"
                  style={{ width: "100%" }}
                  value={inputFields[index].question}
                  onChange={(e) =>
                    handleInputChange(index, "question", e.target.value)
                  }
                />
            <h2 className=" font-semibold mx-10 mt-4">Choice</h2>
            <div className="">
              

              {field.choices.map((choice, choiceIndex) => (
                  <div
                    key={choiceIndex}
                    className="flex  items-center justify-between w-10/12 gap-4 mt-4 "
                  >
                    <MenuFoldOutlined />
                    <Input
                      placeholder="Type choice..."
                      style={{
                        width: "100%",
                        margin: "0",
                        padding: "0.5rem",
                      }}
                      value={choice}
                      onChange={(e) =>
                        handleChoiceChange(index, choiceIndex, e.target.value)
                      }
                    />
                    {choiceIndex === field.choices.length - 1 && (
      <PlusOutlined
        style={{ fontWeight: "bolder", cursor: "pointer" }}
        onClick={() => addChoice(index)}
      />
    )}
                  </div>
                ))}
<div>
<Checkbox style={{marginTop:"0.7rem", fontSize:"14px"}}
 value={inputFields[index].other}
 onChange={(e) => handleCheckboxChange(index, "other", e.target.checked)}
>
                enable "other"  option
              </Checkbox>
<div>

             
                </div>
              </div>
            </div>
          </>;
          }
          return null;
        })}
      </>
    );
}

export default Addquestion