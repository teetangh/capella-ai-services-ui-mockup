'use client';
import { useState } from 'react';
import Link from 'next/link';
import PrimaryNavbar from '@/components/PrimaryNavbar';
import SecondaryNavigation from '@/components/SecondaryNavigation';
import TertiaryNavigation from '@/components/TertiaryNavigation';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ConfigurationStep from '@/components/ConfigurationStep';

export default function AgentIntegration() {
  const [expandedStep, setExpandedStep] = useState(1);
  const [clusterOption, setClusterOption] = useState('existing');
  const [selectedCluster, setSelectedCluster] = useState('Cluster_name_1');
  const [embeddingOption, setEmbeddingOption] = useState('existing');
  const [selectedEmbeddingModel, setSelectedEmbeddingModel] = useState('nvidia/nv-embedqa-e5-v5');
  const [embeddingApiKeyId, setEmbeddingApiKeyId] = useState('8g4f3e2d-9c8b-5g8f-ab3e-2d4f6g7h8i9j');
  const [embeddingApiKeyToken, setEmbeddingApiKeyToken] = useState('••••••••••••••••••••••••••••••••');
  const [llmOption, setLlmOption] = useState('existing');
  const [selectedModel, setSelectedModel] = useState('deepseek-ai/deepseek-r1');
  const [apiKeyId, setApiKeyId] = useState('7f3e2d1a-8b9c-4f7e-9a2d-1c3e4f5a6b7c');
  const [apiKeyToken, setApiKeyToken] = useState('••••••••••••••••••••••••••••••••');
  const [openaiModel, setOpenaiModel] = useState('gpt-4');
  const [openaiApiKey, setOpenaiApiKey] = useState('');
  const [arizeSpaceId, setArizeSpaceId] = useState('');
  const [arizeApiKey, setArizeApiKey] = useState('');
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (stepNumber: number) => {
    // Always keep exactly one step open
    if (expandedStep !== stepNumber) {
      setExpandedStep(stepNumber);
    }
    // Don't allow closing if it's the only open step
  };

  const markStepComplete = (stepNumber: number) => {
    if (!completedSteps.includes(stepNumber)) {
      setCompletedSteps([...completedSteps, stepNumber]);
    }
  };

  const advanceToNextStep = (currentStep: number) => {
    const nextStep = currentStep + 1;
    if (nextStep <= 7) { // Maximum step number
      setExpandedStep(nextStep);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Primary Navigation */}
      <PrimaryNavbar />

      {/* Secondary Navigation - CBC-DEV */}
      <SecondaryNavigation />

      {/* Tertiary Navigation - Service Tabs */}
      <TertiaryNavigation />

      <div className="flex justify-center">
        {/* Main Content Area */}
        <div className="w-[70%] p-4 lg:p-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/" className="text-blue-600 hover:underline flex items-center gap-2 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Offerings
            </Link>
          </div>

          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-4">
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">Integrate Your Agent app with Capella</h1>
              <button className="text-blue-600 hover:underline text-sm self-start lg:self-center">Reset Guide</button>
            </div>
            <p className="text-gray-600 text-sm lg:text-base">Configure your Capella environment and get started with integrating Capella into your agent application</p>
          </div>

          {/* Get Started Section */}
          <div className="mb-8 p-4 lg:p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3 lg:gap-4">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 flex-shrink-0">3</div>
              <div className="flex-1 min-w-0">
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="flex flex-wrap items-center gap-1">
                      <span className="font-medium text-gray-900">Get started:</span>
                      <span className="text-gray-700">Download this sample app to continue</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">Use the information from below to integrate your agent with Capella</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-white border border-blue-300 text-blue-700 rounded hover:bg-blue-50 text-sm lg:text-base">
                  Launch App in Colab
                </button>
              </div>
            </div>
          </div>

          {/* Configuration Steps */}
          <div className="space-y-3">
            {/* Step 1: Cluster */}
            <ConfigurationStep
              stepNumber={1}
              title="Cluster"
              isExpanded={expandedStep === 1}
              isCompleted={completedSteps.includes(1)}
              onToggle={() => toggleStep(1)}
              onComplete={() => markStepComplete(1)}
              onAdvanceToNext={() => advanceToNextStep(1)}
            >
              {/* Cluster Options */}
              <RadioGroup
                value={clusterOption}
                onValueChange={setClusterOption}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6"
              >
                <Card className="cursor-pointer border-2 hover:border-gray-300 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="create" id="create" />
                      <div className="flex-1">
                        <label htmlFor="create" className="font-medium text-gray-900 block cursor-pointer">
                          Create Cluster
                        </label>
                        <p className="text-gray-600 text-sm">Deploy a new cluster with our recommended settings</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`cursor-pointer border-2 transition-colors ${clusterOption === 'existing' ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="existing" id="existing" />
                      <div className="flex-1">
                        <label htmlFor="existing" className="font-medium text-blue-600 block cursor-pointer">
                          Already have a Cluster
                        </label>
                        <p className="text-gray-600 text-sm">Connect to an existing cluster</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </RadioGroup>

              {/* Cluster Selection - Only show when "existing" is selected */}
              {clusterOption === 'existing' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Choose Cluster</label>
                    <Select value={selectedCluster} onValueChange={setSelectedCluster}>
                      <SelectTrigger className="w-full max-w-xs">
                        <SelectValue placeholder="Select a cluster" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cluster_name_1">Cluster_name_1</SelectItem>
                        <SelectItem value="cluster_2">cluster_2</SelectItem>
                        <SelectItem value="Cluster_3">Cluster_3</SelectItem>
                        <SelectItem value="Cluster_8">Cluster_8</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Cluster Details - Only show when existing cluster is selected */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-gray-900">Cluster Details</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>Name: {selectedCluster}</div>
                        <div>Type: Multi-node</div>
                        <div>Services: Search, Data, Query & Index</div>
                        <div>Nodes: 3 Nodes</div>
                        <div>Storage: 10GB</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-gray-900">Connection Information</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>Endpoint: https://name-cluster.capella.ai</div>
                        <div>API Key: cap_xxxxxxxxxx</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </ConfigurationStep>

            {/* Step 2: Embedding Model */}
            <ConfigurationStep
              stepNumber={2}
              title="Embedding Model"
              isExpanded={expandedStep === 2}
              isCompleted={completedSteps.includes(2)}
              onToggle={() => toggleStep(2)}
              onComplete={() => markStepComplete(2)}
              onAdvanceToNext={() => advanceToNextStep(2)}
            >
              {/* 3-Column Embedding Model Options */}
              <RadioGroup
                value={embeddingOption}
                onValueChange={setEmbeddingOption}
                className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6"
              >
                <Card className="cursor-pointer border-2 hover:border-gray-300 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="deploy" id="deploy-embedding" />
                      <label htmlFor="deploy-embedding" className="font-medium text-gray-900 cursor-pointer">
                        Deploy New Model
                      </label>
                    </div>
                    <p className="text-gray-600 text-sm">With preconfigured embedding settings</p>
                  </CardContent>
                </Card>

                <Card className={`cursor-pointer border-2 transition-colors ${embeddingOption === 'existing' ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="existing" id="existing-embedding" />
                      <label htmlFor="existing-embedding" className="font-medium text-gray-900 cursor-pointer">
                        Use Existing Models
                      </label>
                    </div>
                    <p className="text-gray-600 text-sm">Select from existing embedding models</p>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer border-2 hover:border-gray-300 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="external" id="external-embedding" />
                      <label htmlFor="external-embedding" className="font-medium text-gray-900 cursor-pointer">
                        External Model
                      </label>
                    </div>
                    <p className="text-gray-600 text-sm">To use your own embedding model</p>
                  </CardContent>
                </Card>
              </RadioGroup>

              {/* Embedding Model Configuration for Existing Models */}
              {embeddingOption === 'existing' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Embedding Model</label>
                    <Select value={selectedEmbeddingModel} onValueChange={setSelectedEmbeddingModel}>
                      <SelectTrigger className="w-full max-w-xs">
                        <SelectValue placeholder="Select an embedding model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nvidia/nv-embedqa-e5-v5">NVIDIA NV-EmbedQA E5 V5</SelectItem>
                        <SelectItem value="Snowflake/snowflake-arctic-embed-l-v2.0">Snowflake Arctic Embed L v2.0</SelectItem>
                        <SelectItem value="nvidia/nv-embedqa-mistral-7b-v2">NVIDIA NV-EmbedQA Mistral 7B v2</SelectItem>
                        <SelectItem value="intfloat/e5-mistral-7b-instruct">E5 Mistral 7B Instruct</SelectItem>
                        <SelectItem value="nvidia/llama-3.2-nv-embedqa-1b-v2">NVIDIA Llama 3.2 NV-EmbedQA 1B v2</SelectItem>
                        <SelectItem value="snowflake/arctic-embed-l">Snowflake Arctic Embed L</SelectItem>
                        <SelectItem value="Snowflake/snowflake-arctic-embed-m-v2.0">Snowflake Arctic Embed M v2.0</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* API Key Inputs */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">API Key ID*</label>
                      <Input
                        type="text"
                        value={embeddingApiKeyId}
                        onChange={(e) => setEmbeddingApiKeyId(e.target.value)}
                        placeholder="Enter API Key ID"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">API Key Token*</label>
                      <Input
                        type="password"
                        value={embeddingApiKeyToken}
                        onChange={(e) => setEmbeddingApiKeyToken(e.target.value)}
                        placeholder="Enter API Key Token"
                      />
                    </div>
                  </div>

                  {/* Upload Credentials File */}
                  <div>
                    <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Upload .txt credentials file
                    </Button>
                  </div>

                  {/* Model Details and Connection Information */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-gray-900">Embedding Model Details</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>Name: {selectedEmbeddingModel}</div>
                        <div>Compute: Small | 4vCPU, 48GB GPU</div>
                        <div>Region: AWS | NA. East</div>
                      </div>
                      <div className="mt-3">
                        <span className="text-sm text-gray-600">Update model configuration? </span>
                        <Button variant="link" className="p-0 h-auto text-blue-600 text-sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-gray-900">Connection Information</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>Endpoint: https://embedding.capella.llm</div>
                        <div className="break-all">API Key: g4f3e2d1-8c9b-5f8e-ab2d-1c3f4g6h7i8j</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </ConfigurationStep>

            {/* Step 3: Large Language Model */}
            <ConfigurationStep
              stepNumber={3}
              title="Large Language Model (LLM)"
              isExpanded={expandedStep === 3}
              isCompleted={completedSteps.includes(3)}
              onToggle={() => toggleStep(3)}
              onComplete={() => markStepComplete(3)}
              onAdvanceToNext={() => advanceToNextStep(3)}
            >
              {/* 3-Column Model Options */}
              <RadioGroup
                value={llmOption}
                onValueChange={setLlmOption}
                className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6"
              >
                <Card className="cursor-pointer border-2 hover:border-gray-300 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="deploy" id="deploy" />
                      <label htmlFor="deploy" className="font-medium text-gray-900 cursor-pointer">
                        Deploy New Model
                      </label>
                    </div>
                    <p className="text-gray-600 text-sm">With preconfigured settings</p>
                  </CardContent>
                </Card>

                <Card className={`cursor-pointer border-2 transition-colors ${llmOption === 'existing' ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="existing" id="existing-model" />
                      <label htmlFor="existing-model" className="font-medium text-gray-900 cursor-pointer">
                        Use Existing Models
                      </label>
                    </div>
                    <p className="text-gray-600 text-sm">Select from existing models</p>
                  </CardContent>
                </Card>

                <Card className="cursor-pointer border-2 hover:border-gray-300 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="external" id="external" />
                      <label htmlFor="external" className="font-medium text-gray-900 cursor-pointer">
                        External Model
                      </label>
                    </div>
                    <p className="text-gray-600 text-sm">To use your own model</p>
                  </CardContent>
                </Card>
              </RadioGroup>

              {/* Model Configuration for Existing Models */}
              {llmOption === 'existing' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Model</label>
                    <Select value={selectedModel} onValueChange={setSelectedModel}>
                      <SelectTrigger className="w-full max-w-xs">
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="deepseek-ai/deepseek-r1">DeepSeek R1</SelectItem>
                        <SelectItem value="mistralai/mixtral-8x22b-instruct-v01">Mixtral 8x22B Instruct</SelectItem>
                        <SelectItem value="meta/llama3-70b-instruct">Llama 3 70B Instruct</SelectItem>
                        <SelectItem value="deepseek-ai/deepseek-r1-distill-qwen-32b">DeepSeek R1 Distill Qwen 32B</SelectItem>
                        <SelectItem value="nv-mistralai/mistral-nemo-12b-instruct">Mistral Nemo 12B Instruct</SelectItem>
                        <SelectItem value="deepseek-ai/deepseek-r1-distill-llama-8b">DeepSeek R1 Distill Llama 8B</SelectItem>
                        <SelectItem value="meta-llama/Llama-3.1-8B-Instruct">Llama 3.1 8B Instruct</SelectItem>
                        <SelectItem value="mistralai/mistral-7b-instruct-v0.3">Mistral 7B Instruct v0.3</SelectItem>
                        <SelectItem value="meta/llama-3.2-3b-instruct">Llama 3.2 3B Instruct</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* API Key Inputs */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">API Key ID*</label>
                      <Input
                        type="text"
                        value={apiKeyId}
                        onChange={(e) => setApiKeyId(e.target.value)}
                        placeholder="Enter API Key ID"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">API Key Token*</label>
                      <Input
                        type="password"
                        value={apiKeyToken}
                        onChange={(e) => setApiKeyToken(e.target.value)}
                        placeholder="Enter API Key Token"
                      />
                    </div>
                  </div>

                  {/* Upload Credentials File */}
                  <div>
                    <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Upload .txt credentials file
                    </Button>
                  </div>

                  {/* Model Details and Connection Information */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-gray-900">Model Details</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>Name: {selectedModel}</div>
                        <div>Compute: Medium | 48vCPU, 192GB GPU</div>
                        <div>Region: AWS | NA. East</div>
                      </div>
                      <div className="mt-3">
                        <span className="text-sm text-gray-600">Update model configuration? </span>
                        <Button variant="link" className="p-0 h-auto text-blue-600 text-sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-gray-900">Connection Information</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div>Endpoint: https://model.capella.llm</div>
                        <div className="break-all">API Key: f3e2d1a-8b9c-4f7e-9a2d-1c3e4f5a6b7c</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </ConfigurationStep>

            {/* Step 4: OpenAI & Arize Configuration */}
            <ConfigurationStep
              stepNumber={4}
              title="OpenAI & Arize Configuration"
              isExpanded={expandedStep === 4}
              isCompleted={completedSteps.includes(4)}
              onToggle={() => toggleStep(4)}
              onComplete={() => markStepComplete(4)}
              onAdvanceToNext={() => advanceToNextStep(4)}
            >
              <div className="space-y-6">
                {/* OpenAI Configuration */}
                <div>
                  <h4 className="font-medium mb-4 text-gray-900">OpenAI Configuration</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">OpenAI Model</label>
                      <Select value={openaiModel} onValueChange={setOpenaiModel}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select OpenAI model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gpt-4">GPT-4</SelectItem>
                          <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
                          <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">OpenAI API Key*</label>
                      <Input
                        type="password"
                        value={openaiApiKey}
                        onChange={(e) => setOpenaiApiKey(e.target.value)}
                        placeholder="Enter your OpenAI API key"
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-200" />

                {/* Arize Configuration */}
                <div>
                  <h4 className="font-medium mb-4 text-gray-900">Arize Phoenix Configuration</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Arize Space ID*</label>
                      <Input
                        type="text"
                        value={arizeSpaceId}
                        onChange={(e) => setArizeSpaceId(e.target.value)}
                        placeholder="Enter your Arize Space ID"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Arize API Key*</label>
                      <Input
                        type="password"
                        value={arizeApiKey}
                        onChange={(e) => setArizeApiKey(e.target.value)}
                        placeholder="Enter your Arize API key"
                      />
                    </div>
                  </div>
                </div>

                {/* Optional Configuration Note */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-blue-900 mb-1">Optional Configuration</p>
                      <p className="text-sm text-blue-700">
                        These configurations are optional. OpenAI can be used as a fallback LLM, and Arize Phoenix provides monitoring and observability for your agent applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ConfigurationStep>

            {/* Step 5: Agent Catalog */}
            <ConfigurationStep
              stepNumber={5}
              title="Agent Catalog"
              isExpanded={expandedStep === 5}
              isCompleted={completedSteps.includes(5)}
              onToggle={() => toggleStep(5)}
              onComplete={() => markStepComplete(5)}
              onAdvanceToNext={() => advanceToNextStep(5)}
            >
              <p className="text-gray-700 text-sm mb-6">Set up your agent catalog configuration and deployment settings.</p>
            </ConfigurationStep>

            {/* Step 6: Tools & Prompts */}
            <ConfigurationStep
              stepNumber={6}
              title="Tools & Prompts"
              isExpanded={expandedStep === 6}
              isCompleted={completedSteps.includes(6)}
              onToggle={() => toggleStep(6)}
              onComplete={() => markStepComplete(6)}
              onAdvanceToNext={() => advanceToNextStep(6)}
            >
              <p className="text-gray-700 text-sm mb-6">Configure tools and prompts for your agent applications.</p>
            </ConfigurationStep>

            {/* Step 7: Summary */}
            <ConfigurationStep
              stepNumber={7}
              title="Summary"
              isExpanded={expandedStep === 7}
              isCompleted={completedSteps.includes(7)}
              onToggle={() => toggleStep(7)}
              onComplete={() => markStepComplete(7)}
              onAdvanceToNext={() => advanceToNextStep(7)}
            >
              <div className="space-y-6">
                <p className="text-gray-700 text-sm">Review your configuration and download the generated .env file with all your settings.</p>

                {/* Configuration Summary */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-gray-900">Configuration Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Cluster:</span>
                        <span className="text-gray-900">{selectedCluster}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">LLM Model:</span>
                        <span className="text-gray-900 text-right">{selectedModel.split('/').pop()?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || selectedModel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Embedding Model:</span>
                        <span className="text-gray-900 text-right">{selectedEmbeddingModel.split('/').pop()?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || selectedEmbeddingModel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">OpenAI Model:</span>
                        <span className="text-gray-900">{openaiModel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Arize Integration:</span>
                        <span className="text-gray-900">{arizeSpaceId ? 'Configured' : 'Not configured'}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 text-gray-900">Generated Files</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>✓ Environment configuration (.env)</div>
                      <div>✓ API credentials setup</div>
                      <div>✓ Connection strings</div>
                      <div>✓ OpenAI integration</div>
                      <div>✓ Arize monitoring setup</div>
                    </div>
                  </div>
                </div>

                {/* Generated .env File Preview */}
                <div>
                  <h4 className="font-medium mb-3 text-gray-900">Generated .env File</h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                    <pre>{`# Couchbase Cluster Configuration
CB_CONN_STRING=https://${selectedCluster.toLowerCase()}.capella.ai
CB_USERNAME=${selectedCluster.toLowerCase()}_user
CB_PASSWORD=your_cluster_password
CB_BUCKET=default
CB_SCOPE=_default
CB_COLLECTION=_default
CB_INDEX=vector_index

# Capella API Configuration
CAPELLA_API_ENDPOINT=https://model.capella.llm
CAPELLA_API_LLM_MODEL=${selectedModel}
CAPELLA_API_LLM_KEY=${apiKeyId}

# Capella Embedding API Configuration
CAPELLA_API_EMBEDDING_MODEL=${selectedEmbeddingModel}
CAPELLA_API_EMBEDDINGS_KEY=${embeddingApiKeyId}
CAPELLA_API_EMBEDDING_MAX_TOKENS=1024

# OpenAI Configuration (if using external models)
OPENAI_MODEL=${openaiModel}
OPENAI_API_KEY=${openaiApiKey || 'your_openai_api_key'}

# Agent Catalog Configuration
AGENT_CATALOG_CONN_STRING=https://${selectedCluster.toLowerCase()}.capella.ai
AGENT_CATALOG_USERNAME=${selectedCluster.toLowerCase()}_user
AGENT_CATALOG_PASSWORD=your_catalog_password
AGENT_CATALOG_BUCKET=agent_catalog

# Arize Configuration (for monitoring)
ARIZE_SPACE_ID=${arizeSpaceId || 'your_arize_space_id'}
ARIZE_API_KEY=${arizeApiKey || 'your_arize_api_key'}

# Additional Configuration
TOKENIZERS_PARALLELISM=false`}</pre>
                  </div>
                </div>

                {/* Download Button */}
                <div className="flex justify-between items-center pt-4">
                  <Button
                    variant="outline"
                    className="text-blue-600 border-blue-200 hover:bg-blue-50"
                    onClick={() => {
                      const envContent = `# Couchbase Cluster Configuration
CB_CONN_STRING=https://${selectedCluster.toLowerCase()}.capella.ai
CB_USERNAME=${selectedCluster.toLowerCase()}_user
CB_PASSWORD=your_cluster_password
CB_BUCKET=default
CB_SCOPE=_default
CB_COLLECTION=_default
CB_INDEX=vector_index

# Capella API Configuration
CAPELLA_API_ENDPOINT=https://model.capella.llm
CAPELLA_API_LLM_MODEL=${selectedModel}
CAPELLA_API_LLM_KEY=${apiKeyId}

# Capella Embedding API Configuration
CAPELLA_API_EMBEDDING_MODEL=${selectedEmbeddingModel}
CAPELLA_API_EMBEDDINGS_KEY=${embeddingApiKeyId}
CAPELLA_API_EMBEDDING_MAX_TOKENS=1024

# OpenAI Configuration (if using external models)
OPENAI_MODEL=${openaiModel}
OPENAI_API_KEY=${openaiApiKey || 'your_openai_api_key'}

# Agent Catalog Configuration
AGENT_CATALOG_CONN_STRING=https://${selectedCluster.toLowerCase()}.capella.ai
AGENT_CATALOG_USERNAME=${selectedCluster.toLowerCase()}_user
AGENT_CATALOG_PASSWORD=your_catalog_password
AGENT_CATALOG_BUCKET=agent_catalog

# Arize Configuration (for monitoring)
ARIZE_SPACE_ID=${arizeSpaceId || 'your_arize_space_id'}
ARIZE_API_KEY=${arizeApiKey || 'your_arize_api_key'}

# Additional Configuration
TOKENIZERS_PARALLELISM=false`;

                      const blob = new Blob([envContent], { type: 'text/plain' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = '.env';
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      URL.revokeObjectURL(url);
                    }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download .env File
                  </Button>

                  <div className="text-sm text-gray-600">
                    Ready to integrate with your agent application
                  </div>
                </div>
              </div>
            </ConfigurationStep>
          </div>
        </div>
      </div>
    </div>
  );
}