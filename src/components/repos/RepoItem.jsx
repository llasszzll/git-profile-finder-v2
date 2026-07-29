import React from 'react'
import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa'
import PropTypes from 'prop-types';

function RepoItem({repo}) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo

  return  <div className='mb-2 rounded-md card bg-base-300 hover:bg-base-100'>
      <div className="card-body">
          <h3 className="mb-2 text-xl font-semibold">
              <a href={html_url} target="_blank" rel="noreferrer">
                  <FaLink className='inline mr-1' aria-hidden="true" /> {name}
                  <span className="sr-only"> (opens in new tab)</span>
              </a>
          </h3>
          <p className="mb-3">{description}</p>
          <div className="flex flex-wrap gap-2">
              <div className="badge badge-info badge-lg">
                  <FaEye className='mr-2' aria-hidden="true" /> {watchers_count}
              </div>
              <div className="badge badge-success badge-lg">
                  <FaStar className='mr-2' aria-hidden="true" /> {stargazers_count}
              </div>
              <div className="badge badge-error badge-lg">
                  <FaInfo className='mr-2' aria-hidden="true" /> {open_issues}
              </div>
              <div className="badge badge-warning badge-lg">
                  <FaUtensils className='mr-2' aria-hidden="true" /> {forks}
              </div>
          </div>
      </div>
  </div>
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem