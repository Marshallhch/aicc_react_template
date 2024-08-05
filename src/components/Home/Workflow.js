import React from 'react';
import codeImg from '../../assets/code.jpg';
import { checklistItems } from '../../constants/data';
import { CheckCircle2 } from 'lucide-react';

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-tight font-customFontEn font-semibold">
        Accelerate Your{' '}
        <span className="bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
          Coding Workflow
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding Screen" />
        </div>
        <div className="p-12 w-full lg:w-1/2">
          {checklistItems.map((item, idx) => (
            <div key={idx}>
              <div>
                <CheckCircle2 />
              </div>
              <div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
