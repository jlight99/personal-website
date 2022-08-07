import React from 'react';
import './Experience.css';
import ExperienceItem from './ExperienceItem';

class Experience extends React.Component {
    render() {
        return (
            <a id="experience">
                <div className="experience-header">Experience</div>
                <span className="experience-section">

                    <ExperienceItem
                        jobTitle="Software Engineer Intern"
                        startDate="August 2021"
                        endDate="November 2021"
                        techStack="Go"
                        logoSrc="resources/lyft.png"
                        description="My final co-op was at Lyft, working with the Dispatch Infrastructure team. I worked on improving the infrastructure of the core Dispatch logic by automating
                            regression testing."
                    />

                    <ExperienceItem
                        jobTitle="Software Engineer Intern"
                        startDate="January 2021"
                        endDate="April 2021"
                        techStack="C++, Python"
                        logoSrc="resources/facebook.png"
                        description="My fifth co-op was at Facebook, working under the Reality Labs division. My work primarily focused on C++-Python interoperability, and using Pybind to enable
                            Python projects to be used within C++ programs."
                    />

                    <ExperienceItem
                        jobTitle="Software Developer Intern"
                        startDate="May 2020"
                        endDate="August 2020"
                        techStack="React, Python, GraphQL"
                        logoSrc="resources/gem.png"
                        description="My fourth co-op was at Gem, a Series B startup whose product increases the efficiency and effectiveness of sourcing and recruiting,
                            and provides insights into all stages of the hiring pipeline. The highlight of the term for me was working on the Free for Startups program launch.
                            Free for Startups is a program where startups can use Gem for free, and my role was to build the webpage (https://gem.com/startups) and signup flow for the program.
                            This was a really cool project because we were trying to launch the program as quickly as possible, so I got to experience the adrenaline and pressure of
                            working with a deadline, and it was also relatively high-profile, so I got to work with and deliver status reports to key stakeholders including the co-founders.
                            Another fun project I built out during this term was enabling editing of candidate work/eduation experiences. Sourcing is a key feature of Gem's product
                            and we create profiles for candidates who are sourced through Gem. These candidate profiles include relevant information about the candidate such as their work
                            and education history, and this information was previously immutable and error-prone, so I implemented the ability to add, edit, and delete experiences.
                            To complement this project, I also wrote a script that parsed the resumes of all existing candidates (>200K) without work/education experiences and backfilled them."
                    />

                    <ExperienceItem
                        jobTitle="Backend Developer Intern"
                        startDate="September 2019"
                        endDate="December 2019"
                        techStack="Golang, gRPC/Protobuf, SQL, Redis"
                        logoSrc="resources/textnow_name.jpeg"
                        description="My third co-op was at TextNow, a 10-year-old startup whose main product was a free calling and texting app.
                            I was a member of the backend team, which dealt with everything from fraud to feature development.
                            One of the app's greatest draws was the real phone number it assigned users, and my main project
                            was building a service which tested these numbers to ensure they are able to receive calls and messages before assigning them.
                            My service tested over 125K numbers in production over the course of a day and greatly bolstered number availability.
                            It improved upon the existing solution by reducing testing time per number from nearly a day to under a minute
                            by verifying the numbers concurrently, introduced retesting logic for failed numbers, and added monitoring.
                            Aside from the phone number verification service, I also contributed to anti-abuse efforts
                            by building a URL parser to drop suspicious texts and storing the IP information of
                            fraudulent users in a Redis cache to prevent future frauds."
                    />

                    <ExperienceItem
                        jobTitle="Full-stack Developer Intern"
                        startDate="January 2019"
                        endDate="April 2019"
                        techStack="Java, Angular, Docker, SQL"
                        logoSrc="resources/sap.png"
                        description="My second co-op was at SAP, where I worked on the Commerce Cloud. Specifically, my team worked on the
                            tool which automated the provisioning and deployment of the Commerce Cloud. The main feature the team
                            worked on during my time there was an autoscaling feature, which scaled the number of storefront pods based on demand.
                            I implemented the autoscaling settings page on the portal to enable customers to customize the autoscaling feature,
                            including turning on/off autoscaling, seting min/max bounds for the number of pods, choosing the scaling metric, etc.
                            I also improved the autoscaling testing solution by automating load generation, and reduced manual setup time by over 90%."
                    />

                    <ExperienceItem
                        jobTitle="Software Developer Intern"
                        startDate="May 2018"
                        endDate="August 2018"
                        techStack="Java, Tableau, SQL"
                        logoSrc="resources/Dematic_Logo_Rect.png"
                        description="My very first co-op was at Dematic, a supply chain solutions company, where my team led the migration of
                            the Dematic software to cloud, and worked on decomposing the existing monolith into microservices.
                            My main project was building interactive dashboards with Tableau to help customers monitor KPIs.
                            I successfully demoed these dashboards to company executives, and the dashboards were later demoed at the MHLC international conference.
                            Additionally, I built a service to save polygon coordinates in the database, which laid the foundation for the development
                            of map drilldown features."
                    />
                </span>
            </a>
        )
    }
}

export default Experience;