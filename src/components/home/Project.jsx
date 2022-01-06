import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import GithubContributionGraph from "./GithubContributionGraph";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic, deployment }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <>
      <div
        fluid
        id="projects"
        className="container-fluid text-sm-center p-5 bg-light m-0"
      >
        <Container className="">
          <h2 className="display-4 pb-5 text-center">{heading}</h2>
          <Row>
            {projectsArray.length
              ? projectsArray.map((project, index) => (
                  <ProjectCard
                    key={`project-card-${index}`}
                    id={`project-card-${index}`}
                    value={project}
                    deployment={deployment[index]}
                  />
                ))
              : dummyProjectsArr.map((project, index) => (
                  <ProjectCard
                    key={`dummy-${index}`}
                    id={`dummy-${index}`}
                    value={project}
                  />
                ))}
          </Row>
        </Container>
      </div>
      <GithubContributionGraph username={username} />
    </>
  );
};

export default Project;
