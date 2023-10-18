//src/app/about/page.tsx
'use client';
import { FC, useEffect } from 'react';
import Link from 'next/link';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';


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
      <div className="container mx-auto bg-base text-paragraph">
        <h1 className="text-4xl font-bold mb-6 text-headline">
          About the Countries API App
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border p-4">
            <p className="text-lg mb-4">
              This application is a project aimed at practicing and honing
              skills in manipulating and dealing with APIs.
            </p>
          </div>
          <div className="border p-4">
            <h2 className="text-2xl font-bold mb-4 text-headline">
              Purpose of the Countries API
            </h2>
            <p className="text-lg mb-4">
              The Countries API is a free and open-source resource that provides
              information about countries, continents, and languages. It&apos;s
              a valuable tool for developers who need to integrate geographical
              data into their applications or platforms.
            </p>
          </div>
          <div className="border p-4 mb-4">
            <h2 className="text-2xl font-bold mb-4 text-headline">Usage</h2>
            <p className="text-lg mb-4">
              Developers utilize the Countries API to fetch data regarding
              different countries, their languages, currencies, and much more.
              This data can then be used to enhance the user experience on their
              platforms by providing relevant local information.
            </p>
          </div>
          <div className="border p-4 mb-4">
            <h2 className="text-2xl font-bold mb-4 text-headline">
              How to Use
            </h2>
            <p className="text-lg mb-4">
              The data from the Countries API can be accessed via RESTful
              endpoints or GraphQL queries, making it a flexible choice for
              different types of projects. Developers can make HTTP requests to
              the API&apos;s endpoints to retrieve the data they need.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* REST API Usage */}
          <section className="border p-4">
            <h2 className="text-2xl font-bold mb-4 text-headline">
              Example of REST API Usage:
            </h2>
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

          {/* Explanation for REST API */}
          <section className="border p-4">
            <div className="mt-4">
              <p className="text-headline">Explanation:</p>
              <ul>
                <li>
                  <strong className="text-secondary">Line 1:</strong> A GET
                  request is sent to the REST API using Axios to retrieve all
                  country data.
                </li>
                <li>
                  <strong className="text-secondary">Line 2:</strong> The
                  response data is stored in the variable{' '}
                  <code>restCountriesData</code>.
                </li>
                <li>
                  <strong>Line 3:</strong> The URL of the US flag is found by
                  searching through the response data for the country with the
                  code &apos;US&apos;, and accessing its flag URL.
                </li>
              </ul>
            </div>
          </section>

          {/* GraphQL API Usage */}
          <section className="border p-4">
            <h2 className="text-2xl font-bold mb-4">
              Example of GraphQL API Usage:
            </h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto ">
              <code className="language-javascript">
                {`
const graphqlQuery = \`{ countries { code, name, languages { code, name } } }\`;
const graphqlData = await request('https://countries.trevorblades.com', graphqlQuery);
                        `}
              </code>
            </pre>
          </section>

          {/* Explanation for GraphQL API */}
          <section className="border p-4">
            <div className="mt-4">
              <p className="text-headline">Explanation:</p>
              <ul>
                <li>
                  <strong className="text-secondary">Line 1:</strong> The
                  GraphQL query is defined, requesting country code, name, and
                  languages.
                </li>
                <li>
                  <strong className="text-secondary">Line 2:</strong> The query
                  is sent to the GraphQL API using the <code>request</code>{' '}
                  function from the <code>graphql-request</code> library, and
                  the response data is stored in the variable{' '}
                  <code>graphqlData</code>.
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className="mt-8 text-center btn btn-ghost normal-case text-xl rounded  bg-button text-buttonText hover:text-headline">
          <Link href="/countries">Back to Countries</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
