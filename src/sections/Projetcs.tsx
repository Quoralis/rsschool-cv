export function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul className="flex flex-col gap-1">
        <li className="project-item">
          <span>FunChat</span>
          <a href="https://quoralis-fun-chat.netlify.app/" target="_blank" rel="noopener noreferrer"
             className="project-link">View &#8599;</a>
        </li>
        <li className="project-item">
          <span>Async Race</span>
          <a href="https://quoralis-async-race.netlify.app/" target="_blank" rel="noopener noreferrer"
             className="project-link">View &#8599;</a>
        </li>
        <li className="project-item">
          <span>Decision Making Tool</span>
          <a href="https://quoralis-decison-making-tool.netlify.app/" target="_blank" rel="noopener noreferrer"
             className="project-link">View &#8599;</a>
        </li>
        <li className="project-item">
          <span>Store eCommerceTools</span>
          <a href="https://quoralis-team-ecommerce-application.netlify.app/" target="_blank"
             rel="noopener noreferrer"
             className="project-link">View &#8599;</a>
        </li>
      </ul>
    </section>
  );
}