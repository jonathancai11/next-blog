import siteMetadata from '@/data/siteMetadata'
import { projectData } from '@/data/projectData'
import { PageSeo } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSeo title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="container py-12 px-4">
          <div className="flex flex-wrap -m-4">
            <table className="text-left table-auto">
              <thead>
                <tr>
                  <th> </th>
                  <th>Name</th>
                  <th className="hidden sm:block">Description</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {projectData.map((project, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <img
                          src={project.icon}
                          style={{ width: '30px', marginRight: '10px' }}
                          alt=""
                        />
                      </td>
                      <td>{project.name}</td>
                      <td className="hidden sm:block">{project.description}</td>
                      <td>
                        <a href={project.link} target="_blank" rel="noreferrer">
                          {project.link_display}
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
