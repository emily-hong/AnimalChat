import SinglePostOnBoard from "./SinglePostOnBoard";

export default function Posts() {
  const sectionStyle = {
    display: 'inline-flex',

  }

  return (
    <div className="postsSection" style={sectionStyle}>
      <SinglePostOnBoard />
      <SinglePostOnBoard />
      <SinglePostOnBoard />
      <SinglePostOnBoard />
      <SinglePostOnBoard />
      <SinglePostOnBoard />
      <SinglePostOnBoard />
      <SinglePostOnBoard />
      <SinglePostOnBoard />
      <SinglePostOnBoard />
    </div>
  );
}
