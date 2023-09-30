import {useState, useEffect} from "react"
import Nav from "../components/Nav"
import Uploadfiles from "../components/Uploadfiles"
import PersonalInfo from "../components/PersonalInfo"
 
interface PersonalInformation {
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

interface ApplicationFormData {
  data: {
    attributes: {
      personalInformation: PersonalInformation;
    };
  };
}

const Home = () => {
  const url = " http://127.0.0.1:4010/api/605.8880046180052/programs/id/application-form"
  const [data, setData] = useState<ApplicationFormData | null>(null);

  async function fetchData() {
    try {
   
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
     
    } 
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className="flex flex-col gap-4 justify-between">
  <Nav />
<Uploadfiles />
{data?.data?.attributes?.personalInformation ? (
          <PersonalInfo personalInformation={data.data.attributes.personalInformation} />
        ) : (
         
      null
        )}
  </div>
    </>
  )
}

export default Home