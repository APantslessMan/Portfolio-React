import React from 'react';

interface ProjectCardProps {
  title: string;
  location: string;
  days: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, location, days, image }) => {
  return (
    <div className="col">
      <div
        className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{title}</h2>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img
                src="https://github.com/twbs.png"
                alt="Bootstrap"
                width="32"
                height="32"
                className="rounded-circle border border-white"
              />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#geo-fill"></use>
              </svg>
              <small>{location}</small>
            </li>
            <li className="d-flex align-items-center">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#calendar3"></use>
              </svg>
              <small>{days}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
