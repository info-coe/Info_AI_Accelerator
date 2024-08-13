import React from "react";
import AI1 from "./Images/AI1.jpg";
import AI2 from "./Images/AI2.jpg";
import AI3 from "./Images/AI3.jpg";

export default function InfoAIAccelerator() {
  const infoAIAcceleratorFeatures = [
    {
      title: "Unified LLM Training and Testing",
      description:
        "Conduct all your LLM training, building, and testing in one integrated platform, simplifying your workflow with an easy-to-use UI.",
    },
    {
      title: "Optimized GPU Utilization",
      description:
        "Reduce GPU memory usage by 40%, allowing for more efficient training and resource management.",
    },
    {
      title: "Enhanced Processing Speed",
      description:
        "Benefit from 2x faster model training and testing, thanks to our advanced multithreading capabilities.",
    },
    {
      title: "Interactive Testing with Custom Prompts",
      description:
        "Test your models interactively using custom prompts, refining them quickly through our intuitive user interface.",
    },
    {
      title: "Flexible Model Export Options",
      description:
        "Export your trained models to various platforms such as S3, Azure Data Blob, Hugging Face, or Ollama, depending on your configuration.",
    },
    {
      title: "Seamless Deployment",
      description:
        "Deploy Info AI Accelerator anywhere, whether in the cloud or on-premises, with our simple automation scripts that require just a single file to set up.",
    },
  ];

  const infoAIAcceleratorServices = [
    {
      image: AI1,
      title: "Custom LLM Training",
      description:
        "Utilize our platform to train LLMs with your specific data, optimizing them for your unique business needs.",
    },
    {
      image: AI3,
      title: "Model Fine-Tuning and Testing",
      description:
        "Leverage our tools to fine-tune and test your models with reduced resource usage and faster processing times.",
    },
    {
      image: AI2,
      title: "Deployment and Integration Support",
      description:
        "Get expert assistance in deploying your trained models, whether to cloud platforms like AWS and Azure or other specialized environments.",
    },
  ];

  return (
    <div className="container">
      <div className="shadow rounded p-3 mt-3 mb-3" style={{backgroundColor:"lightgray"}}>
        <h1 className="text-center">Info AI Accelerator</h1>
        <div className="fs-6">
          <p>
            Info AI Accelerator is a revolutionary platform that simplifies the
            training, building, and testing of Large Language Models (LLMs).
            Traditional LLM development is often hampered by high resource
            demands and time-consuming processes. Info AI Accelerator addresses
            these challenges by offering a user-friendly interface that
            significantly reduces GPU usage and accelerates model training with
            advanced multithreading technology. This tool allows you to focus on
            innovation and fine-tuning while we take care of the technical
            complexities.
          </p>
          <p>
            Info AI Accelerator is ideal for data scientists, AI researchers,
            and developers who need a robust, efficient solution to streamline
            their LLM workflows.
          </p>
        </div>
      </div>
      <div>
        <h2>Features</h2>
        <div className="grid-container">
          {infoAIAcceleratorFeatures.map((item, index) => (
            <div key={index} className="grid-item border m-2 p-3">
              <h4 className="text-center">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Our Services</h2>
        <div className="grid-container">
          {infoAIAcceleratorServices.map((item, index) => (
            <div key={index} className="grid-item shadow m-2 p-3">
              <div className="" style={{ height: "56%" }}>
                <img src={item.image} alt="Services" width="70%" />
              </div>
              <h4 style={{ height: "17%" }}>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
