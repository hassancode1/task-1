import { Input, Button, Checkbox } from "antd";
import { inputFieldType } from "../types/inputFieldType";
import { CloseCircleOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "../App.css";
interface EditQuestionProps {
  savedInputFields: inputFieldType[];
  index: number;
  question: string;
  choices?: string[];
  handleEditQuestionChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: inputFieldType
  ) => void;
  handleEditChoiceChange: (
    choiceIndex: number,
    e: React.ChangeEvent<HTMLInputElement>,
    field: inputFieldType,
    index: number
  ) => void;
  handleSaveEdit: () => void;
  handleEditCheckboxChange: (
    field: "disqualify" | "other",
    checked: boolean
  ) => void;
  handleEditmaxchoice: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: inputFieldType
  ) => void;
  handleDelete:(index:number) => void;
}

const Editquestion: React.FC<EditQuestionProps> = ({
  index,
  handleEditQuestionChange,
  savedInputFields,
  handleEditChoiceChange,
  handleSaveEdit,
  handleEditCheckboxChange,
  handleEditmaxchoice,
  handleDelete,
}) => {
  const field = savedInputFields[index];

  if (!field) {
    return null;
  }
  console.log(index)
  return (
    <>
    {field === undefined  ?"":
      <div>
        <h2 className="my-2 font-bold">Question</h2>
        <Input
          placeholder="Type here"
          style={{ width: "100%" }}
          value={field.question}
          onChange={(e) => handleEditQuestionChange(e, index, field)}
        />
        {field.type === "MultipleChoice" && (
          <>
            <h2 className="font-bold mx-10 mt-4">Choices</h2>

            {field.choices.map((choice, choiceIndex) => (
              <div
                key={choiceIndex}
                className="flex  items-center justify-between w-10/12 gap-4 mt-4"
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
                    handleEditChoiceChange(choiceIndex, e, field, index)
                  }
                />
              </div>
            ))}
            <div className="ml-4">
              <Checkbox
                style={{ marginTop: "0.7rem", fontSize: "14px" }}
                checked={field.other}
                onChange={(e) =>
                  handleEditCheckboxChange("other", e.target.checked)
                }
              >
                Enable "other" option
              </Checkbox>
              <div>
                <h2 className="my-2 font-bold">Max choice allowed</h2>
                <Input
                  placeholder="Enter a number of choice allowed"
                  style={{ width: "100%" }}
                  type="number"
                  value={field.maxChoice}
                  onChange={(e) => handleEditmaxchoice(e, index, field)}
                />
              </div>
            </div>
          </>
        )}
        {field.type === "dropdown" && (
          <>
            <h2 className="font-bold mx-10 mt-4">Choices</h2>

            {field.choices.map((choice, choiceIndex) => (
              <div
                key={choiceIndex}
                className="flex  items-center justify-between w-10/12 gap-4 mt-4"
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
                    handleEditChoiceChange(choiceIndex, e, field, index)
                  }
                />
              </div>
            ))}
            <div className="ml-4">
              <Checkbox
                style={{ marginTop: "0.7rem", fontSize: "14px" }}
                checked={field.other}
                onChange={(e) =>
                  handleEditCheckboxChange("other", e.target.checked)
                }
              >
                Enable "other" option
              </Checkbox>
            </div>
          </>
        )}
        {field.type === "Yes/No" && (
          <>
        
            <div className="ml-4">
              <Checkbox
                style={{ marginTop: "0.7rem", fontSize: "14px" }}
                checked={field.disqualify}
                onChange={(e) =>
                  handleEditCheckboxChange("disqualify", e.target.checked)
                }
              >
              Disqualify candidate if the answer is no
              </Checkbox>
            </div>
          </>
        )}

        <div className="px-3 mt-4 pb-4 pt-4  flex justify-between">
          <div className="flex gap-3 cursor-pointer items-center">
            <CloseCircleOutlined style={{ fontSize: "25px", color: "red" }} />
            <h2 className="text-red-700 cursor-pointer" onClick={() =>handleDelete(index)}> Delete Question</h2>
          </div>
          <Button
            type="primary"
            className="bg-button text-white"
            onClick={handleSaveEdit}
          >
            Save
          </Button>
        </div>
      </div>
}
    </>
  );
};

export default Editquestion;
