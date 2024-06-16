import React from "react";
import ProjectCard from "./ProjectCard";

const MainContent: React.FC = () => {
  return (
    <main className="fade-in">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="gradient-border">Online Store Project</div>
          </div>
        </div>
      </div>

      <div className="container px-5 py-4" id="custom-cards">
        <h2 className="pb-2 border-bottom">Projects</h2>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6"></div>
          </div>
        </div>
        <div className="row extended-container row-cols-1 row-cols-lg-3 align-items-center g-4 py-5">
          <ProjectCard
            title="Short title, long jacket"
            location="Earth"
            days="3d"
            image="unsplash-photo-1.jpg"
          />
          <ProjectCard
            title="Much longer title that wraps to multiple lines"
            location="Pakistan"
            days="4d"
            image="unsplash-photo-2.jpg"
          />
          <ProjectCard
            title="Another longer title belongs here"
            location="California"
            days="5d"
            image="unsplash-photo-3.jpg"
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
