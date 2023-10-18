//src/app/about/page.tsx
'use client';
import { FC, useEffect } from 'react';
import Link from 'next/link';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css'; // Choose a style that you like

interface Props {}

const AboutPage: FC<Props> = (): JSX.Element => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div
      className="min-h-screen bg-base-200 p-6 flex flex-col justify-center text-center break-words"
      data-theme="black"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">About the Countries API App</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border p-4">
            <p className="text-lg mb-4">
              This application is a project aimed at practicing and honing
              skills in manipulating and dealing with APIs.
            </p>
          </div>
          <div className="border p-4">
            <h2 className="text-2xl font-bold mb-4">
              Purpose of the Countries API
            </h2>
            <p className="text-lg mb-4">
              The Countries API is a free and open-source resource that provides
              information about countries, continents, and languages. It&apos;s
              a valuable tool for developers who need to integrate geographical
              data into their applications or platforms.
            </p>
          </div>
          <div className="border p-4">
            <h2 className="text-2xl font-bold mb-4">Usage</h2>
            <p className="text-lg mb-4">
              Developers utilize the Countries API to fetch data regarding
              different countries, their languages, currencies, and much more.
              This data can then be used to enhance the user experience on their
              platforms by providing relevant local information.
            </p>
          </div>
          <div className="border p-4">
            <h2 className="text-2xl font-bold mb-4">How to Use</h2>
            <p className="text-lg mb-4">
              The data from the Countries API can be accessed via RESTful
              endpoints or GraphQL queries, making it a flexible choice for
              different types of projects. Developers can make HTTP requests to
              the API&apos;s endpoints to retrieve the data they need.
            </p>
          </div>
        </div>
        <section className="my-8">
          <h3 className="text-xl font-bold mb-4">Example of REST API Usage:</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
            <code className="language-javascript">
              {`
                const restCountriesResponse = await axios.get('https://restcountries.com/v3.1/all');
                const restCountriesData = restCountriesResponse.data;
                const flagUrl = restCountriesData.find(country => country.cca2 === 'US').flags[1];
              `}
            </code>
          </pre>
        </section>
        <section className="my-8">
          <h3 className="text-xl font-bold mb-4">
            Example of GraphQL API Usage:
          </h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto ">
            <code className="language-javascript">
              {`
                const graphqlQuery = \`{ countries { code, name, languages { code, name } } }\`;
                const graphqlData = await request('https://countries.trevorblades.com', graphqlQuery);
              `}
            </code>
          </pre>
        </section>
        <div className="mt-8 text-center btn btn-ghost normal-case text-xl rounded  bg-button text-buttonText hover:text-headline">
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
