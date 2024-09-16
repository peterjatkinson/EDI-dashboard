import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Globe, Flag, ArrowUpRight, ArrowDownRight, Users, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const InsightCard = ({ title, children, gradientFrom, gradientTo }) => (
    <Card className="w-full mb-6">
      <CardHeader className={`bg-gradient-to-r from-${gradientFrom} to-${gradientTo} text-white p-4`}>
        <h2 className="text-2xl font-bold tracking-tight">Key insights: {title}</h2>
      </CardHeader>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
  
  
const geographicData = [
  { country: "United States", Person: 4, Organization: 10, Product: 4, Authorship: 2 },
  { country: "United Kingdom", Person: 1, Organization: 4, Product: 2, Authorship: 1 },
  { country: "Germany", Person: 0, Organization: 2, Product: 0, Authorship: 0 },
  { country: "Austria", Person: 1, Organization: 0, Product: 1, Authorship: 0 },
  { country: "Italy", Person: 0, Organization: 0, Product: 2, Authorship: 1 },
  { country: "Other", Person: 2, Organization: 4, Product: 4, Authorship: 5 },
];

const raceData = [
  { race: "White", count: 5 },
  { race: "Jewish", count: 2 },
  { race: "Unknown", count: 35 },
  { race: "Caucasian", count: 1 },
];

const RepresentationInsights = () => {
  const insights = [
    { icon: <Globe className="w-6 h-6 text-blue-500" />, text: <>A total of <strong>42</strong> countries are represented in the entirety of the content provided (this includes identifiable references to people/authors, organisations, and products/items).</> },
    { icon: <Flag className="w-6 h-6 text-red-500" />, text: <>The country accounting for the most identified geographic references is United States, with a total of <strong>156</strong> references.</> },
    { icon: <ArrowUpRight className="w-6 h-6 text-green-500" />, text: <>Countries from the Global North account for <strong>78%</strong> of all identified geographic references.</> },
    { icon: <ArrowDownRight className="w-6 h-6 text-yellow-500" />, text: <>Countries from the Global South account for <strong>22%</strong> of all identified geographic references.</> },
    { icon: <Users className="w-6 h-6 text-purple-500" />, text: <>Of the references to people whose race is identifiable, <strong>65%</strong> are White. However, the race of <strong>30%</strong> of people mentioned was not identifiable.</> },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {insights.map((insight, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center text-center">
            <div className="mb-2">{insight.icon}</div>
            <p className="text-sm">{insight.text}</p>
          </div>
        ))}
      </div>
      <Button className="mb-6 flex items-center space-x-2">
        <span>Click to review further</span>
        <ChevronRight className="w-4 h-4" />
      </Button>
      <div className="space-y-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Geographic Distribution of References by Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={geographicData}>
              <XAxis dataKey="country" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Person" stackId="a" fill="#8884d8" />
              <Bar dataKey="Organization" stackId="a" fill="#82ca9d" />
              <Bar dataKey="Product" stackId="a" fill="#ffc658" />
              <Bar dataKey="Authorship" stackId="a" fill="#ff7300" />
            </BarChart>
          </ResponsiveContainer>
          <Button className="mt-4 flex items-center space-x-2">
            <span>Click to review further</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Distribution of Race in People/Authors</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={raceData}>
              <XAxis dataKey="race" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <Button className="mt-4 flex items-center space-x-2">
            <span>Click to review further</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const InclusiveLanguageInsights = () => {
  const insights = [
    {
      question: "Has gender neutral language always been used instead of gendered language where appropriate?",
      status: "issue",
      details: "Some instances of gendered language were found."
    },
    {
      question: "Do images depicting people show a diverse range of individuals?",
      status: "info",
      details: <><strong>15</strong> images identified: <strong>8</strong> White, <strong>4</strong> Black, <strong>2</strong> Asian, <strong>1</strong> Hispanic/Latino.</>
    },
    {
      question: "Is there use of stereotypes or generalisations about cultural, ethnic or other minority groups, including any of the following: ageist, ableist, sexist or racist terminology or descriptions?",
      status: "success",
      details: "No issues found."
    },
    {
      question: "Has any discipline-specific jargon or cultural references used in the content been explained?",
      status: "issue",
      details: "Some unexplained jargon or cultural references found."
    }
  ];

  return (
    <ul className="space-y-4">
      {insights.map((insight, index) => (
        <li key={index} className="flex flex-col space-y-2 p-4 bg-white rounded-lg shadow">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              {insight.status === 'issue' && <AlertCircle className="w-6 h-6 text-yellow-500" />}
              {insight.status === 'success' && <CheckCircle2 className="w-6 h-6 text-green-500" />}
              {insight.status === 'info' && <Users className="w-6 h-6 text-blue-500" />}
            </div>
            <div>
              <p className="text-base font-semibold">{insight.question}</p>
              <p className="text-base">{insight.details}</p>
            </div>
          </div>
          <Button className="self-end">
            Click to review further
          </Button>
        </li>
      ))}
    </ul>
  );
};

const EDIAcknowledgementInsight = () => (
  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow">
    <div className="flex-shrink-0">
      <CheckCircle2 className="w-10 h-10 text-green-500" />
    </div>
    <div className="flex-grow">
      <p className="text-base font-semibold mb-2">
        Is there any discussion of historical or current EDI challenges within the field/discipline?
      </p>
      <p className="text-base mb-2"><strong>3</strong> instances found</p>
      <Button className="flex items-center space-x-2">
        <span>Click to review further</span>
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  </div>
);

const AssessmentLearningInsights = () => {
  const insights = [
    {
      text: <>There are <strong>3</strong> types of assessment in the materials provided, including <strong>1</strong> presentation, <strong>1</strong> essay, and <strong>1</strong> reflective report.</>,
      hasReviewButton: false,
      isPositive: true
    },
    {
      text: "The assessments provided do not provide clear and measurable marking criteria and/or rubrics.",
      hasReviewButton: true,
      isPositive: false
    },
    {
      text: <>In the materials provided <strong>8</strong> overall module learning outcomes and <strong>24</strong> session learning outcomes have been identified. Of these, <strong>18</strong> are judged to be action-oriented, clear and measurable, while <strong>14</strong> are not.</>,
      hasReviewButton: true,
      isPositive: false
    },
    {
      text: <>The assessments provided align with <strong>3</strong> of the learning outcomes.</>,
      hasReviewButton: true,
      isPositive: true
    }
  ];

  return (
    <ul className="space-y-4">
      {insights.map((insight, index) => (
        <li key={index} className="bg-white rounded-lg shadow p-4 flex items-start space-x-4">
          <div className="flex-shrink-0 mt-1">
            {insight.isPositive ? 
              <CheckCircle2 className="w-6 h-6 text-green-500" /> :
              <AlertCircle className="w-6 h-6 text-yellow-500" />
            }
          </div>
          <div className="flex-grow">
            <p className="text-base mb-2">{insight.text}</p>
            {insight.hasReviewButton && (
              <Button className="flex items-center space-x-2">
                <span>Click to review further</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

const KeyInsightsDashboard = () => {
  const [activeSection, setActiveSection] = useState('representation');

  const sections = {
    representation: { title: "Representation in Content", component: RepresentationInsights, gradientFrom: "blue-500", gradientTo: "purple-600" },
    inclusive: { title: "Inclusive Language and Imagery", component: InclusiveLanguageInsights, gradientFrom: "purple-500", gradientTo: "pink-500" },
    edi: { title: "Acknowledgement of EDI Issues", component: EDIAcknowledgementInsight, gradientFrom: "teal-500", gradientTo: "blue-500" },
    assessment: { title: "Assessment Methods and Learning Outcomes", component: AssessmentLearningInsights, gradientFrom: "purple-500", gradientTo: "indigo-500" }
  };
  
  

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">Key Insights</h1>
          <nav>
            {Object.entries(sections).map(([key, { title }]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`block w-full text-left p-2 rounded ${activeSection === key ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {title}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex-1 p-8 overflow-auto">
      <InsightCard 
  title={sections[activeSection].title}
  gradientFrom={sections[activeSection].gradientFrom}
  gradientTo={sections[activeSection].gradientTo}
>
  {React.createElement(sections[activeSection].component)}
</InsightCard>      </div>
    </div>
  );
};

export default KeyInsightsDashboard;