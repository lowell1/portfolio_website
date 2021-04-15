import { footer } from "../styles/footer.module.scss";

export default () => {
  return (
    <div className={footer}>
      <a target="_blank" href="https://www.github.com/lowell1">
        <img src="/images/logos/github.png" alt="github" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/lowell-jacobs">
        <img src="/images/logos/linkedin.png" alt="linkedin" />
      </a>
    </div>
  );
};
