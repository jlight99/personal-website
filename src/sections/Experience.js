import React from 'react';
import './Experience.css';
import ExperienceItem from './ExperienceItem';

class Experience extends React.Component {
    render() {
        return (
            <a id="experience">
                <div className="experience-header">Experience</div>
                <span className="experience-section">

                    <div className="experience-intro">
                        Over the course of university, I was fortunate to have had six internships,
                        through which I got the chance to work at companies of varying sizes ranging from Series B startups to Big Tech,
                        and work across various sectors from e-commerce to rideshare to AR/VR. I've worked as a data visualizer,
                        a full-stack developer, a backend developer, and an infrastructure engineer, programming in Go,
                        Python, C++, JavaScript, and Java. These internships were as much a part of my university education as any of my courses.
                    </div>

                    <ExperienceItem
                        jobTitle="Software Engineer Intern"
                        startDate="August 2021"
                        endDate="November 2021"
                        techStack="Go, Kubernetes"
                        logoSrc="resources/lyft.png"
                        website="https://www.lyft.com/"
                        description={
                            <div>
                                My final co-op was at Lyft, a rideshare company innovating the transportation space.
                                I worked on the Dispatch Infrastructure team, which was in charge of building the
                                infra for Lyft's core rideshare engine.
                                
                                <br/><br/>
                                
                                During the internship, I worked on improving the regression testing of a core service.
                                The new workflow I built enabled regression testing of the T0 service to be fully automated,
                                have improved robustness, and increased coverage and frequency.
                                I achieved this by creating a cronjob that runs daily to replace the manual process that
                                originally occured every few months.
                                The cronjob chooses input from the top 50 busiest locations to test, pulling the data
                                of the busiest locations dynamically, which improves test coverage
                                from the previous workflow which tested input from the same 3 locations only.
                                The cronjob runs the regression test for each set of input, updates the logs,
                                records the stats of failed tests, fires an alert if the number of failed tests exceeds a threshold,
                                and creates and automerges a GitHub pull request for the log changes.

                                <br/><br/>

                                This internship was a valuable growth experience for me. Coming from a mainly backend/full-stack
                                developer background, I've always found infra to be important but mysterious, which is why I sought out this
                                opportunity to work on infra in an established codebase with experienced mentors. It was fun learning
                                to deploy Kubernetes cronjobs, employ the GitHub API to automate pull request creation and merging,
                                and productionize the project by setting up stats, dashboards, and alerts. Another learning point was:
                                this was the first project that I personally scoped out, wrote a design doc for, then held a design review
                                meeting where I discussed the feasibility of my design with my team. I really appreciated being able to do
                                my own scoping and design, and while prepping for the design review was nervewracking,
                                I felt like I grew coming out of it, which felt immensely rewarding.
                            </div>
                        }
                    />

                    <ExperienceItem
                        jobTitle="Software Engineer Intern"
                        startDate="January 2021"
                        endDate="April 2021"
                        techStack="C++, Python, Pybind"
                        logoSrc="resources/facebook.png"
                        website="https://www.facebook.com/"
                        description={
                            <div>
                                My fifth co-op was at Facebook, working under the Reality Labs division.
                                My team focused on research around AR mapping.

                                <br/><br/>

                                My work primarily focused on C++-Python interoperability, and using Pybind to enable Python projects
                                to be used within C++ programs. One benefit of this interoperability is: ML-related research projects
                                are often written in Python due to the many helpful ML-related libraries Python offers. On the other hand,
                                many production systems that are performance-sensitive are written in C++ for its efficiency. Interoperability
                                between these two programming languages enables researchers to test out their experimental Python projects within
                                an established C++ system. The ability to run a research project in a "production" environment,
                                instead of just as a standalone project, provides crucial feedback and can greatly aid and accelerate the research.

                                <br/><br/>

                                During my internship, I not only delivered on the original objective to successfully embed a Python experimental project
                                into an existing C++ production system, but also built a library that facilitates using Pybind for
                                Python-C++ interoperability that can be called by other clients. I also created a tutorial repo that contains
                                code snippets demonstrating the solutions to common interoperability use cases.
                            </div>
                        }
                    />

                    <ExperienceItem
                        jobTitle="Software Developer Intern"
                        startDate="May 2020"
                        endDate="August 2020"
                        techStack="React, Python, GraphQL"
                        logoSrc="resources/gem.png"
                        website="https://www.gem.com/"
                        description={
                            <div>
                                My fourth co-op was at Gem, a Series B startup whose product increases the efficiency and effectiveness of sourcing and recruiting,
                                and provides insights into all stages of the hiring pipeline.
                                
                                <br/><br/>
                        
                                The highlight of the term for me was working on the Free for Startups program launch. Free for Startups is a program where startups
                                can use Gem for free, and my role was to build the webpage (https://gem.com/startups) and signup flow for the program.
                                This was a really cool project because we were trying to launch the program as quickly as possible, so I got to experience the adrenaline and pressure of
                                working with a deadline, and it was also relatively high-profile, so I got to work with and deliver status reports to key stakeholders including the co-founders.
                        
                                <br/><br/>

                                Another fun project I built out during this term was enabling editing of candidate work/eduation experiences. Sourcing is a key feature of Gem's product
                                and we create profiles for candidates who are sourced through Gem. These candidate profiles include relevant information about the candidate such as their work
                                and education history, and this information was previously immutable and error-prone, so I implemented the ability to add, edit, and delete experiences.
                                To complement this project, I also wrote a script that parsed the resumes of all existing candidates (>200K) without work/education experiences and backfilled them.
                            </div>
                        }
                    />

                    <ExperienceItem
                        jobTitle="Backend Developer Intern"
                        startDate="September 2019"
                        endDate="December 2019"
                        techStack="Golang, gRPC/Protobuf, SQL, Redis"
                        logoSrc="resources/textnow_name.jpeg"
                        website="https://www.textnow.com/"
                        description={
                            <div>
                                My third co-op was at TextNow, a 10-year-old startup whose main product was a free calling and texting app.
                                I was a member of the backend team, which dealt with everything from fraud to feature development.

                                <br/><br/>

                                One of the app's greatest draws was the real phone number it assigned users, and my main project was building
                                a service which tested these numbers to ensure they are able to receive calls and messages before being assigned.
                                My service tested over 125K numbers in production over the course of a day and greatly bolstered number availability.
                                It improved upon the existing solution by reducing testing time per number from nearly a day to under a minute
                                by verifying the numbers concurrently, introducing retesting logic for failed numbers, and adding monitoring.

                                <br/><br/>

                                Aside from the phone number verification service, I also contributed to anti-abuse efforts
                                by building a URL parser to drop suspicious texts and storing the IP information of
                                fraudulent users in a Redis cache to prevent future frauds.
                            </div>
                        }
                    />

                    <ExperienceItem
                        jobTitle="Full-stack Developer Intern"
                        startDate="January 2019"
                        endDate="April 2019"
                        techStack="Java, Angular, Docker, SQL"
                        logoSrc="resources/sap.png"
                        website="https://www.sap.com/"
                        description={
                            <div>
                                My second co-op was at SAP, where I worked on the Commerce Cloud. Specifically, my team worked on the
                                tool which automated the provisioning and deployment of the Commerce Cloud. The main feature the team
                                worked on during my time there was an autoscaling feature, which scaled the number of storefront pods based on demand.
                                I implemented the autoscaling settings page on the portal to enable customers to customize the autoscaling feature,
                                including turning on/off autoscaling, seting min/max bounds for the number of pods, choosing the scaling metric, etc.
                                I also improved the autoscaling testing solution by automating load generation, and reduced manual setup time by over 90%.
                            </div>
                        }
                    />

                    <ExperienceItem
                        jobTitle="Software Developer Intern"
                        startDate="May 2018"
                        endDate="August 2018"
                        techStack="Java, Tableau, SQL"
                        logoSrc="resources/Dematic_Logo_Rect.png"
                        website="https://www.dematic.com/"
                        description={
                            <div>
                                My very first co-op was at Dematic, a supply chain solutions company, where my team led the migration of
                                the Dematic software to cloud and worked on decomposing the existing monolith into microservices.
                                My main project was building interactive dashboards with Tableau to help customers monitor KPIs.
                                I successfully demoed these dashboards to company executives, and the dashboards were later demoed at the MHLC international conference.
                                Additionally, I built a service to save polygon coordinates in the database, which laid the foundation for the development
                                of map drilldown features.
                            </div>
                        }
                    />
                </span>
            </a>
        )
    }
}

export default Experience;