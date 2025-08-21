import Checkbox from "./components/Checkbox";
import { useState } from "react";
  const scalableBenchmarks = [
    { name: "ae", label: "Amplitude Estimation (AE)" },
    { name: "deutschJozsa", label: "Deutsch-Jozsa" },
    { name: "graphState", label: "Graph State" },
    { name: "ghzState", label: "GHZ State" },
    { name: "groverNoAncilla", label: "Grover's (no ancilla)" },
    { name: "groverVChain", label: "Grover's (v-chain)" },
    { name: "portfolioOptQAOA", label: "Portfolio Optimization with QAOA" },
    { name: "portfolioOptVQE", label: "Portfolio Optimization with VQE" },
    {
      name: "qaoa",
      label: "Quantum Approximation Optimization Algorithm (QAOA)",
    },
    { name: "qft", label: "Quantum Fourier Transformation (QFT)" },
    { name: "qftEntangled", label: "QFT Entangled" },
    { name: "qnn", label: "Quantum Neural Network (QNN)" },
    { name: "qpeExact", label: "Quantum Phase Estimation (QPE) exact" },
    { name: "qpeInexact", label: "Quantum Phase Estimation (QPE) inexact" },
    { name: "quantumWalkNoAncilla", label: "Quantum Walk (no ancilla)" },
    { name: "quantumWalkVChain", label: "Quantum Walk (v-chain)" },
    { name: "randomCircuit", label: "Random Circuit" },
    { name: "vqe", label: "Variational Quantum Eigensolver (VQE)" },
    {
      name: "effSU2AnsatzRand",
      label: "Efficient SU2 ansatz with Random Parameters",
    },
    {
      name: "realAmplitudesAnsatzRand",
      label: "Real Amplitudes ansatz with Random Parameters",
    },
    {
      name: "twoLocalAnsatzRand",
      label: "Two Local ansatz with Random Parameters",
    },
    { name: "wState", label: "W-State" },
  ];

  const nonScalableBenchmarks = [
    { name: "groudState", label: "Ground State" },
    { name: "pricingCallOption", label: "Pricing Call Option" },
    { name: "pricingPutOption", label: "Pricing Put Option" },
    { name: "routing", label: "Routing" },
    { name: "shors", label: "Shor's" },
    { name: "travellingSalesman", label: "Travelling Salesman" },
  ];
function App() {

   const [formData, setFormData] = useState({
    ae: false,
    deutschJozsa: false,
    graphState: false,
    ghzState: false,
    groverNoAncilla: false,
    groverVChain: false,
    portfolioOptQAOA: false,
    portfolioOptVQE: false,
    qaoa: false,
    qft: false,
    qftEntangled: false,
    qnn: false,
    qpeExact: false,
    qpeInexact: false,
    quantumWalkNoAncilla: false,
    quantumWalkVChain: false,
    randomCircuit: false,
    vqe: false,
    effSU2AnsatzRand: false,
    realAmplitudesAnsatzRand: false,
    twoLocalAnsatzRand: false,
    wState: false,
    groudState: false,
    pricingCallOption: false,
    pricingPutOption: false,
    routing: false,
    shors: false,
    travellingSalesman: false,
    minQubits: 2,
    maxQubits: 130,
    targetIndependentQiskit: false,
    targetIndependentTket: false,
    ibm: false,
    rigetti: false,
    oqc: false,
    lonq: false,
    quantinum: false,
    targetDependentNativeGatesQiskit: false,
    targetDependentNativeGatesTket: false,
    targetDependentNativeGatesOpt0: false,
    targetDependentNativeGatesOpt1: false,
    targetDependentNativeGatesOpt2: false,
    targetDependentNativeGatesOpt3: false,
  });


    function handleFormChange(event) {
    const { name, type, value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : Number(value),
    }));
  }
  return (
    
    <div className="h-dvh text-white  bg-[url('./assets/body-background.png')] bg-cover bg-center">
       {scalableBenchmarks.map((item) => (
              <Checkbox
                key={item.name}
                name={item.name}
                checked={formData[item.name]}
                onChange={handleFormChange}
                label={item.label}
              />
            ))}
    </div>
  );
}

export default App;
